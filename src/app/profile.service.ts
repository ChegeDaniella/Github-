import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import {environment } from '../../environments/environment';
import { User } from './user'
import { map } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class ProfileService {

   User;
  apiKey='312067413d60becaa4805cdb584ffaa9c9e5c8b0'

  constructor(private http:HttpClient) { 
  	console.log("service is now ready!");
  	this. User;
  }
  apiUrl='https://api.github.com/users/'
   full=this.apiUrl+this. User+this.apiKey

   getProfileInfo(){
  	return this.http.get("https://api.github.com/users/" + this.User + "?access_token=" + this.apiKey)
  	.pipe(map(res => res.json()));
  }


  




 
}
