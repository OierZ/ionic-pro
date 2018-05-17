import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Pro } from '@ionic/pro';
import { AppVersion } from '@ionic-native/app-version';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  version;
  constructor(private appVersion: AppVersion, public navCtrl: NavController) {
    this.version = this.appVersion.getAppName();
    Pro.monitoring.exception(new Error('Error Entrar App'));

  }

  getErrorMonitoring() {
    Pro.monitoring.exception(new Error('Error Click'));
  }

}
