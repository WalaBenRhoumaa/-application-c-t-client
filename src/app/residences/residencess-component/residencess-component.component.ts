import { Component } from '@angular/core';
import { Residence } from 'src/app/Core/Models/residence';
import { ResidenceService } from 'src/app/Core/services/residence.service';

@Component({
  selector: 'app-residencess-component',
  templateUrl: './residencess-component.component.html',
  styleUrls: ['./residencess-component.component.css']
})
export class ResidencessComponentComponent {
   listResidences: Residence[] = [
     
    ]; 
  constructor(private resServ:ResidenceService){}
  ngOnInit(){
    this.resServ.getResidences().subscribe(
      data => this.listResidences= data,
      erreur => console.log(erreur),
      () => console.log("Le chargement des residences ")
    )
  }



    selectedResidenceId: number | null = null;
    favorites: Residence[] = [];
    searchTerm: string = ''; // Terme de recherche
  
    show(R: Residence) {
      if (R.address.toLowerCase() == "inconnu") {
        alert("Adresse inconnue");
      } else {
        this.selectedResidenceId = (this.selectedResidenceId === R.id) ? null : R.id;
      }
    }
  
    toggleFavorite(R: Residence) {
      const index = this.favorites.findIndex(fav => fav.id === R.id);
      if (index > -1) {
        this.favorites.splice(index, 1);
      } else {
        this.favorites.push(R);
      }
    }
  
    isFavorite(R: Residence): boolean {
      return this.favorites.some(fav => fav.id === R.id);
    }
  
    getFilteredResidences(): Residence[] {
      return this.listResidences.filter(residence => 
        residence.address.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }




}
