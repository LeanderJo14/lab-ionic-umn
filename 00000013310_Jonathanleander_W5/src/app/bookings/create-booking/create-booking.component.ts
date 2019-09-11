import { Component, OnInit, Input } from '@angular/core';
import { Place } from 'src/app/places/place.model';
import { ModalController, LoadingController } from '@ionic/angular';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.scss'],
})
export class CreateBookingComponent implements OnInit {
  @Input() selectedPlace: Place;

  constructor(private modalCtrl: ModalController,
     private loadingCtrl: LoadingController,
     private actionSheetController: ActionSheetController) { }

  ngOnInit() {}

  onCancel(){
    this.modalCtrl.dismiss(null, 'cancel');
  }

  onBookPlace(){
this.modalCtrl.dismiss({message: 'This is a dummy Message!'},'confirm')
  }

  bookThisPlace() {
//this.isLoading = true;
this.loadingCtrl.create({
  keyboardClose: true,
  message: 'Booking the place....'
})
.then(loadingEL => {
  loadingEL.present();
  setTimeout(()=>{
    loadingEL.dismiss();
    this.presentActionSheet();
    this.modalCtrl.dismiss({message: 'booked!'},'confirm');
  }, 2000);
});

  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Albums',
      buttons: [
        {text: 'book w/ random date'},
        {text: 'Cancel', role: 'cancel'}
      ]
    });
    await actionSheet.present();

  }}
