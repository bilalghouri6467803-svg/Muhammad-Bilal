import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
myReactiveForm!:FormGroup
  constructor( private _crudService:CrudService) { }

  onSave(){
  this._crudService.saveform(this.myReactiveForm.value).subscribe
}

  ngOnInit(): void {
    this.myReactiveForm = new FormGroup({
  user: new FormControl(null),
  email: new FormControl(null),
  product: new FormControl(null),
  course: new FormControl(null),
  gender: new FormControl(null),
});
}
onSubmit(){
  console.log(this.myReactiveForm.value)
  }
}
