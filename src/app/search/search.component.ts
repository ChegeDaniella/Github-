import { Component, OnInit } from '@angular/core';
import { User } from '../user'
import { HttpClient } from '@angular/common/http';
import { ProfileService } from '../profile.service';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  inputUser= new User();
  profile:any[];

  constructor(private profileService: ProfileService) {

  }
  ngOnInit(): void {
    
  }

  findProfile(){

  	this.profileService.getProfileInfo().subscribe(profile => {
  		console.log(profile);
  		this.profile = profile;
  });

 



  

}}
