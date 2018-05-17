import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Pro } from '@ionic/pro';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

    Pro.monitoring.exception(new Error('Error Entrar App'));
  }

  getErrorMonitoring() {
    Pro.monitoring.exception(new Error('Error Click'));
  }

}
