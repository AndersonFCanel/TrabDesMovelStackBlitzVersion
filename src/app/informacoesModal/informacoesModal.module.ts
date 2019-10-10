import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbdModalComponent } from './modal-info/modal-info.component';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbdModalContent } from './modal-info/modal-content'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//import { TecladoComponent } from '../teclado/teclado.component';



@NgModule({
  declarations: [ NgbdModalComponent, NgbdModalContent],
  imports: [
    CommonModule,
    BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule, NgbModule.forRoot(),
    //TecladoComponent
  ],
  exports: [
    NgbdModalComponent,
  ],
  entryComponents: [NgbdModalContent],
})
export class InformacoesModalModule { }
