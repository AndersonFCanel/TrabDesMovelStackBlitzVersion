import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidacaoService {

  public jogada = [];
  public vez = 0;
  public player1 = "UM";
  public player2 = "DOIS";
  public pontoPlayer1 = 0;
  public pontoPlayer2 = 0;
  public fim = false;
  

  public marcarReadonly = [];
  public corBotao = [];

  //constructor(private validacao: ValidacaoService) { }

  constructor() { }

  ngOnInit() {

    //inicializando os vetores
    for (var counter: number = 0; counter < 9; counter++) {

      this.jogada[counter] = "'";
      this.marcarReadonly[counter] = false;
      this.corBotao[counter] = "btn btn-light btn-lg btn-block";
      this.fim = false;

      console.log("for loop executed : " + counter)
    }

  }

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

  /*imprimeCasaMarcada() {
    console.log(this.jogada[0], this.jogada[1], this.jogada[2] + "\n");
    console.log(this.jogada[3], this.jogada[4], this.jogada[5] + "\n");
    console.log(this.jogada[6], this.jogada[7], this.jogada[8] + "\n");

  }*/

  marcaJogada(casaTabuleiro: number) {
    console.log("vez: " + this.vez);

    if (this.vez % 2 == 0) {
      console.log("Casa marcada " + casaTabuleiro);

      this.vez = this.vez + 1;
      this.jogada[casaTabuleiro] = "O"
      this.readonly(casaTabuleiro);
      this.checarVitoria();

      //this.imprimeCasaMarcada()

      return this.jogada;
    }
    else {
      console.log("Casa marcada " + casaTabuleiro);

      this.vez = this.vez + 1;
      this.jogada[casaTabuleiro] = "X"
      this.readonly(casaTabuleiro);
      this.checarVitoria();

      //this.imprimeCasaMarcada()

      return this.jogada;
    }

  }


  checarVitoria() {

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
  }





  public restart(reiniciarPartida: boolean) {

    if (reiniciarPartida) {
      this.pontoPlayer1 = 0;
      this.pontoPlayer2 = 0;
      this.ngOnInit();
    } else {

      this.ngOnInit();
    }
  }






}
