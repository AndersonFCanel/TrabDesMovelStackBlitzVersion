import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ValidacaoService {

  private vez ;
  private player1 ;
  private player2 ;
  private pontoPlayer1 ;
  private pontoPlayer2 ;
  private fim ;
  private jogada ;
  private marcarReadonly ;
  private corBotao ;
  private vencedor;
 

  constructor( ) {
      this.vez= 0;
      this.player1 = "";
      this.player2 = "";
      this.pontoPlayer1 = 0;
      this.pontoPlayer2 = 0;
      this.fim = false;
      this.jogada = [];
      this.marcarReadonly = [];
      this.corBotao = []; 
      this.vencedor = "";
   }


  get Vez(){
     return this.vez;
  }
  set Vez(value: Number) {
    this.vez = value;
  }
   get Player1(){
     return this.player1;
  }
  set Player1(value: String) {
    this.player1 = value;
  }
   get Player2(){
     return this.player1;
  }
  set Player2(value: String) {
    this.player2 = value;
  }
   get PontoPlayer1(){
     return this.pontoPlayer1;
  }
  set PontoPlayer1(value: Number) {
    this.pontoPlayer1 = value;
  }
   get PontoPlayer2(){
     return this.pontoPlayer2;
  }
  set PontoPlayer2(value: Number) {
    this.pontoPlayer2 = value;
  }
 get Fim(){
     return this.fim;
  }
  set Fim(value: Boolean) {
    this.fim = value;
  }
  get Jogada(){
     return this.jogada;
  }
  set Jogada(value) {
    this.jogada = value;
  }
  get MarcarReadonly(){
     return this.marcarReadonly;
  }
  set MarcarReadonly(value) {
    this.marcarReadonly = value;
  }
  get CorBotao(){
     return this.corBotao;
  }
  set CorBotao(value) {
    this.corBotao = value;
  }
   get Vencedor(){
     return this.vencedor;
  }
  set Vencedor(value) {
    this.vencedor = value;
  }

  readonly(casaTabuleiro: number) {
    this.MarcarReadonly[casaTabuleiro] = true;
    this.CorBotao[casaTabuleiro] = "btn btn-dark btn-lg btn-block";
  }

  marcaJogadaVencedora(posicao1: number, posicao2: number, posicao3: number, vencedor: String) {

    this.CorBotao[posicao1] = "btn btn-success btn-lg btn-block";
    this.CorBotao[posicao2] = "btn btn-success btn-lg btn-block";
    this.CorBotao[posicao3] = "btn btn-success btn-lg btn-block";

    for (var counter: number = 0; counter < 9; counter++) {
      this.MarcarReadonly[counter] = true;
    }

    this.Fim = true;
    this.Vez=0;

    if(vencedor=="O"){
      this.pontoPlayer1 ++;
      this.Vencedor = this.Player1;
    }else{
      this.pontoPlayer2 ++;
      this.Vencedor = this.Player2;
    }

  //alert(vencedor + " venceu!");
  }

  marcaJogada(casaTabuleiro: number) {
    console.log("vez: " + this.vez);

    if (this.vez % 2 == 0) {
      console.log("Casa marcada " + casaTabuleiro);

      this.Vez = this.vez + 1;
      this.Jogada[casaTabuleiro] = "O"
      this.readonly(casaTabuleiro);
      this.checarVitoria();

      //this.imprimeCasaMarcada()

      return this.jogada;
    }
    else {
      console.log("Casa marcada " + casaTabuleiro);

      this.Vez = this.vez + 1;
      this.Jogada[casaTabuleiro] = "X"
      this.readonly(casaTabuleiro);
      this.checarVitoria();

      //this.imprimeCasaMarcada()

      return this.jogada;
    }

  }

  checarVitoria( ) {

    if (this.Jogada[0] == "X" && this.Jogada[1] == "X" && this.Jogada[2] == "X") {
      this.marcaJogadaVencedora(0, 1, 2, "X");

    } else if
      (this.Jogada[3] == "X" && this.Jogada[4] == "X" && this.Jogada[5] == "X") {
      this.marcaJogadaVencedora(3, 4, 5, "X");

    } else if
      (this.Jogada[6] == "X" && this.Jogada[7] == "X" && this.Jogada[8] == "X") {
      this.marcaJogadaVencedora(6, 7, 8, "X");

    } else if
      (this.Jogada[0] == "X" && this.Jogada[3] == "X" && this.Jogada[6] == "X") {
      this.marcaJogadaVencedora(0, 3, 6, "X");

    } else if
      (this.Jogada[1] == "X" && this.Jogada[4] == "X" && this.Jogada[7] == "X") {
      this.marcaJogadaVencedora(1, 4, 7, "X");

    } else if
      (this.Jogada[2] == "X" && this.Jogada[5] == "X" && this.Jogada[8] == "X") {
      this.marcaJogadaVencedora(2, 5, 8, "X");

    } else if
      (this.Jogada[0] == "X" && this.Jogada[4] == "X" && this.Jogada[8] == "X") {
      this.marcaJogadaVencedora(0, 4, 8, "X");
    } else if
      (this.Jogada[2] == "X" && this.Jogada[4] == "X" && this.Jogada[6] == "X") {
      this.marcaJogadaVencedora(2, 4, 6, "X");

    } else
      if (this.Jogada[0] == "O" && this.Jogada[1] == "O" && this.Jogada[2] == "O") {
        this.marcaJogadaVencedora(0, 1, 2, "O");

      } else if
        (this.Jogada[3] == "O" && this.Jogada[4] == "O" && this.Jogada[5] == "O") {
        this.marcaJogadaVencedora(3, 4, 5, "O");

      } else if
        (this.Jogada[6] == "O" && this.Jogada[7] == "O" && this.Jogada[8] == "O") {
        this.marcaJogadaVencedora(6, 7, 8, "O");

      } else if
        (this.Jogada[0] == "O" && this.Jogada[3] == "O" && this.Jogada[6] == "O") {
        this.marcaJogadaVencedora(0, 3, 6, "O");

      } else if
        (this.Jogada[1] == "O" && this.Jogada[4] == "O" && this.Jogada[7] == "O") {
        this.marcaJogadaVencedora(1, 4, 7, "O");

      } else if
        (this.Jogada[2] == "O" && this.Jogada[5] == "O" && this.Jogada[8] == "O") {
        this.marcaJogadaVencedora(2, 5, 8, "O");

      } else if
        (this.Jogada[0] == "O" && this.Jogada[4] == "O" && this.Jogada[8] == "O") {
        this.marcaJogadaVencedora(0, 4, 8, "O");
      } else if
        (this.Jogada[2] == "O" && this.Jogada[4] == "O" && this.Jogada[6] == "O") {
        this.marcaJogadaVencedora(2, 4, 6, "O");

      } else {
        console.log("Ainda não há vencedor");
        return ""
      }
  }

  public restart(reiniciarPartida: boolean) {

    if (reiniciarPartida) {
      this.pontoPlayer1 = 0;
      this.pontoPlayer2 = 0;
    } 
    
    //inicializando os vetores
    for (var counter: number = 0; counter < 9; counter++) {

      this.Jogada[counter] = "'";
      this.marcarReadonly[counter] = false;
      this.corBotao[counter] = "btn btn-light btn-lg btn-block";
      console.log("for loop executed : " + counter)
    }

    this.Fim = false;

  }

}
