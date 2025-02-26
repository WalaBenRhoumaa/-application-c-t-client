import { Injectable } from '@angular/core';
import { Residence } from '../Models/residence';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ResidenceService {

   listResidences: Residence[] = [
   ]

  url="http://localhost:3000/Residences" ;

  constructor( private http:HttpClient) { }

  getResidences(){
    return this.http.get<Residence[]>(this.url) ;
  }

  addResidence(residence:Residence){
    return this.http.post(this.url, residence);
  }
}
