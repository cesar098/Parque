import { ModalController, NavParams } from '@ionic/angular';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  image_url:any;
  @ViewChild('slider', {read: ElementRef}) slider: ElementRef;

  sliderOpts= {
    zoom: {
      maxRatio: 3,
    }
  }
  constructor(
    private modalCtrl: ModalController,
    private navParams: NavParams
  ) { }

    
  

  ngOnInit() {
    this.image_url= this.navParams.get('image_url')
  }


zoom(zoomb: boolean){
  let zoom = this.slider.nativeElement.zoom;
  if(zoomb){
    zoom.in();
  }else{
    zoom.out();
  }
}
  close(){
    this.modalCtrl.dismiss();
  }
}
