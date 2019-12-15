import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ShowOption(dvoption)
  {
    let option = document.getElementsByClassName('option');
    for (let index = 0; index < option.length; index++) {
      option[index].classList.remove('active');
    }
    dvoption.classList.add('active');
  }
}