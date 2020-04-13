import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import {environment } from '../../environments/environment';
import { User } from './user'
import { map } from 'rxjs/operators'
import { Repository } from './repository'


@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  // getUser: User;
  // getRepos: Repository;
  // APIkey='312067413d60becaa4805cdb584ffaa9c9e5c8b0';

  // constructor( private http:HttpClient){
  //   this.getUser=new User("");
  //   this.getRepos=new Repository("","",new Date) 
  // }

  // getUserProfile(userInput:string){
  //   interface Response{

  //   }

  
  // return new Promise((resolve,reject)=>{
  //   this.http.get<Response>('https://api.github.com/users/'+userInput+'?access_token='+this.APIkey).toPromise().then(result)=>{
  //     this.getUser=result;
  //     console.log(this.getUser);
  //     resolve();
  //   }
  //   error=>
  //   console.log('error')
  // }
  // }
  userInput
  getRepo: Repository;

  inputUser=  User;
  private clientid = '0bf37f34931816cdf483';
  private clientsecret='2efff79fe9624fe6cc5b6bc25b4ce8938f5e7fe0'
  

  constructor(private http:HttpClient){
    console.log('Does this service work?')
    this.userInput;
    this.getRepo=new Repository("","",new Date)
  }

  getUserInfo(){
    return this.http.get('https://api.github.com/users/'+this.userInput + "?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
    // .pipe(map(res => res ));
  }
  getProfileRepos(){
  	return this.http.get("https://api.github.com/users/" + this.userInput + "/repos?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
  	// .map(res => res.json());
  }

  updateProfile(userInput:string){
    this.userInput = userInput;
  }

 
 
}
