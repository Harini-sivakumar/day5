import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {
submitted=false;
model:any={}
  constructor() { }

  ngOnInit(): void {
  }
   
Address(){
  if(this.model.CURRENTADDRESS){
    this.model.PERMANENTADDRESS=this.model.CURRENTADDRESS;
    console.log(this.model.PERMANENTADDRESS);
  }
}

  hresult(){
    if(this.model.HSLCMARK<=1200){
      this.model.HSLCPERCENT=(((this.model.HSLCMARK)/1200)*100);
      console.log(this.model.HSLCPERCENT);
    }else{
      this.model.HSLCPERCENTt=0;
    }
  } 
  
  
  sresult(){
    if(this.model.SSLCMARK<=1200){
      this.model.SSLCPERCENT=(((this.model.SSLCMARK)/500)*100);
      console.log(this.model.SSLCPERCENT);
    }else{
      this.model.HSLCPERCENTt=0;
    }
  } 
  


  onSubmit(){
    this.submitted=true;
  
    if(this.model.invalid){
      return;
  
    }
    console.log(this.model);

}
}
