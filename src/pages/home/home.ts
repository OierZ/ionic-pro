import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Pro } from '@ionic/pro';
import { CallNumber } from '@ionic-native/call-number';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  vappName;
  packageName;
  versionCode;
  versionNumber;

  constructor(public navCtrl: NavController, private callNumber: CallNumber) {

    Pro.monitoring.exception(new Error('Error Entrar App'));
  }

  getErrorMonitoring() {
    Pro.monitoring.exception(new Error('Error Click'));
  }

  phoneCall() {
    this.callNumber.callNumber("18001010101", true)
      .then(res => console.log('Launched dialer!', res))
      .catch(err => console.log('Error launching dialer', err));
  }

}
