import { Injectable } from '@angular/core';
import { AlertOptions, ConfirmOptions, ConfirmResult, Dialog, PromptOptions, PromptResult } from '@capacitor/dialog';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  constructor() { }

  public async showAlert(options: AlertOptions): Promise<void> {
    return await Dialog.alert(options);
  }
  public async showConfirm(options: ConfirmOptions): Promise<ConfirmResult> {
    return await Dialog.confirm(options);
  }
  public async showPrompt(options: PromptOptions): Promise<PromptResult> {
    return await Dialog.prompt(options);
  }
}
