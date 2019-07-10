import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interlis',
  templateUrl: './interlis.page.html',
  styleUrls: ['./interlis.page.scss'],
})
export class InterlisPage implements OnInit {

  slides: { img: string, titulo: string, desc: string }[] = [
    {
      img: '/assets/slides/interlis.svg',
      titulo: '¿Qué es Interlis?',
      desc: 'INTER Land Information Systems'
    },
    {
      img: '/assets/slides/interlis.svg',
      titulo: '¿Qué es Interlis?',
      desc: 'Es un lenguaje descriptivo conceptual'
    },
    {
      img: '/assets/slides/interlis.svg',
      titulo: '¿Qué es Interlis?',
      desc: 'Es un lenguaje orientados a objetos'
    },
    {
      img: '/assets/slides/interlis_2.png',
      titulo: '¿Qué es Interlis?',
      desc: 'Neutral respecto a plataformas y sistemas'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
