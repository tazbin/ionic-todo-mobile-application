import { Component, OnInit } from '@angular/core';
import { DateService } from '../services/date.service';
import { TodoService } from '../services/todo.service';
import { AlertService } from '../services/alert.service';
import { ToastService } from '../services/toast.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

 showDate: string = '';
 items: any = [];

  constructor(
    private dateService: DateService,
    private todoService: TodoService,
    private alertService: AlertService,
    private toastService: ToastService,
    public alertController: AlertController
  ) {}

  ngOnInit(){
    // getting date
    this.showDate = this.dateService.getDate();

    // getting all todo items
    this.todoService.todoItems$.subscribe(
      res => {
        this.items = res;
      },
      err => {
        console.log(err)
      }
    )
  }

  deleteItem(index: number){
    const itemIndex = index;
    this.alertService.presentAlertConfirm()
    .then(res => {
      if (res.role == 'Delete'){
        this.todoService.deleteItemConfirm(itemIndex);
        this.toastService.presentToast('SUCCESS! Todo item deleted.');
      }
    });
  }

  addNewItemAlert(){
    let formData: any;
    this.alertService.presentAlertPrompt()
    .then(res => {
      if( res ){
        this.todoService.addNewItem(res);
      this.toastService.presentToast('SUCCESS! New todo item added.');
      }
    })
  }

}
