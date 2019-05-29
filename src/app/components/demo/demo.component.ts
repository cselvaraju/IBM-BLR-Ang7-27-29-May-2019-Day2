import { Component, OnInit } from '@angular/core';
import { getNgModuleDef } from '@angular/core/src/render3/definition';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  // template: '<div><h3>Demo Component using template</h3></div>',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  message: string;
  vegetables;
  listFlag: boolean;
  btnText: string;

  constructor() { }

  ngOnInit() {
    this.message = 'Hello World';
    this.vegetables = [
      {name: 'Tomato', price: 40},
      {name: 'Ridge Gourd', price: 30},
      {name: 'Cucumber', price: 20},
      {name: 'Potato', price: 25},
      {name: 'Brinjal', price: 30}
    ];
    this.listFlag = false;
    this.btnText = 'Show List';
  }

  btnClicked(event: MouseEvent) {
    // alert('OUCH!! That hurt!\nPlease be gentle...');
    console.log(event);
    if (event.altKey) {
      console.log('The ALT was pressed');
    } else {
      console.log('The ALT key was not pressed');
    }
  }

  toggleList() {
    this.listFlag = !this.listFlag;
    this.btnText = (this.listFlag) ? 'Hide List' : 'Show List';
  }
}
