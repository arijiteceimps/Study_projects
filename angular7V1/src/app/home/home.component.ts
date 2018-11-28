import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  backGroundImg: string;		
  constructor() {
  	this.backGroundImg = '../../assets/images/login-bg.jpg'
  }

  ngOnInit() {
  }

}
