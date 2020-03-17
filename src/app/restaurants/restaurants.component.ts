import { Component, OnInit } from '@angular/core';
import { Restaurant } from './restaurant/resturant.model';
import { RestaurantsService } from './restaurants.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html'
})
export class RestaurantsComponent implements OnInit {

  restaurants: Observable<Restaurant[]>

  constructor(private restaurantService: RestaurantsService) { }
  
  ngOnInit() {
    this.restaurants = this.restaurantService.restaurants()
  }

}
