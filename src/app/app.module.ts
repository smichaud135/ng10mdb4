
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { ButtonsModule, InputsModule, MDBBootstrapModule, ModalModule, WavesModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { ModaloneComponent } from './modalone/modalone.component';
import { ModaltwoComponent } from './modaltwo/modaltwo.component';

@NgModule({
  declarations: [
    AppComponent,
    ModaloneComponent,
    ModaltwoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    ModalModule, 
    WavesModule, 
    InputsModule, 
    ButtonsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
