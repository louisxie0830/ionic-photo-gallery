import { Injectable } from '@angular/core';
import { ActionSheet, ShowActionsOptions } from '@capacitor/action-sheet';


@Injectable({
  providedIn: 'root'
})
export class ActionSheetService {

  constructor() { }

  public async showActions(options: ShowActionsOptions) {
    await ActionSheet.showActions(options);
  }
}
