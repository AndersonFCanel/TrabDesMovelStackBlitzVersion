import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { ValidacaoService } from '../validacao.service';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-teclado',
  templateUrl: './teclado.component.html',
  styleUrls: ['./teclado.component.css']
})

export class TecladoComponent implements OnInit {


  public jogada;
  public vez;
  public player1;
  public player2 ;
  public pontoPlayer1 ;
  public pontoPlayer2 ;
  public fim ;
  public marcarReadonly;
  public corBotao ;

constructor( private  validacao:ValidacaoService ) {
    this.jogada = this.validacao.jogada;
    this.vez = this.validacao.vez;
    this.player1 = this.validacao.player1;
    this.player2 = this.validacao.player2;
    this.pontoPlayer1 = this.validacao.pontoPlayer1;
    this.pontoPlayer2 = this.validacao.pontoPlayer2;
    this.fim = this.validacao.fim;
    this.marcarReadonly = this.validacao.marcarReadonly;
    this.corBotao = this.validacao.corBotao;

}

  ngOnInit() {

    
    for (var counter: number = 0; counter < 9; counter++) {

      this.validacao.jogada[counter] = "'";
      this.validacao.marcarReadonly[counter] = false;
      this.validacao.corBotao[counter] = "btn btn-light btn-lg btn-block";
      this.validacao.fim = false;

      console.log("for loop executed : " + counter)
    }

  }

 marcaJogada(casaTabuleiro: number) {
    console.log("vez: " + this.validacao.vez);

    this.validacao.marcaJogada(casaTabuleiro);

 }
  
  public restart(reiniciarPartida: boolean) {

   this.validacao.restart(reiniciarPartida);
  
  }


}
