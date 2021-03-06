import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantService } from '../restaurants/restaurants.service';
import { Restaurant } from '../restaurants/restaurant/restaurant.model';

@Component({
    selector: 'mt-restaurant-detail',
    templateUrl: './restaurant-detail.component.html'
})
export class RestaurantDetailComponent implements OnInit {

    restaurant: Restaurant;

    constructor(private restaurantService: RestaurantService,
        private route: ActivatedRoute) {
        }

        ngOnInit() { //json
            this.restaurantService.restaurantById(this.route.snapshot.params['id'])
            .subscribe(restaurant => this.restaurant = restaurant);

        }

    }
