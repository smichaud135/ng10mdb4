import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'angular-bootstrap-md';

@Component({
  selector: 'app-modaltwo',
  templateUrl: './modaltwo.component.html',
  styleUrls: ['./modaltwo.component.scss']
})
export class ModaltwoComponent implements OnInit {
  @ViewChild('basicModal',{static:true}) modal:ModalDirective;

  constructor() { }

  ngOnInit(): void {
  }

  showModal(){
    this.modal.show();
  }

}
