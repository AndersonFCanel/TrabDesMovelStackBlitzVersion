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
    this.jogada = this.validacao.Jogada;
    this.vez = this.validacao.Vez;
    this.player1 = this.validacao.Player1;
    this.player2 = this.validacao.Player2;
    this.pontoPlayer1 = this.validacao.PontoPlayer1;
    this.pontoPlayer2 = this.validacao.PontoPlayer2;
    this.fim = this.validacao.Fim;
    this.marcarReadonly = this.validacao.MarcarReadonly;
    this.corBotao = this.validacao.CorBotao;

}

  ngOnInit() {

    for (var counter: number = 0; counter < 9; counter++) {

      this.validacao.Jogada[counter] = "'";
      this.validacao.MarcarReadonly[counter] = false;
      this.validacao.CorBotao[counter] = "btn btn-light btn-lg btn-block";
      this.validacao.Fim = false;

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
