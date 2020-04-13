import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { Repository } from '../repository'


@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {
  repos: any;
  newRepo= new Repository("","", new Date());

  constructor(private profileService: ProfileService) {

  }
  showRepos(){
    this.profileService.getProfileRepos().subscribe(repos => {
      console.log(repos);
      this.repos = repos;
    })
   }

  ngOnInit(): void {
  }

}
