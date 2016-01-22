import {Component} from 'angular2/core';
import {FGPService} from './app.service';
import { CORE_DIRECTIVES } from 'angular2/common';
import {Alert} from 'ng2-bootstrap/ng2-bootstrap';
import { DROPDOWN_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap';

@Component({
  selector: 'user-add',
  template:`
    <h2>Einen Benutzer hinzufügen</h2>
    <div>
      <label>Dein Name: </label>
      <div><input [(ngModel)]="newUserName"></div>
      <button (click)="addUser()">Ich will auch essen!</button>
    </div>
    <h3>Bekannte Nutzer</h3>
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
      <div><input [(ngModel)]="newRestaurantName"></div>
      <button (click)="addRestaurant()">Da will ich essen!</button>
    </div>
    <h3>Bekannte Restaurants</h3>
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
  directives: [
    DROPDOWN_DIRECTIVES, CORE_DIRECTIVES
  ],
  template:`
    <h2>Heutige Wertung abgeben</h2>
    <div>
      <label>Wer bist du?</label>
        <div class="dropdown">
        <button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
            {{selectedUser}}
            <span class="caret"></span>
        </button>
        <ul class="dropdown-menu" aria-labelledby="Userlist">
            <li *ngFor='#user of users'><a href="#" (click)='selectUser(user)'>{{user}}</a></li>
        </ul>
        </div>
      
      <label>Wie viele Punkte möchtest du setzen?</label>
      <div><input [(ngModel)]="usePoints"></div>
      
      <label>Wo möchtest du hingehen?</label>
        <div class="dropdown">
        <button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
            {{selectedRestaurant}}
            <span class="caret"></span>
        </button>
        <ul class="dropdown-menu" aria-labelledby="Restaurantlist">
            <li *ngFor='#restaurant of restaurants'><a href="#" (click)='selectRestaurant(restaurant)'>{{restaurant}}</a></li>
        </ul>
        </div>
      
      <button (click)="addRestaurant()">Punkte setzen</button>
    </div>
    `,
    providers: [FGPService]
})
export class RatingCtrl {
    public selectedUser : string = 'Konrad Zuse ... achnee ...';
    public users : string[] = [];
    
    public selectedRestaurant : string = 'Die Batcave...';
    public restaurants : string[] = [];
  
  constructor(private _fgpService : FGPService){
        this.users = _fgpService.userList;
        this.restaurants = _fgpService.restaurantList;
  }
  
    public selectUser(user:string) : void{
        this.selectedUser = user;        
    }
    
    public selectRestaurant(rest:string) : void{
        this.selectedRestaurant = rest;        
    }
  
}