import { Component, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { Injectable } from '@angular/core';
import { ValidacaoService } from '../validacao.service';
import { NgbModal, NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { NgbdModalContent } from "../informacoesModal/modal-info/modal-content";
import { ModalInputComponent } from "../informacoesModal/modal-input/modal-input.component";


@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-teclado',
  templateUrl: './teclado.component.html',
  styleUrls: ['./teclado.component.css']
})

export class TecladoComponent implements OnInit, AfterViewInit {

  public jogada;
  public vez;
  public player1;
  public player2;
  public pontoPlayer1;
  public pontoPlayer2;
  public fim;
  public marcarReadonly;
  public corBotao;

  constructor(private validacao: ValidacaoService, private modalService: NgbModal, private cd: ChangeDetectorRef) {
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

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.openInput();
    });
  }

  openInput() {
    const modalRefA = this.modalService.open(ModalInputComponent);
    modalRefA.componentInstance.name = "World";
  }


  open() {
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.name = "World";
  }


  marcaJogada(casaTabuleiro: number) {
    console.log("vez: " + this.validacao.Vez);

    this.validacao.marcaJogada(casaTabuleiro);

    if (this.validacao.Fim || this.validacao.Vez == 9) {
      this.open();
    }

  }

  public restart(reiniciarPartida: boolean) {

    this.validacao.restart(reiniciarPartida);
    if (reiniciarPartida) {
      this.openInput();
    }

  }


}
