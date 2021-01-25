import { IntroPage } from './../pages/intro/intro.page';
import { InfoPage } from './../pages/info/info.page';
import { AnimalService } from './../services/animal.service';
import { RutaPage } from './../pages/ruta/ruta.page';
import { ScannerPage } from './../pages/scanner/scanner.page';
import { Component, OnInit } from '@angular/core';
import { IonSlides, ModalController, Platform } from '@ionic/angular';
import { DetailPage } from '../pages/detail/detail.page';
import { BackgroundMode } from '@ionic-native/background-mode/ngx';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  animal: any;
  //images: Array<{id: string; link: string; nombreId: string; nombre: string}> = [];
  localizacion: any;
  ini: boolean=false;

  constructor(
    private modalCtrl: ModalController,
    private animalService: AnimalService,
    private backgMode: BackgroundMode,
    private ptf: Platform,
    private localnot: LocalNotifications,
    private geoloc: Geolocation
  ) {
    //this.loadGalery();
    //this.notificacionLocat();
  }


  ngOnInit(){
    if (!this.ini) {
      this.mdlModal();
      this.ini = true;
    }
    //this.notificacionLocat();
  }

  async mdlModal(){
    const modal = await this.modalCtrl.create({
      component: IntroPage
    });
    return await modal.present();
  }


  async modalQR() {
    const modal = await this.modalCtrl.create({
      component: ScannerPage,
      cssClass: 'my-custo-m-class'
    });
    return await modal.present();
  }
  
  async modalMap() {
    const modal = await this.modalCtrl.create({
      component: RutaPage,
      cssClass: 'my-custo-m-class'
    });
    return await modal.present();
  }

  loadGalery() {
    this.animal = this.animalService.getAnimal();
  //  console.log(this.animal);
    // tslint:disable-next-line: prefer-for-of
    for (let index = 0; index < this.animal.length; index++) {
      const ani = this.animal[index].imagen;
      // for (let j = 0; j < ani.length; j++) {
      const aniid = { id: ani[0].id, link: ani[0].link, nombreId: this.animal[index].id, nombre: this.animal[index].nombre  };
        // console.log(aniid);
        // if (aniid.id === '0') {
      //this.images.push(aniid);
        // }
      // }
      // console.log(ani);
      // this.images.push(ani);
      // console.log(this.images);
    }
    //console.log(this.images);
  }
  
  async ver(id) {
     const modal = await this.modalCtrl.create({
       component: DetailPage,
       componentProps: {
         id
       }
     });
     return await modal.present();
     console.log(id);
   }

   async modalinfo() {
    const modal = await this.modalCtrl.create({
      component: InfoPage,
      cssClass: 'my-custom-modal-css-info'
    });
    await modal.present();
   }

   async localnotif() {

    const locate= { lat: '-21.707374', lng: '-64.614683' }
      const mylot = await this.getLocation1();
    this.animal = this.animalService.getAnimal();
    /*var demon = this.animal.filter(retorn => {
        return ((this.getDistanceFromLatLonInKm(mylot.lng, retorn.locate.lng, mylot.lat, retorn.locate.lat) >0.4))
      })
      console.log(demon)*/
      // tslint:disable-next-line: prefer-for-of
      for (let o = 0; o < this.animal.length; o++) {
        const dis = this.animal[o].locate;
        const diss = this.getDistanceFromLatLonInKm(mylot.lng, dis.lng, mylot.lat, dis.lat);
        //const diss = this.getDistanceFromLatLonInKm(locate.lng, dis.lng, locate.lat, dis.lat);
        if (diss < 10) {
        console.log(diss);
        this.localnot.schedule(
           {
             id: o,
             text: 'Detalle de ' + this.animal[o].nombre,
             actions: [
               { id: 'yes', title: 'Yes' },
               { id: 'no', title: 'No' }
             ]
           });
           /* this.localnot.on('yes', () => {
              this.ver(this.animal[o].id);
            });*/
         this.localnot.on('yes').subscribe(notificacion => {
          this.ver(this.animal[o].id);
         })
         }
      }
    }


   // espacio para trabajo con background Mode

   // prueba 1 version1.4 creo revisar!!

   async notificacionLocat(){
     const coordsP = {
       lat: -21.707374,
       lng: -64.614683
     };
     this.animal = this.animalService.getAnimal();
     this.backgMode.setEnabled(true);
     this.ptf.ready().then(() => {
       this.backgMode.on('activate').subscribe(() => {
           //this.backgMode.disableWebViewOptimizations();
           setInterval( async function(){
            const mylot = await this.getLocation1();
            // tslint:disable-next-line: prefer-for-of
            for (let o = 0; o < this.animal.length; o++) {
              const dis = this.animal[o].locate;
              const diss = this.getDistanceFromLatLonInKm(mylot.lng, dis.lng, mylot.lat, dis.lat);
              console.log(dis);
              if (diss > 4) {
               this.localnot.schedule(
                 {
                   id: o,
                   text: 'Detalle de ' + this.animal[0].nombre,
                   actions: [
                     { id: 'yes', title: 'Yes' },
                     { id: 'no', title: 'No' }
                   ]
                 });
               this.localnot.on('yes', () => {
                 this.ver(this.animal[o].id);
               });
               break; }
            }
          }, 10000);
         });
         /*
         TRATANDO DE HACER DIRECTO DE UN PLUGIN EL MODO SEGUNDO PLANO
         SPOILER!!!
         NO FUNCIONA NO PIERDA TIEMPO
         cordova.plugins.BackgroundMode.onactivate = function() {
           setInterval( async function(){
             const mylot = await this.getLocation1();
             // tslint:disable-next-line: prefer-for-of
             for (let o = 0; o < this.animal.length; o++) {
               const dis = this.animal[o].locate;
               if (this.calculateDistance(mylot.lng, dis.lng, mylot.lat, dis.lat) > 4) {
                this.localnot.schedule(
                  {
                    id: 1,
                    text: 'Detalle de ' + this.animal[0].nombre,
                    actions: [
                      { id: 'yes', title: 'Yes' },
                      { id: 'no', title: 'No' }
                    ]
                  });
                this.localnot.on('yes', () => {
                  this.ver(this.animal[o].id);
                });
                break; }
             }
           }, 10000);
         };
         */
       
       this.backgMode.enable();
     });
    }


    calculateDistance(lon1, lon2, lat1, lat2) {
      const p = 0.017453292519943295;
      const c = Math.cos;
      const a = 0.5 - c((lat1 - lat2) * p) / 2 + c(lat2 * p) * c((lat1) * p) * (1 - c(((lon1 - lon2) * p))) / 2;
      const dis = (12742 * Math.asin(Math.sqrt(a)));
      const mtrs = Math.trunc(dis);
      return (mtrs);
    }
    
    
    getDistanceFromLatLonInKm(lon1, lon2, lat1, lat2) {
      var R = 6371; // Radius of the earth in km
      var dLat = this.deg2rad(lat2-lat1);  // deg2rad below
      var dLon = this.deg2rad(lon2-lon1); 
      var a = 
        Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) * Math.sin(dLon/2) * Math.sin(dLon/2); 
      var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
      var d = R * c; // Distance in km
      return (d*1000);
    }
    
    deg2rad(deg) {
      return deg * (Math.PI/180)
    }
  async getLocation1() {
    this.localizacion = await this.geoloc.getCurrentPosition();
    return {
      lat: this.localizacion.coords.latitude,
      lng: this.localizacion.coords.longitude
    };
  }
}
