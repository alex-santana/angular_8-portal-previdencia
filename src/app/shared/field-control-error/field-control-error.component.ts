import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-field-control-error',
  templateUrl: './field-control-error.component.html',
  styles: []
})
export class FieldControlErrorComponent implements OnInit {

  @Input() showError:boolean;
  @Input() msgError:string;

  constructor() { }

  ngOnInit() {
  }

}
