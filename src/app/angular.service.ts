import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class AngularService {

  constructor() { }
  setData(data:any)
  {
    console.log(data)
  }
}
