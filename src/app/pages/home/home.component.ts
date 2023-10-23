import { Component } from '@angular/core';
import { OrderDetailsService } from 'src/app/Service/order-details.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(public gs:OrderDetailsService) { }
  foodData:any;

  ngOnInit(): void{
    this.foodData = this.gs.foodDetails
  }
}
