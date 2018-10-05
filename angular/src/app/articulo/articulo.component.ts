import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { convertInjectableProviderToFactory } from '@angular/core/src/di/injectable';

@Component({
  selector: 'cas-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css'],
 // encapsulation: ViewEncapsulation.ShadowDom
})
export class ArticuloComponent implements OnInit {

  @Input() autor: string
  @Input() titulo: string
 
  constructor() { }

  ngOnInit() {
  }

}
