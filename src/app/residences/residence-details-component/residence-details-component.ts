import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Residence } from 'src/app/Core/Models/residence';

@Component({
  selector: 'app-residence-details-component',
  templateUrl: './residence-details-component.component.html',
  styleUrls: ['./residence-details-component.component.css']
})
export class ResidenceDetailsComponentComponent {
  listResidences: Residence[] = [
    { id: 1, name: "El Maryem", address: "Borj Cedria", image: "assets/images/images/R1.jpg", status: "Disponible" },
    { id: 2, name: "El Yasmine", address: "Ezzahra", image: "assets/images/images/R2.jpg", status: "Disponible" },
    { id: 3, name: "El Arij", address: "Rades", image: "assets/images/images/R3.jpg", status: "Vendu" },
    { id: 4, name: "El Anber", address: "inconnu", image: "assets/images/images/logo.png", status: "En Construction" }
  ]; 

  residenceId!: number;
  R!: Residence | undefined; // Peut être undefined si l'ID n'existe pas

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.residenceId = Number(params.get('id')); // "id" doit correspondre à la route
      this.R = this.listResidences.find(res => res.id === this.residenceId);
    });}



}
