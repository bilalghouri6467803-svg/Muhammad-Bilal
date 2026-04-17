import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CrudService } from '../crud.service';

// import { log } from 'console';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   @ViewChild ('name') name!:ElementRef; 
   @ViewChild ('email') email!:ElementRef; 
   @ViewChild ('mobila') mobile!:ElementRef; 
   @ViewChild ('age') age!:ElementRef; 
  editMode:boolean=false;

myReactiveForm!:FormGroup
  constructor( private _crudService:CrudService) {}
  add( name:any,email:any,mobile:any,age:any){
    if(this.editMode){
  this.product[this.editIndex]={
    name:name.value,
      email:email.value,
      mobile:mobile.value,
      age:age.value, 
  }
  this.editMode=false
     this.name.nativeElement.value='';
   this.email.nativeElement.value='';
   this.mobile.nativeElement.value='';
   this.age.nativeElement.value='';
    } else{
    this.product.push({
      name:name.value,
      email:email.value,
      mobile:mobile.value,
      age:age.value,

    })
   
    }
 this.onsave()

  
}

ondelete(i:any){
  this.product.splice(i,1)
}
onsave(){
  this._crudService.saveproduct(this.product).subscribe()
}
  editIndex!:number;
onadit(Index:number){
    this.editMode=true
    this.editIndex=Index;
   console.log(this.product[Index])
   this.name.nativeElement.value=this.product[Index].name;
   this.email.nativeElement.value=this.product[Index].email;
   this.mobile.nativeElement.value=this.product[Index].mobile;
   this.age.nativeElement.value=this.product[Index].age;
}

product=[ 
  {
    name:"bilal",
    email:"bilalghouri6467803@gmail.com",
    mobile:"+923263865990",
    age:"23"
  },
  {
  
    name:"bilal",
    email:"bilalghouri6467803@gmail.com",
    mobile:"+923263865990",
    age:"23"
  },
  {

    name:"bilal",
    email:"bilalghouri6467803@gmail.com",
    mobile:"+923263865990",
    age:"23"
  },
  {
  
    name:"bilal",
    email:"bilalghouri6467803@gmail.com",
    mobile:"+923263865990",
    age:"23"
  },
]
   

ngOnInit(): void {

  this.myReactiveForm = new FormGroup({
    name: new FormControl(null),
    Email: new FormControl( null,[Validators.required, Validators.email]),
    Mobile: new FormControl( null,[Validators.required,  Validators.pattern(/^03[0-9]{9}$/)]),
    Age: new FormControl(null),
  });
}
onSubmit(){
  console.log(this.myReactiveForm)
}


}







