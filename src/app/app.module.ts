import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TecladoComponent } from './teclado/teclado.component';
import { InformacoesModule } from './informacoes/informacoes.module';
import { AlertModule, ButtonsModule } from 'ngx-bootstrap';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ValidacaoService } from './validacao.service';

import { InformacoesModalModule } from './informacoesModal/informacoesModal.module';

@NgModule({
  declarations: [
    AppComponent,
    TecladoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlertModule.forRoot(),
    ButtonsModule.forRoot(),
    NgbModule.forRoot(),
    InformacoesModule,
    InformacoesModalModule
  ],
  providers: [ValidacaoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
