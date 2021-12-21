import { Injectable } from '@angular/core';
import { ActionSheet } from '@capacitor/action-sheet';


@Injectable({
  providedIn: 'root'
})
export class ActionSheetService {

  constructor() { }

  public async showActions(data: IAction) {
    await ActionSheet.showActions(data);
  }

  interface Action {
    title?: string;
    message?: string;
    options?: Array<{
      title?: string;
      style: any;
    }>
  }
}
