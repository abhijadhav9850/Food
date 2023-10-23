import { Component } from '@angular/core';
import { OrderDetailsService } from 'src/app/Service/order-details.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  constructor(public gs:OrderDetailsService){}

  foodData:any;

  ngOnInit():void{
    this.foodData = this.gs.foodDetails;
  }

}
