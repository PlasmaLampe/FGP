import {Injectable} from 'angular2/core';
import {Inject} from 'angular2/core';
import {EventEmitter} from 'angular2/core';
import {Output} from 'angular2/core';

interface IAccount {
    name : string;
    points : number;
}

export interface IChoice{
    choice : string;
    name : string;
    points : number;    
}

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
    
    public choices = [{
        name : 'Virgilio',
        choice : 'Nehring',
        points : 4
    },{
        name : 'Hendrik',
        choice : 'Pizza Pazza',
        points : 5
    }]
    
    public userAccounts : IAccount[] = []
    
     @Output() onChoiceMade: EventEmitter<any> = new EventEmitter();
    
    /**
     * Creates new accounts with 10 points for every user in the userlist that has no account, yet
     */
    initData(){
        // create new user-accounts
        for(let user of this.userList){
            let foundAccount = false;
            
            for(let account of this.userAccounts){
                if(account.name === user){
                    foundAccount = true;
                }
            }
            
            if(!foundAccount){
                this.userAccounts.push({
                    name : user,
                    points : 10
                });
            }
            
            // TODO: persist new account list
        }        
    }
    
    makeAChoice(user:string, choice : string, points:number) : void{
        const acc : IAccount = this.getUserAccount(user);
        
        if(acc.points < points){
            alert('Netter Versuch, aber sooo viele Punkte hast du nicht ;-)');
            return;
        }else{
            this.updateUserAccount(user, acc.points - points);
            this.pushChoice(user, choice, points);
 
            this.onChoiceMade.emit(null);
            
            this.persistUserAccounts();
            this.persistChoices();
        }
    }
    
    getUserAccount(name : string) : IAccount {
        for(let acc of this.userAccounts){
            if(name === acc.name){
                return acc;
            }
        }
        
        return {
            name : 'user acc not found',
            points : 0
        }
    }
    
     updateUserAccount(name : string, points : number) : void {
        for(let acc of this.userAccounts){
            if(name === acc.name){
                acc.points = points;
            }
        }
    }
    
    persistUserAccounts(){
        console.error('not implemented yet');
    }
    
    pushChoice(user : string, choice:string, points : number) : void{
        this.choices.push({
            name: name,
            choice : choice,
            points : points
        });
    }
    
    persistChoices(){
        console.error('not implemented yet');
    }
    
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
      
      this.initData();
    }
    
    public getChoiceEmitter() : EventEmitter<any>{
        return this.onChoiceMade;
    }
}