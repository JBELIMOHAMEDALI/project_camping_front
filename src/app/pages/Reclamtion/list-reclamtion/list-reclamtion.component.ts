import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { nextTick } from 'process';
import { DetaileReclamtionComponent } from '../detaile-reclamtion/detaile-reclamtion.component';
import { SharedService } from './../../../service/shared.service';

@Component({
  selector: 'app-list-reclamtion',
  templateUrl: './list-reclamtion.component.html',
  styleUrls: ['./list-reclamtion.component.scss']
})
export class ListReclamtionComponent implements OnInit {
  listCampe: any[] = []
  p: number;
  term: any;
  id_projet: string = "-1";

  page = 1;
  pageSize = 5;
  pageSizes = [5,10,15];

  constructor(private shared:SharedService,private modalService: NgbModal) { }
//getAllBayEndPoint
  ngOnInit() {
    this.getAllBayType("o");
  }
getAllBayType(type:string){
this.shared.getAllBayEndPoint("reclamtaion_all",type).subscribe({
  next: (data) => {
    const donne: any = data;
     this.listCampe = donne;
  }, error: (err) => {
    this.listCampe = [];
  }
})
}
openInfo(obj:any){
  const modalRef = this.modalService.open(DetaileReclamtionComponent);
  modalRef.componentInstance.titel = "Details Complaons";
  modalRef.componentInstance.obj = obj;

}
handlePageSizeChange(event: any): void {
  const v = event.target.value;
  this.listCampe = [];
  this.getAllBayType(v);

}
}

