import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  textsearch:string;
  @Output()emittextsearch=new EventEmitter<any>()
  constructor() { }
   search(){
     this.emittextsearch.emit(this.textsearch)
   }
  ngOnInit(): void {
  }
  }
