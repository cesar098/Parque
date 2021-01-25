import { Platform } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {
  icon: any;
  backButtonSubscription;
  constructor(
    public platform: Platform
  ) { }

  ngOnInit() {
    this.icon = 'logo1.png'
  }

  salir() {
    this.backButtonSubscription = this.platform.backButton.subscribeWithPriority(666666, () => {
      console.log(this.constructor.name);
      if(window.confirm("Seguro que Desea salir"))
        navigator['app'].exitApp();
    });
  }
}
