import { Component, Input } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ValidacaoService } from '../../validacao.service';

@Component({
  selector: 'ngbd-modal-content',
  templateUrl: './modal-content.html',
  styleUrls: ['./modal-content.css']
})
export class NgbdModalContent {
  // @Input() name ;

  constructor(public activeModal: NgbActiveModal, private validacao: ValidacaoService) {

  }

  @Input() restart(reiniciarPartida: boolean) {

    for (var counter: number = 0; counter < 9; counter++) {

      console.log(this.validacao.Jogada[counter]);
      console.log(this.validacao.MarcarReadonly[counter]);
      console.log(this.validacao.CorBotao[counter]);
      console.log(this.validacao.Fim);

    }

    this.validacao.restart(reiniciarPartida);
    this.activeModal.dismiss('Cross click')

  }

}