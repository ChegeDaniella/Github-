import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import {environment } from '../../environments/environment';
import { User } from './user'
import { map } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  userInput

  inputUser=  User;
  private clientid = '0bf37f34931816cdf483';
  private clientsecret='2efff79fe9624fe6cc5b6bc25b4ce8938f5e7fe0'
  

  constructor(private http:HttpClient){
    console.log('Does this service work?')
    this.userInput;
  }

  getUserInfo(){
    return this.http.get('https://api.github.com/users/'+this.userInput + "?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
    // .pipe(map(res => res ));
  }

  updateProfile(userInput:string){
    this.userInput = userInput;
  }

 
 
}
