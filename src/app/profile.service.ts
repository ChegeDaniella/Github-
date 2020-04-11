import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import {environment } from '../../environments/environment';
import { User } from './user'


@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  inputUser= new User;
  apiKey='312067413d60becaa4805cdb584ffaa9c9e5c8b0'

  constructor(private http:HttpClient) {
    this.inputUser= new User();
   }
  apiUrl='https://api.github.com/users/'
   full=this.apiUrl+this.inputUser+this.apiKey

 




 
}
