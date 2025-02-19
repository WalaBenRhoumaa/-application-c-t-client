import { Component } from '@angular/core';
import { Residence } from 'src/app/Core/Models/residence';

@Component({
  selector: 'app-residencess-component',
  templateUrl: './residencess-component.component.html',
  styleUrls: ['./residencess-component.component.css']
})
export class ResidencessComponentComponent {
   listResidences: Residence[] = [
      { id: 1, name: "El Maryem", address: "Borj Cedria", image: "assets/images/R1.jpg", status: "Disponible" },
      { id: 2, name: "El Yasmine", address: "Ezzahra", image: "assets/images/R2.jpg", status: "Disponible" },
      { id: 3, name: "El Arij", address: "Rades", image: "assets/images/R3.jpg", status: "Vendu" },
      { id: 4, name: "El Anber", address: "inconnu", image: "assets/images/logo.png", status: "En Construction" }
    ]; 
  
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
