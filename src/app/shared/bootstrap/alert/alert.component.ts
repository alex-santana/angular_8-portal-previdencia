import { Component, OnInit, Input } from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styles: []
})
export class AlertComponent implements OnInit {

  @Input() type: string = "info";
  @Input() message: string;

  constructor(public  bsModelRef : BsModalRef) { }

  ngOnInit() {
  }

  onClose(){
    this.bsModelRef.hide();
  }

}
