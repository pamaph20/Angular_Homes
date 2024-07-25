import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BooksService } from './books.service';



@Component({
  standalone: true,
  selector: 'app-root',
  imports: [HomeComponent, RouterModule, HttpClientModule],
  template: `
      <main>
      <header class="brand-name">
        <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true" />
      </header>
      <section class="content">
        <router-outlet></router-outlet>
      </section>
    </main>
  `,
  styleUrls: ['./app.component.css'],
  providers: [BooksService]
  
})
export class AppComponent {
  title = 'homes';
}
