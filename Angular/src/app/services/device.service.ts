import { Injectable } from '@angular/core';
import { Device } from '@capacitor/device';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  constructor() { }


  public async getId() {
    const id = await Device.getId();
    console.log('info: ', id);
    return id;
  }
  public async getInfo() {
    const info = await Device.getInfo();
    console.log('info: ', info);
    return info;
  }

  public async getBatteryInfo() {
    const info = await Device.getBatteryInfo();
    console.log('info: ', info);
    return info;
  }

  public async getLanguageCode() {
    const code = await Device.getLanguageCode();
    console.log('code: ', code);
    return code;
  }
}
