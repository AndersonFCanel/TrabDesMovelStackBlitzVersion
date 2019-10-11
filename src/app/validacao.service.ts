import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ValidacaoService {

  public vez ;
  public player1 ;
  public player2 ;
  public pontoPlayer1 ;
  public pontoPlayer2 ;
  public fim ;
  public jogada ;
  public marcarReadonly ;
  public corBotao ;
 

  constructor( ) {
      this.vez= 0;
      this.player1 = "UM";
      this.player2 = "DOIS";
      this.pontoPlayer1 = 0;
      this.pontoPlayer2 = 0;
      this.fim = false;
      this.jogada = [];
      this.marcarReadonly = [];
      this.corBotao = []; 
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


 /* ngOnInit() {

    //inicializando os vetores
    for (var counter: number = 0; counter < 9; counter++) {

      this.jogada[counter] = "'";
      this.marcarReadonly[counter] = false;
      this.corBotao[counter] = "btn btn-light btn-lg btn-block";
      this.fim = false;

      console.log("for loop executed : " + counter)
    }

  }*/

  readonly(casaTabuleiro: number) {
    this.marcarReadonly[casaTabuleiro] = true;
    this.corBotao[casaTabuleiro] = "btn btn-dark btn-lg btn-block";
  }

  marcaJogadaVencedora(posicao1: number, posicao2: number, posicao3: number, vencedor: String) {

    this.corBotao[posicao1] = "btn btn-success btn-lg btn-block";
    this.corBotao[posicao2] = "btn btn-success btn-lg btn-block";
    this.corBotao[posicao3] = "btn btn-success btn-lg btn-block";

    for (var counter: number = 0; counter < 9; counter++) {
      this.marcarReadonly[counter] = true;
      this.fim = true;
    }

    if(vencedor=="O"){
      this.pontoPlayer1 ++;
    }else{
      this.pontoPlayer2 ++;
    }

//alert(vencedor + " venceu!");
  }

  marcaJogada(casaTabuleiro: number) {
    console.log("vez: " + this.vez);

    if (this.vez % 2 == 0) {
      console.log("Casa marcada " + casaTabuleiro);

      this.vez = this.vez + 1;
      this.jogada[casaTabuleiro] = "O"
      this.readonly(casaTabuleiro);
      //this.checarVitoria();

      //this.imprimeCasaMarcada()

      return this.jogada;
    }
    else {
      console.log("Casa marcada " + casaTabuleiro);

      this.vez = this.vez + 1;
      this.jogada[casaTabuleiro] = "X"
      this.readonly(casaTabuleiro);
      //this.checarVitoria();

      //this.imprimeCasaMarcada()

      return this.jogada;
    }

  }


  /*checarVitoria( ) {

    if (this.jogada[0] == "X" && this.jogada[1] == "X" && this.jogada[2] == "X") {
      this.marcaJogadaVencedora(0, 1, 2, "X");

    } else if
      (this.jogada[3] == "X" && this.jogada[4] == "X" && this.jogada[5] == "X") {
      this.marcaJogadaVencedora(3, 4, 5, "X");

    } else if
      (this.jogada[6] == "X" && this.jogada[7] == "X" && this.jogada[8] == "X") {
      this.marcaJogadaVencedora(6, 7, 8, "X");

    } else if
      (this.jogada[0] == "X" && this.jogada[3] == "X" && this.jogada[6] == "X") {
      this.marcaJogadaVencedora(0, 3, 6, "X");

    } else if
      (this.jogada[1] == "X" && this.jogada[4] == "X" && this.jogada[7] == "X") {
      this.marcaJogadaVencedora(1, 4, 7, "X");

    } else if
      (this.jogada[2] == "X" && this.jogada[5] == "X" && this.jogada[8] == "X") {
      this.marcaJogadaVencedora(2, 3, 8, "X");

    } else if
      (this.jogada[0] == "X" && this.jogada[4] == "X" && this.jogada[8] == "X") {
      this.marcaJogadaVencedora(0, 4, 8, "X");
    } else if
      (this.jogada[2] == "X" && this.jogada[4] == "X" && this.jogada[6] == "X") {
      this.marcaJogadaVencedora(2, 4, 6, "X");

    } else
      if (this.jogada[0] == "O" && this.jogada[1] == "O" && this.jogada[2] == "O") {
        this.marcaJogadaVencedora(0, 1, 2, "O");

      } else if
        (this.jogada[3] == "O" && this.jogada[4] == "O" && this.jogada[5] == "O") {
        this.marcaJogadaVencedora(3, 4, 5, "O");

      } else if
        (this.jogada[6] == "O" && this.jogada[7] == "O" && this.jogada[8] == "O") {
        this.marcaJogadaVencedora(6, 7, 8, "O");

      } else if
        (this.jogada[0] == "O" && this.jogada[3] == "O" && this.jogada[6] == "O") {
        this.marcaJogadaVencedora(0, 3, 6, "O");

      } else if
        (this.jogada[1] == "O" && this.jogada[4] == "O" && this.jogada[7] == "O") {
        this.marcaJogadaVencedora(1, 4, 7, "O");

      } else if
        (this.jogada[2] == "O" && this.jogada[5] == "O" && this.jogada[8] == "O") {
        this.marcaJogadaVencedora(2, 3, 8, "O");

      } else if
        (this.jogada[0] == "O" && this.jogada[4] == "O" && this.jogada[8] == "O") {
        this.marcaJogadaVencedora(0, 4, 8, "O");
      } else if
        (this.jogada[2] == "O" && this.jogada[4] == "O" && this.jogada[6] == "O") {
        this.marcaJogadaVencedora(2, 4, 6, "O");

      } else {
        console.log("Ainda não há vencedor");
        return ""
      }
  }*/

  public restart(reiniciarPartida: boolean) {

    if (reiniciarPartida) {
      this.pontoPlayer1 = 0;
      this.pontoPlayer2 = 0;
    } 
    
    
    //inicializando os vetores
    for (var counter: number = 0; counter < 9; counter++) {

      this.jogada[counter] = "'";
      this.marcarReadonly[counter] = false;
      this.corBotao[counter] = "btn btn-light btn-lg btn-block";
      this.fim = false;

      console.log("for loop executed : " + counter)
    }

  }

}
