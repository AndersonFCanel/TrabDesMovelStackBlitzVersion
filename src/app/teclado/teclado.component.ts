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

  readonly(casaTabuleiro: number) {
    this.validacao.marcarReadonly[casaTabuleiro] = true;
    this.validacao.corBotao[casaTabuleiro] = "btn btn-dark btn-lg btn-block";
  }

  marcaJogadaVencedora(posicao1: number, posicao2: number, posicao3: number, vencedor: String) {

    this.validacao.corBotao[posicao1] = "btn btn-success btn-lg btn-block";
    this.validacao.corBotao[posicao2] = "btn btn-success btn-lg btn-block";
    this.validacao.corBotao[posicao3] = "btn btn-success btn-lg btn-block";

    for (var counter: number = 0; counter < 9; counter++) {
      this.validacao.marcarReadonly[counter] = true;
      this.validacao.fim = true;
    }

    if(vencedor=="O"){
      this.validacao.pontoPlayer1 ++;
    }else{
      this.validacao.pontoPlayer2 ++;
    }


//alert(vencedor + " venceu!");
  }

  /*imprimeCasaMarcada() {
    console.log(this.jogada[0], this.jogada[1], this.jogada[2] + "\n");
    console.log(this.jogada[3], this.jogada[4], this.jogada[5] + "\n");
    console.log(this.jogada[6], this.jogada[7], this.jogada[8] + "\n");

  }*/

  marcaJogada(casaTabuleiro: number) {
    console.log("vez: " + this.validacao.vez);

    if (this.validacao.vez % 2 == 0) {
      console.log("Casa marcada " + casaTabuleiro);

      this.validacao.vez = this.validacao.vez + 1;
      this.validacao.jogada[casaTabuleiro] = "O"
      this.readonly(casaTabuleiro);
      this.checarVitoria();

      //this.imprimeCasaMarcada()

      return this.validacao.jogada;
    }
    else {
      console.log("Casa marcada " + casaTabuleiro);

      this.validacao.vez = this.validacao.vez + 1;
      this.validacao.jogada[casaTabuleiro] = "X"
      this.readonly(casaTabuleiro);
      this.checarVitoria();

      //this.imprimeCasaMarcada()

      return this.validacao.jogada;
    }

  }



  checarVitoria( ) {

    if (this.validacao.jogada[0] == "X" && this.validacao.jogada[1] == "X" && this.validacao.jogada[2] == "X") {
      this.validacao.marcaJogadaVencedora(0, 1, 2, "X");

    } else if
      (this.validacao.jogada[3] == "X" && this.validacao.jogada[4] == "X" && this.validacao.jogada[5] == "X") {
      this.validacao.marcaJogadaVencedora(3, 4, 5, "X");

    } else if
      (this.validacao.jogada[6] == "X" && this.validacao.jogada[7] == "X" && this.validacao.jogada[8] == "X") {
      this.validacao.marcaJogadaVencedora(6, 7, 8, "X");

    } else if
      (this.validacao.jogada[0] == "X" && this.validacao.jogada[3] == "X" && this.validacao.jogada[6] == "X") {
      this.validacao.marcaJogadaVencedora(0, 3, 6, "X");

    } else if
      (this.validacao.jogada[1] == "X" && this.validacao.jogada[4] == "X" && this.validacao.jogada[7] == "X") {
      this.validacao.marcaJogadaVencedora(1, 4, 7, "X");

    } else if
      (this.validacao.jogada[2] == "X" && this.validacao.jogada[5] == "X" && this.validacao.jogada[8] == "X") {
      this.validacao.marcaJogadaVencedora(2, 5, 8, "X");

    } else if
      (this.validacao.jogada[0] == "X" && this.validacao.jogada[4] == "X" && this.validacao.jogada[8] == "X") {
      this.validacao.marcaJogadaVencedora(0, 4, 8, "X");
    } else if
      (this.validacao.jogada[2] == "X" && this.validacao.jogada[4] == "X" && this.validacao.jogada[6] == "X") {
      this.validacao.marcaJogadaVencedora(2, 4, 6, "X");

    } else
      if (this.validacao.jogada[0] == "O" && this.validacao.jogada[1] == "O" && this.validacao.jogada[2] == "O") {
        this.validacao.marcaJogadaVencedora(0, 1, 2, "O");

      } else if
        (this.validacao.jogada[3] == "O" && this.validacao.jogada[4] == "O" && this.validacao.jogada[5] == "O") {
        this.validacao.marcaJogadaVencedora(3, 4, 5, "O");

      } else if
        (this.validacao.jogada[6] == "O" && this.validacao.jogada[7] == "O" && this.validacao.jogada[8] == "O") {
        this.validacao.marcaJogadaVencedora(6, 7, 8, "O");

      } else if
        (this.validacao.jogada[0] == "O" && this.validacao.jogada[3] == "O" && this.validacao.jogada[6] == "O") {
        this.validacao.marcaJogadaVencedora(0, 3, 6, "O");

      } else if
        (this.validacao.jogada[1] == "O" && this.validacao.jogada[4] == "O" && this.validacao.jogada[7] == "O") {
        this.validacao.marcaJogadaVencedora(1, 4, 7, "O");

      } else if
        (this.validacao.jogada[2] == "O" && this.validacao.jogada[5] == "O" && this.validacao.jogada[8] == "O") {
        this.validacao.marcaJogadaVencedora(2, 5, 8, "O");

      } else if
        (this.validacao.jogada[0] == "O" && this.validacao.jogada[4] == "O" && this.validacao.jogada[8] == "O") {
        this.validacao.marcaJogadaVencedora(0, 4, 8, "O");
      } else if
        (this.validacao.jogada[2] == "O" && this.validacao.jogada[4] == "O" && this.validacao.jogada[6] == "O") {
        this.validacao.marcaJogadaVencedora(2, 4, 6, "O");

      } else {
        console.log("Ainda não há vencedor");
        return ""
      }
  }

  public restart(reiniciarPartida: boolean) {

    if (reiniciarPartida) {
      this.validacao.pontoPlayer1 = 0;
      this.validacao.pontoPlayer2 = 0;
  
    }

     
      //inicializando os vetores
    for (var counter: number = 0; counter < 9; counter++) {

      this.validacao.jogada[counter] = "'";
      this.validacao.marcarReadonly[counter] = false;
      this.validacao.corBotao[counter] = "btn btn-light btn-lg btn-block";
      this.validacao.fim = false;

      //console.log( this.jogada[counter]);
      console.log("for loop executed : " + counter)
    }
  
  }


}
