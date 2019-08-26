import { Component, OnInit } from '@angular/core';

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('beerAnimate', [
      state('show', style({
        opacity: 1,
        transform: 'translateX(0) rotate(360deg)'
      })),
      state('hide',   style({
        opacity: 0,
        transform: 'translateX(-100%)'
      })),
      transition('show => hide', animate('700ms ease-out')),
      transition('hide => show', animate('700ms ease-in'))
    ]),
    trigger('percentAnimate', [
      state('show', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      state('hide',   style({
        opacity: 0,
        transform: 'translateX(-100%)'
      })),
      transition('show => hide', animate('700ms ease-in')),
      transition('hide => show', animate('700ms ease-out'))
    ])
  ]
})
export class HeaderComponent implements OnInit {

  public beerState = 'hide';
  public percentState = 'hide';

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.beerState = 'show';
    }, 500);

    setTimeout(() => {
      this.percentState = 'show';
    }, 1200);
  }

}
