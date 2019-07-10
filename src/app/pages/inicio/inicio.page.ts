import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Componente } from '../../interfaces/interfaces'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Observable<Componente[]>;

  constructor( private dataService: DataService ) { }

  ngOnInit() {
    this.componentes = this.dataService.getMenuOpts();
  }

}

