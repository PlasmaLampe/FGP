import {Injectable} from 'angular2/core';
import {Inject} from 'angular2/core';

@Injectable()
export class DevConfigService {
    
}

@Injectable()
export class FGPService {
    public userList : string[] = [];
    public restaurantList: string[] = [];
    
    public mockUserList : boolean = true;
    public mockUsers : string[] = ['Hendrik', 'Volker', 'Virgilio', 'Jörg'];
    
    public mockRestaurantList : boolean = true;
    public mockRestaurants : string[] = ['Pizza Pazza', 'Sasan', 'Nehring', 'Der Japaner'];
    
    constructor(){
        
        // FIXME fetch data from backend
      if(this.mockRestaurantList){
          for(var restaurant of this.mockRestaurants){
              this.restaurantList.push(restaurant);
          }
      }
      
       if(this.mockUserList){
          for(var user of this.mockUsers){
              this.userList.push(user);
          }
      }
    }
}