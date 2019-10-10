import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TecladoComponent } from './teclado/teclado.component';
import { InformacoesModule } from './informacoes/informacoes.module';
import { AlertModule, ButtonsModule } from 'ngx-bootstrap';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { InformacoesModalModule } from './InformacoesModal/informacoesModal.module';


/*
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbdModalComponent } from './informacoes/modal-info/modal-info.component';
import { NgbdModalContent } from './informacoes/modal-info/modal-content'

*/
@NgModule({
  declarations: [
    AppComponent,
    TecladoComponent,
  //  NgbdModalComponent, NgbdModalContent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlertModule.forRoot(),
    ButtonsModule.forRoot(),
    NgbModule.forRoot(),
    InformacoesModule,
    InformacoesModalModule
    //FormsModule, ReactiveFormsModule, HttpClientModule,
  ],
  providers: [],
  //entryComponents: [NgbdModalContent],
  bootstrap: [AppComponent]
})
export class AppModule { }
