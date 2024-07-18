import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { DetailsComponent } from "./details/details.component";
const routeConfig: Routes = [
    //where each route goes for each view 
    {
        path: '',
        component: HomeComponent,
        title: 'Home Page'
    }
];

export default routeConfig;