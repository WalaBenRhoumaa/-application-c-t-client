
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-residences',
    templateUrl: 'add-residence-component.component.html',
    styleUrls: ['./add-residence-component.component.css']
})
export class AddProductComponent {
    registerForm = this.res.group({
      name:['', Validators.required],
      address:['',Validators.required],
      image:['',Validators.required],
    });
    constructor (private res : FormBuilder ){}

  
  onSubmit():void {
    console.log('residence added succesfully', this.registerForm.value,this.registerForm.invalid);
  }

}