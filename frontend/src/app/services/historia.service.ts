import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import {Historia} from '../models/Historia'
@Injectable({
  providedIn: 'root'
})
export class HistoriaService {

  URL_API = 'http://localhost:3000/api/historia'
  historiaN: Historia = {
    mascota_id: ' '
  };
  historias: Historia[];
  constructor(private http: HttpClient) { 
    this.historias = []
  }

  
  getHistorias(){
    return this.http.get<Historia[]>(this.URL_API);
  }

}
