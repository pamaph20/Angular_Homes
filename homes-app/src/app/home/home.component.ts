import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housing-location';
import { HousingService } from '../housing.service';
import { BooksService } from '../books.service';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  template: `
   <section>
      <form>
        <input type="text" placeholder="Filter by city" #filter/>
        <button class="primary" type="button" (click)="filterResults(filter.value)">Search</button>
      </form>
    </section>
    <section class="results">
      <app-housing-location *ngFor = "let housingLocation of filteredLocationList" [housingLocation] = "housingLocation"></app-housing-location>
    </section>
    `
  ,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  housingLocationList: HousingLocation[] = []
  housingService: HousingService = inject(HousingService)
  bookService: BooksService = inject(BooksService)
  filteredLocationList : HousingLocation[] = []
  constructor() {
    this.housingService.getAllHousingLocatons().then((housingLocationList : HousingLocation[]) => {
      this.housingLocationList = housingLocationList;
      this.filteredLocationList = housingLocationList;
    });
  }
  async filterResults(text:string){
    const result = await this.bookService.searchBook(text)
    console.log(result)
  }
}
