import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{ Git} from './git';
import { Github } from './github';
import {environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GitReposService {

  user:Github;
  // repo:Git;
  repository:Git[]
  constructor(private http:HttpClient) {

    this.user=new Github ("","","",0,0,0,new Date)
    // this.repo= new Git(0,"","","")
    this.repository=[]
   }
   userRequest(textsearch:string){
    interface ApiResponse{
      avatar_url:string;
      name:string;
      login:string;
      public_repos:number
      followers:number;
      following:number;
      created_at:Date
    }
    let promise = new Promise((resolve,reject)=>{
      this.http.get<ApiResponse>('https://api.github.com/users/'+textsearch+'?access_token='+environment.apiKey).toPromise().then(response=>{
        this.user.avatar_url = response.avatar_url
        this.user.name =response.name
        this.user.login=response.login
        this.user. public_repos = response. public_repos
        this.user.followers=response.followers
        this.user.following=response.following
        this.user.created_at=response.created_at
        resolve()
      },
      error=>{
      this.user.avatar_url ="there was an error"
       this.user.followers=34
      reject(error);
      })
    })
    return promise
  }
  repoRequest(textsearch:string){
    interface ApiResponse{
      id:number;
      name:string;
       html_url: string;
      description:string;
  }
  let promise = new Promise((resolve,reject)=>{
    this.http.get<ApiResponse[]>('https://api.github.com/users/'+textsearch+'/repos?access_token='+environment.apiKey).toPromise().then(response=>{
      console.log(response[0].id)
     for(let item of response){
       let a=new Git(item.id,item.name,item.html_url,item.description)
       this.repository.push(a)
     }
    // this.repository.id = response.id
    //   this.repository.name = response. name
    //  this.repository.html_url=response.html_url
    //   this.repository.description=response.description

      resolve()
    },
    error=>{
      console.log(error);
      
    })
  })
  return promise
}

}
