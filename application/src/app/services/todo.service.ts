import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todoItemsArray: any = [
    {
      _id: 1,
      itemName: 'Must learn Ionic within 15th August',
      noteTime: '2 Aug, 2020',
      status: true
    },
    {
      _id: 2,
      itemName: 'Develop a todo app using ionic, Angular & rest api',
      noteTime: '14 Aug, 2019',
      status: true
    },
    {
      _id: 3,
      itemName: 'Hult prize recuiting developer in September. Study for it',
      noteTime: '25 July, 2017',
      status: true
    },
    {
      _id: 4,
      itemName: 'Take medicine for keeping good health',
      noteTime: '9 May, 2020',
      status: true
    },
    {
      _id: 5,
      itemName: 'Learn advanced wordpress with in August month',
      noteTime: '14 Aug, 2019',
      status: true
    }
  ];

  todoItems$ = new BehaviorSubject(null);

  constructor(
    private _http: HttpClient
  ) {

    // getting server data
    // this.todoItems$.next(this.todoItemsArray);
    this.getAllTodoItems()
    .subscribe( res => {
      this.todoItems$.next(res);
    })
  }

  getAllTodoItems(){
    return this._http.get('http://127.0.0.1:3000/api/getTodos');
  }

  deleteItemConfirm(itemIndex: number){
    // this.todoItemsArray.splice(itemIndex, 1);
    // this.todoItems$.next(this.todoItemsArray);
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      body: {
        itemId: itemIndex
      }
    }
    this._http.delete('http://127.0.0.1:3000/api/deleteItem', options)
    .subscribe(res => {
      this.getAllTodoItems()
    .subscribe( res => {
      this.todoItems$.next(res);
    })
    })
  }

  addNewItem(item: any){
    item.status = true;
    var stringDate = (new Date(item.noteTime)).toString().split(' ');
    item.noteTime = stringDate[2]+' '+stringDate[1]+', '+stringDate[3];

    this._http.post('http://127.0.0.1:3000/api/createTodo', {
      itemName: item.itemName,
            noteTime: item.noteTime
    }).subscribe(res => {
      this.getAllTodoItems()
    .subscribe( res => {
      this.todoItems$.next(res);
    })
    })
  }
}
