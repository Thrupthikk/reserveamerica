import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router,private msgService: MessageService){}
  clicked: boolean = false;
  route = this.router.url;
  ngOnInit(): void {
    console.log(this.clicked);
  }
  signIn() {
    this.router.navigate(['/signin'])
    console.log(this.clicked,"sign ins");
    this.msgService.sendMsg(true);
    this.clicked = true;
  }
}
