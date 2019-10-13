import {Component, Input} from '@angular/core';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { ValidacaoService } from '../../validacao.service';

@Component({
  selector: 'ngbd-modal-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Outra Partida ou Reiniciar Rodada?</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      
    </div>
    <div class="modal-footer">
      <div class="row">
        <div class="col-5 col-lg-5 ">
            <button (click)="restart(false)" type="button" class="btn btn-warning btn-lg btn-block">Limpar
                Tabuleiro</button>
        </div>
        <div class="col-2 col-lg-2 ">
        </div>
        <div class="col-5 -lg-5 ">
            <button (click)="restart(true)" type="button" class="btn btn-danger btn-lg btn-block">Reiniciar
                Partida</button>
        </div>
    </div>
    </div>
  `
})
export class NgbdModalContent {
 // @Input() name ;
  
  constructor(public activeModal: NgbActiveModal, private validacao: ValidacaoService ) {

  }  
 
  @Input() restart(reiniciarPartida: boolean) {
      
   for (var counter: number = 0; counter < 9; counter++) {

      console.log( this.validacao.Jogada[counter]);
      console.log( this.validacao.MarcarReadonly[counter]);
      console.log( this.validacao.CorBotao[counter]);
      console.log( this.validacao.Fim );

    }
  
    this.validacao.restart(false);
    
  }

}