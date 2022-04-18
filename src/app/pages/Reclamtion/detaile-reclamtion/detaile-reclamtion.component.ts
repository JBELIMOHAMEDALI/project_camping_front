import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-detaile-reclamtion',
  templateUrl: './detaile-reclamtion.component.html',
  styleUrls: ['./detaile-reclamtion.component.scss']
})
export class DetaileReclamtionComponent implements OnInit {
  @Input() obj;

  constructor(public activeModal: NgbActiveModal ) { }

  ngOnInit() {
  }

}
