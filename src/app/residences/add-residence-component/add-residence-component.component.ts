
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Residence } from 'src/app/Core/Models/residence';
import { ResidenceService } from 'src/app/Core/services/residence.service';

@Component({
    selector: 'app-residences',
    templateUrl: 'add-residence-component.component.html',
    styleUrls: ['./add-residence-component.component.css']
})
export class AddProductComponent {
    registerForm = this.res.group({
      id:[0],
      name:['', Validators.required],
      address:['',Validators.required],
      image:['',Validators.required],
      status:['',Validators.required],
    });
  
    constructor (private res : FormBuilder, private Rout: Router, private resS :ResidenceService){}

  
  onSubmit():void {
    console.log('residence added succesfully', this.registerForm.value,this.registerForm.invalid);
  }
  
  R!:Residence;
  SaveResidence(F:FormGroup){
  
    this.R={...F.value};
    console.log(this.R);
    this.R.status="vendu";
    this.resS.addResidence(this.R);
    this.Rout.navigate(['/residences']);

    this.resS.addResidence(this.R).subscribe(
      () =>{console.log("Residence ajoutée avec succès");
        this.Rout.navigate(['/residences'])

      }
    )

}
}