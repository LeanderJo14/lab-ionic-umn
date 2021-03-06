import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../places.service';
import { Place } from '../place.model';
import { EditOfferPage } from './edit-offer/edit-offer.page';
import { IonItemSliding } from '@ionic/angular';
import { Router } from '@angular/router'
@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {
offers: Place[];

  constructor(private placesService: PlacesService,
    private router: Router) { }

  ngOnInit() {
    this.offers = this.placesService.places;
  }

  editOffer(id: string, slidingItem: IonItemSliding){
    slidingItem.close();
    this.router.navigate(['/', 'places', 'tabs', 'offers', 'edit', id ]);
  }
  
}
