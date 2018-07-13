import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.css']
})
export class SimpleFormComponent implements OnInit {
  text1:string = "0";
  text2:string = "0";
  result:string = "足し算しましょう"

  constructor() { }

  ngOnInit() {
  }

  addAndShow() : void {
    let int1:number = Number(this.text1);
    let int2:number = Number(this.text2);

    if (Number.isNaN(int1) || Number.isNaN(int2)) {
      return;
    }

    this.result = `${int1}+${int2}=${int1 + int2}`;
  }
}
