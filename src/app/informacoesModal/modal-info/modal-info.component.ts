import { Component, Input } from "@angular/core";
import { NgbModal, NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { NgbdModalContent } from "./modal-content";

import { ValidacaoService } from '../..validacao.service';

@Component({
  selector: "ngbd-modal-component",
  templateUrl: "./modal-info.component.html"
})
export class NgbdModalComponent {
  constructor(private modalService: NgbModal, private validacao: ValidacaoService) {}

  open() {
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.name = "World";
  }
}
