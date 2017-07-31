import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {
 GoogleMaps,
 GoogleMap,
 GoogleMapsEvent
} from '@ionic-native/google-maps';

/**
 * Generated class for the MapGetMapPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-map-setdiv',
  templateUrl: 'setdiv.html',
  providers: [
    GoogleMaps
  ]
})
export class MapSetDivPage {
  map: GoogleMap;
  mapDiv: HTMLElement;

  constructor(public navCtrl: NavController, public navParams: NavParams, private googleMaps: GoogleMaps) {}

  ionViewDidLoad() {
    var self=this;
    self.loadMap();
  }
  loadMap() {
    this.mapDiv = document.getElementById('map_canvas');
    this.map = this.googleMaps.create(this.mapDiv);

    // Wait the MAP_READY before using any methods.
    this.map.one(GoogleMapsEvent.MAP_READY)
      .then(() => {
        console.log('Map is ready!');

      });
  }

  onButtonClick(event) {
    if (this.map.getDiv()) {
      this.map.setDiv();
    } else {
      this.map.setDiv(this.mapDiv);
    }
  }
}
