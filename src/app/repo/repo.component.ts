import { Component, OnInit } from '@angular/core';
import { GitReposService } from '../git-repos.service';
import { Git } from '../git';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {

  repository: Git[]
  
  constructor( private repositoryService:GitReposService) { }
  reposearch(textsearch){
    this. repositoryService.repoRequest(textsearch).then(
      ()=>{
        this.repository=this.repositoryService.repository;

      },
      (error)=>{
        console.log(error)
      }
    )
  }
  ngOnInit(): void {
    this.repositoryService.repoRequest("")
    this.repository = this.repositoryService.repository
  }
}
