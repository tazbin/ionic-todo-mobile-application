import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(
    public alertController: AlertController
  ) { }

  async presentAlertConfirm() {
    let choice;
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Delete this item?',
      message: '<strong>You won\'t be able to revert this!</strong>',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            // console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Delete',
          role: 'Delete',
          handler: () => {
            // console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
    await alert.onDidDismiss().then(data => {
      choice = data
    });

    return choice;
  }

  async presentAlertPrompt() {
    let formData: any;
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Add new todo item',
      inputs: [
        {
          name: 'itemName',
          type: 'text',
          placeholder: 'Item name'
        },
        {
          name: 'noteTime',
          type: 'date',
          min: '2017-03-01',
          max: '2018-01-12'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            // console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (alertData) => {
            // console.log('Confirm Ok');
            // console.log(alertData.name1);
          }
        }
      ]
    });

    await alert.present();
    await alert.onDidDismiss().then(data => {
      if( data?.data ){
        if( data.data.values.itemName != '' && data.data.values.noteTime ){
          formData = data.data.values;
        }
      }
      // console
    });

    return formData;
  }


}
