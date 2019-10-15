import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ValidacaoService {

  private vez;
  private player1;
  private player2;
  private pontoPlayer1;
  private pontoPlayer2;
  private fim;
  private jogada;
  private marcarReadonly;
  private corBotao;
  private vencedor;
  private empate;
  private resultadoParcial;
  public daVez = "X";

  constructor() {
    this.vez = 0;
    this.player1 = "O";
    this.player2 = "X";
    this.pontoPlayer1 = 0;
    this.pontoPlayer2 = 0;
    this.fim = false;
    this.jogada = [];
    this.marcarReadonly = [];
    this.corBotao = [];
    this.vencedor = "";
    this.empate = false;
    this.resultadoParcial = "";
  }


  get Vez() {
    return this.vez;
  }
  set Vez(value: Number) {
    this.vez = value;
  }
  get Player1() {
    return this.player1;
  }
  set Player1(value: String) {
    this.player1 = value;
  }
  get Player2() {
    return this.player2;
  }
  set Player2(value: String) {
    this.player2 = value;
  }
  get PontoPlayer1() {
    return this.pontoPlayer1;
  }
  set PontoPlayer1(value: Number) {
    this.pontoPlayer1 = value;
  }
  get PontoPlayer2() {
    return this.pontoPlayer2;
  }
  set PontoPlayer2(value: Number) {
    this.pontoPlayer2 = value;
  }
  get Fim() {
    return this.fim;
  }
  set Fim(value: Boolean) {
    this.fim = value;
  }
  get Jogada() {
    return this.jogada;
  }
  set Jogada(value) {
    this.jogada = value;
  }
  get MarcarReadonly() {
    return this.marcarReadonly;
  }
  set MarcarReadonly(value) {
    this.marcarReadonly = value;
  }
  get CorBotao() {
    return this.corBotao;
  }
  set CorBotao(value) {
    this.corBotao = value;
  }
  get Vencedor() {
    return this.vencedor;
  }
  set Vencedor(value) {
    this.vencedor = value;
  }
  get Empate() {
    return this.empate;
  }
  set Empate(value) {
    this.empate = value;
  }
  get ResultadoParcial() {
    return this.resultadoParcial
      ;
  }
  set ResultadoParcial(value) {
    this.resultadoParcial
      = value;
  }

  ganhando1() {
    if (this.PontoPlayer1 > this.PontoPlayer2) {
      return this.ResultadoParcial = "form-control p-3 mb-2 bg-success text-white borderOuro";
    } else {
      return this.ResultadoParcial = "form-control p-3 mb-2 bg-dark text-white borderRoxa";
    }
  }
  ganhando2() {
    if (this.PontoPlayer1 < this.PontoPlayer2) {
      return this.ResultadoParcial = "form-control p-3 mb-2 bg-success text-white alignR borderOuro";
    } else {
      return this.ResultadoParcial = "form-control p-3 mb-2 bg-dark text-white alignR borderRoxa";
    }
  }

  checaNomeInformados()
  {
    if((this.Player1.length > 0 ) && (this.Player2.length > 0)){
      return true;
    }else{
      return false;
    }
  }

  dangerClass1(){
    if(this.Player1.length > 0 ){
      return "form-control bg-dark text-white borderRoxa";
    }else{
      return "form-control alert alert-danger border-danger bg-dark text-white";
    }
  }

  dangerClass2(){
    if(this.Player2.length > 0 ){
      return "form-control bg-dark text-white borderRoxa";
    }else{
      return "form-control alert alert-danger border-danger bg-dark text-white ";
    }
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
    this.Vez = 0;
    this.Empate = false;

    if (vencedor == "O") {
      this.pontoPlayer1++;
      this.Vencedor = this.Player1;
      this.daVez = "O";
    } else {
      this.pontoPlayer2++;
      this.Vencedor = this.Player2;
      this.daVez = "X";
    }

  }


  marcaJogada(casaTabuleiro: number) {

    this.Vez = this.vez + 1;
    
   

    if (this.vez % 2 == 0) {
      if( this.daVez  == "X"){
      this.Jogada[casaTabuleiro] = "X";}
      else{
      this.Jogada[casaTabuleiro] = "O";}

      this.readonly(casaTabuleiro);
      this.checarVitoria();
      return this.Jogada;
    }
    else {
      if( this.daVez  == "O"){
      this.Jogada[casaTabuleiro] = "O";}
      else{
      this.Jogada[casaTabuleiro] = "X";}
      this.readonly(casaTabuleiro);
      this.checarVitoria();
      return this.Jogada;
    }
 
  }

  checarVitoria() {

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
        if (this.Vez == 8) {
          this.Empate = true;
        }

      }
  }

  public restart(reiniciarPartida: boolean) {

    if (reiniciarPartida) {
      this.PontoPlayer1 = 0;
      this.PontoPlayer2 = 0;
      this.Player1 = "O";
      this.Player2 = "X";
    }

    for (var counter: number = 0; counter < 9; counter++) {
      this.Jogada[counter] = "'";
      this.marcarReadonly[counter] = false;
      this.corBotao[counter] = "btn btn-dark  text-dark  btn-lg btn-block";
    }

    this.Fim = false;
    this.Vez = 0;
   // this.Vencedor = "";
    this.Empate = false;

  }

}
