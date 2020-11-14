import { Component, OnInit } from '@angular/core';
import { Github } from '../github';
import { GitReposService } from '../git-repos.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user:Github;
  constructor(private userService:GitReposService ) { }
  usersearch(textsearch){
    this.userService.userRequest(textsearch).then(
      ()=>{
        this.user=this.userService.user;
      },
      (error)=>{
        console.log(error)
      }
    )
  }
  ngOnInit(): void {
    this.userService.userRequest("mugisha-thierry")
    this.user = this.userService.user
  }
}
