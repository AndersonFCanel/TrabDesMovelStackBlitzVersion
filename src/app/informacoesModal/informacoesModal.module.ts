import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbdModalContent } from './modal-info/modal-content'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalInputComponent } from './modal-input/modal-input.component';

@NgModule({

  declarations: [  NgbdModalContent, ModalInputComponent],
  imports: [
    CommonModule,
    BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule, NgbModule.forRoot(),
  ],
  exports: [
   ModalInputComponent,
   NgbdModalContent
  ],
  entryComponents: [NgbdModalContent ,ModalInputComponent],
})
export class InformacoesModalModule { }
