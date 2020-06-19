import { Component, OnInit,Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-viewarticle',
  templateUrl: './viewarticle.component.html',
  styleUrls: ['./viewarticle.component.css']
})
export class ViewarticleComponent implements OnInit {
  @Input() articleid;
  @Input() title;
  @Input() body;
  @Input() username;
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
