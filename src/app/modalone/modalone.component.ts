import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'angular-bootstrap-md';
import { ModaltwoComponent } from '../modaltwo/modaltwo.component';

@Component({
  selector: 'app-modalone',
  templateUrl: './modalone.component.html',
  styleUrls: ['./modalone.component.scss']
})
export class ModaloneComponent implements OnInit {
  @ViewChild('basicModal',{static:true}) modal:ModalDirective;
  @ViewChild('modal',{static:true}) modalComponent:ModaltwoComponent;


  constructor() { }

  ngOnInit(): void {
  }

  showModal1(){
    this.modal.show();
  }

  showModal2(){
    this.modalComponent.showModal();
  }

}
