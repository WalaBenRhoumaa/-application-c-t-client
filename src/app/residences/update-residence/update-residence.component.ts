import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Residence } from 'src/app/Core/Models/residence';
import { ResidenceService } from 'src/app/Core/services/residence.service';

@Component({
  selector: 'app-update-residence',
  templateUrl: './update-residence.component.html',
  styleUrls: ['./update-residence.component.css']
})
export class UpdateResidenceComponent {
  constructor(private actR:ActivatedRoute,private resServ:ResidenceService){}
  id!:number;
  residence!:Residence;
  updateform!:FormGroup;
 

  
  ngOnInit(){
    this.id=Number(this.actR.snapshot.paramMap.get('id'));
    this.resServ.getResidenceById(this.id).subscribe((donne)=>this.residence);
    this.updateform=new FormGroup({
      id:new FormGroup(this.residence.id),
      name:new FormGroup(this.residence.name),
      address:new FormGroup(this.residence.address),
      image:new FormGroup(this.residence.image),

    });
  }

  
}
