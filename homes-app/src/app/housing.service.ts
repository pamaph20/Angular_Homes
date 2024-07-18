import { Injectable } from '@angular/core';
import { HousingLocation } from './housing-location';
@Injectable({
  providedIn: 'root'
})
export class HousingService {
  url = "http://localhost:3000/locations"
  async getAllHousingLocatons (): Promise<HousingLocation[]> {
    /***\
     * Function that returns all housing locations via an array
     */
    const data = await fetch(this.url);
    return await data.json() ?? []
  }
  
  async getHousingLocationById(id: number): Promise<HousingLocation | undefined> {
    //takes an id returns a housing location
    const data = await fetch(`${this.url}/${id}`);
    return await data.json() ?? {};
    //returns a housing location where the location id is equal to the given id
  }
  constructor() { }

  submitApplication(firstName:string, lastName:string, email:string){
    console.log(firstName,lastName,email)
  }
}
