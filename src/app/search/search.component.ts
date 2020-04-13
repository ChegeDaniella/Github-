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
  inputUser=User;
  userInput:string
 
  profile: any;
  

  constructor(private profileService: ProfileService) {
  
  }
  getUserProfile(){
    this.profileService.updateProfile(this.userInput);
    this.profileService.getUserInfo().subscribe(profile => {
      console.log(profile);
      this.profile = profile;
    })
  }

  ngOnInit(): void {
    
  }



 



  

}
