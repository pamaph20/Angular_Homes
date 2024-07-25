import { Injectable } from '@angular/core';
import { HousingLocation } from './housing-location';
@Injectable({
  providedIn: 'root'
})
export class HousingService {
  url = "http://localhost:8001/locations"
  //should just be a general library search.
  libSearchurl = "http://localhost:3000/library/search"
  libUrl = "http://localhost:3000/library/"
  //testing info
  lib_name = "Drews%20Library" 
  user_id = "1"
  bookUrl = "http://localhost:3000/books/search/"
  async getAllHousingLocatons (): Promise<HousingLocation[]> {
    /***\
     * Function that returns all housing locations via an array
     */
    const data = await fetch(this.libUrl)
    return await data.json() ?? []
  }
  
  async getHousingLocationById(olid: number): Promise<HousingLocation | undefined> {
    //takes an id returns a housing location
    console.log(olid)
    const data = await fetch(`${this.url}/${olid}`);
    return await data.json() ?? {};
    //returns a housing location where the location id is equal to the given id
  }
  constructor() { }

  submitApplication(firstName:string, lastName:string, email:string){
    console.log(firstName,lastName,email)
  }
}
