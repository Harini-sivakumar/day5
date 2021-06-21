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

paddress:any;
caddress:any;
hmarks!:number;
hpercent!:number;
smarks!:number;
spercent!:number;
birth!:number;
showAge!:number;


constructor(private formbuilder:FormBuilder) { }
get f() { return this.student.controls; }
  ngOnInit(): void {
    this.student= this.formbuilder.group({
      FIRSTNAME:['',Validators.required],
      
      LASTNAME:[null,Validators.required],
      AGE:[null,Validators.required],
      GENDER:[null,Validators.required],
      DATEOFBIRTH:[null,Validators.required],
      EMAIL:[' ',Validators.email],
      CURRENTADDRESS:[null,Validators.required],
      PERMANENTADDRESS:[null,Validators.required],
      HSLCSCHOOLNAME:[null,Validators.required],
      HSLCMODE:[null,Validators.required],
      HSLCMARK:['',Validators.required],
      HSLCPERCENT:[null],
      SSLCSCHOOLNAME:[null,Validators.required],
      SSLCMODE:[null,Validators.required],
      SSLCMARK:[null,Validators.required]
    })
  
  
  }
 
Address(){
  if(this.caddress){
    this.student.controls.PERMANENTADDRESS.setValue(this.caddress);
    console.log(this.student.controls.PERMANENTADDRESS.value);
  }
  

}
ageCalc(){
  if(this.birth){
    const convertbirth = new Date(this.birth);
    const timeDiff = Math.abs(Date.now() - convertbirth.getTime());
    this.showAge = Math.floor((timeDiff / (1000 * 3600 * 24))/365.25);
    this.student.controls.age.setValue(this.showAge)
  }
}
hresult(){
  if(this.hmarks<=1200){
    this.hpercent=(((this.hmarks)/1200)*100);
    console.log(this.hpercent);
  }else{
    this.hpercent=0;
  }
}
sresult(){
  if(this.smarks<=1200){
    this.spercent=(((this.smarks)/500)*100);
    console.log(this.spercent);
  }else{
    this.spercent=0;
  }
}
onSubmit(){
  this.submitted=true;

  if(this.student.invalid){
    return;

  }
 

  console.log(this.student.value);

   
 

}
 
}
