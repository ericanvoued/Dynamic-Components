import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  title='child'
  constructor() { }

  ngOnInit() {
  }

  childClick(){
    console.log('child')
  }
}
