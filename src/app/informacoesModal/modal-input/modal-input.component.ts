import { Component, Input } from "@angular/core";
import { NgbModal, NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { ValidacaoService } from "../../validacao.service";

@Component({
  selector: 'ngbd-modal-input',
  templateUrl: './modal-input.component.html',
  styleUrls: ['./modal-input.component.css']
})

export class ModalInputComponent {
  @Input() name;

  constructor(
    public activeModal: NgbActiveModal,
    private validacao: ValidacaoService
  ) { }

  @Input() restart(reiniciarPartida: boolean) {

    this.validacao.restart(reiniciarPartida);
  }
}
