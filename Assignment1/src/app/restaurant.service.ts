import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor() { }

  myArr:string[] = ["Restaurant1","Restaurant2","Restaurant3", "Restaurnat4"];

  public getList(){
    return this.myArr;
  }
}
