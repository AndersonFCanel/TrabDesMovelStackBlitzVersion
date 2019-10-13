import { Component, Input } from "@angular/core";
import { NgbModal, NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { ValidacaoService } from "../../validacao.service";

@Component({
  selector: 'ngbd-modal-input',
  templateUrl: './modal-input.component.html'
    
})
export class ModalInputComponent {
  @Input() name;

  constructor(
    public activeModal: NgbActiveModal,
    private validacao: ValidacaoService
  ) {}

  @Input() restart(reiniciarPartida: boolean) {}
}
