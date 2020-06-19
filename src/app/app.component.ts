import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {ViewarticleComponent} from './viewarticle/viewarticle.component'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  modalReference: any;
  public data = []
  dtOptions: DataTables.Settings = {};
  constructor(
    private appService: AppService,
    private modalService: NgbModal
  ) {
  }

  title = 'coderscotch';

  ngOnInit() {
    this.appService.get().subscribe((response: any) => {
      this.data = response;
      response.map(data => {
        this.appService.getuser(data.userId).subscribe((userresponse: any) => {
          data.username = userresponse[0].name;
        }, error => {
        });
        this.appService.getcomments(data.id).subscribe((commentresponse: any) => {
          data.comments = commentresponse.length;
        }, error => {
        });
      })

    }, error => {
    });
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true,
      order: [[0, 'desc']],
      // lengthMenu :[10,20,30,40,50,60,70,80,90,100]

    };
 
  }
   articleDetails(data){
    const modalRef = this.modalService.open(ViewarticleComponent, { size: "lg", windowClass: 'big_popup' });
    modalRef.componentInstance.articleid = data.id;
    modalRef.componentInstance.title = data.title;
    modalRef.componentInstance.body =data.body;
    modalRef.componentInstance.username =data.username;
  }

}
