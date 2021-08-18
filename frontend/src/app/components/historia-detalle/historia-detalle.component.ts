import { Component, OnInit } from '@angular/core';
import {DetallesService} from '../../services/detalles.service'
import {HistoriaService} from '../../services/historia.service'
import {NgForm} from '@angular/forms'
@Component({
  selector: 'app-historia-detalle',
  templateUrl: './historia-detalle.component.html',
  styleUrls: ['./historia-detalle.component.css']
})
export class HistoriaDetalleComponent implements OnInit {
  
  constructor(public historiaService: HistoriaService, public detalleService: DetallesService) { }

  ngOnInit(): void {
    this.getHistorias()
  }
  getHistorias(){
    this.historiaService.getHistorias().subscribe(
      res => {
        this.historiaService.historias=res;
      },
      err => console.log(err)
    )
  }
  addHistoria(form: NgForm){

  }

}
