import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  msg: boolean = false;
  constructor() { }
  public subject = new BehaviorSubject<any>({}); 
  sendMsg(val: boolean) {
    this.msg = val;
    console.log(this.msg,"huf");
    
    this.subject.next(this.msg)
  }
  getMsg(): Observable<any> {
    return this.subject.asObservable();
  }
}
