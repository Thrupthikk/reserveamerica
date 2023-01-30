import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit{
  isActive = true;
  campingActive: boolean = true;
  hikingActive: boolean = false;
  huntfishActive: boolean = false;
  constructor() {}
  ngOnInit(): void {
   
  }
}
