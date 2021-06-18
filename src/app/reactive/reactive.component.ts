import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FromEventTarget } from 'rxjs/internal/observable/fromEvent';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

 

student!: FormGroup;
submitted=false


constructor(private formbuilder:FormBuilder) { }
get f() { return this.student.controls; }
  ngOnInit(): void {
    this.student= this.formbuilder.group({
      FIRSTNAME:['',Validators.required],
      
      LASTNAME:[null,Validators.required],
      AGE:[null,Validators.required],
      GENDER:[null,Validators.required],
      DATEOFBIRTH:[null,Validators.required],
      EMAIL:[null,Validators.email],
      CURRENTADDRESS:[null,Validators.required],
      PERMANENTADDRESS:[null,Validators.required]
    })
  
  
  }
  onSubmit(){
    this.submitted=true;

    if(this.student.invalid){
      return;
    }
    this.student.controls.CURRENTADDRESS=this.student.controls.PERMANENTADDRESS;

    console.log(this.student.controls.PERMANENTADDRESS.value);

  }
 
}
