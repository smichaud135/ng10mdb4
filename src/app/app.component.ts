import { Component, ViewChild } from '@angular/core';
import { ModaloneComponent } from './modalone/modalone.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('modal',{static:true}) modalComponent:ModaloneComponent;
  
  title = 'mdb-angular-free';

  show(){
    this.modalComponent.showModal1();
  }

}
