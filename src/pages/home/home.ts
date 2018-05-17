import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Pro } from '@ionic/pro';
import { AppVersion } from '@ionic-native/app-version';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  vappName;
  packageName;
  versionCode;
  versionNumber;

  constructor(private appVersion: AppVersion, public navCtrl: NavController) {
    // this.appVersion.getAppName().then((ver) => {
    //   this.vappName = ver;
    // });
    // this.appVersion.getPackageName().then((ver) => {
    //   this.packageName = ver;
    // });
    // this.appVersion.getVersionCode().then((ver) => {
    //   this.versionCode = ver;
    // });
    // this.appVersion.getVersionNumber().then((ver) => {
    //   this.versionNumber = ver;
    // });

    this.vappName = this.appVersion.getAppName();

    this.packageName = this.appVersion.getPackageName();

    this.versionCode = this.appVersion.getVersionCode();

    this.versionNumber = this.appVersion.getVersionNumber();

    Pro.monitoring.exception(new Error('Error Entrar App'));

  }

  getErrorMonitoring() {
    Pro.monitoring.exception(new Error('Error Click'));
  }

}
