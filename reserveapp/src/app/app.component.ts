import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from './services/message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'reserve-app';
  route = this.router.url;
  showHeaderFooter: boolean = true;
  constructor(private msgService: MessageService, private router: Router){}
  ngOnInit(): void {
    this.msgService.getMsg().subscribe((res=>{
      console.log(res,"res");
      if(res == true){
        this.showHeaderFooter = false;
      }
    }))
  }
}
