import { Injectable } from '@angular/core';
import { AppLauncher, CanOpenURLOptions, OpenURLOptions } from '@capacitor/app-launcher';

@Injectable({
  providedIn: 'root'
})
export class AppLauncherService {

  constructor() { }

  public async checkCanOpenUrl(options: CanOpenURLOptions) {
    const { value } = await AppLauncher.canOpenUrl(options);
    console.log('value: ', value);
  }

  public async openUrl(options: OpenURLOptions) {
    await AppLauncher.openUrl(options);
  }
}
