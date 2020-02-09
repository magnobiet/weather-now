import { Component } from '@angular/core';

@Component({
  selector: 'wn-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public locations = [
    'Urubici, BR',
    'Nuuk, GL',
    'Nairobi, KE'
  ];

}
