import { Component, OnInit, Input } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styles: []
})
export class ModalComponent implements OnInit {

  @Input() title: string = '';
  @Input() message: string = '';
  constructor(private modalRef: BsModalRef) { }

  ngOnInit() {
    
  }

}
