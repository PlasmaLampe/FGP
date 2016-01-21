import {Component} from 'angular2/core';
import {FGPService} from './app.service';

@Component({
  selector: 'user-add',
  template:`
    <h2>Einen Benutzer hinzufügen</h2>
    <div>
      <label>Dein Name: </label>
      <div><input [(ngModel)]="newUserName" placeholder="name"></div>
      <button (click)="addUser()">Ich will auch essen!</button>
    </div>
    <h2>Bekannte Nutzer</h2>
    <ul>
    <li *ngFor='#user of users'> {{user}} </li>
    </ul>
    `,
    providers: [FGPService]
})
export class UserAddCtrl {
  public newUserName : string = '';
  public users : string[] = [];
  
  constructor(private _fgpService : FGPService){
      this.users = _fgpService.userList;
  }
  
  addUser(user : string = this.newUserName) : void{
      this.users.push(user);
  }
}

@Component({
  selector: 'restaurant-add',
  template:`
    <h2>Ein Restaurant hinzufügen</h2>
    <div>
      <label>Wo willst du sonst noch essen? </label>
      <div><input [(ngModel)]="newRestaurantName" placeholder="name"></div>
      <button (click)="addRestaurant()">Da will ich essen!</button>
    </div>
    <h2>Bekannte Restaurants</h2>
    <ul>
    <li *ngFor='#restaurant of restaurants'> {{restaurant}} </li>
    </ul>
    `,
    providers: [FGPService]
})
export class RestaurantAddCtrl {
  public newRestaurantName : string = '';
  public restaurants : string[] = [];
  
  constructor(private _fgpService : FGPService){
      this.restaurants = _fgpService.restaurantList;
  }
  
  addRestaurant(aRestaurant : string = this.newRestaurantName) : void{
      this.restaurants.push(aRestaurant);
  }
}

@Component({
  selector: 'rating',
  template:`
    <h2>Heutige Wertung abgeben</h2>
    <div>
      <label>Wer bist du?</label>
      <dropdown dropdown-height="200px" dropdown-width="200px"
         [options]="users"
         (selection)="onSelection($event)">
        </dropdown>
      <div><input [(ngModel)]="usePoints" placeholder="points"></div>
      
      <label>Wie viele Punkte möchtest du setzen?</label>
      <div><input [(ngModel)]="usePoints" placeholder="points"></div>
      
      <label>Wo möchtest du hingehen?</label>
      <div><input [(ngModel)]="usePoints" placeholder="points"></div>
      
      <button (click)="addRestaurant()">Punkte setzen</button>
    </div>
    `,
    providers: [FGPService]
})
export class RatingCtrl {
   public users : string[] = [];
   
  constructor(private _fgpService : FGPService){
        this.users = _fgpService.userList;
  }
  
}