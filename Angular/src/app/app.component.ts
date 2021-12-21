import { Component } from '@angular/core';
import { SplashScreen } from '@capacitor/splash-screen';
import { DeviceService } from './services/device.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private deviceService: DeviceService) {
    this.initializeApp();
    this.deviceService.getId();
    this.deviceService.getInfo();
    this.deviceService.getBatteryInfo();
    this.deviceService.getLanguageCode();
  }

  initializeApp() {
    SplashScreen.hide();
  }
}
