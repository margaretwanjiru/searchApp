import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private username:string;
  private client_id ="b52bd0f9910c47a492db";
  private client_secret ="6e7fcfe2e9f980ad553d9b7b8246e862eb11b434";

  constructor(private http:HttpClient) { 
    console.log("The service is ready");
    this.username ="margaretwanjiru"
  }

  getProfileInfo(){
    return this.http
    .get("https://api.github.com/users/" + 
    this.username + 
    "?client_id="+ 
    this.client_id + 
    "&client_secret=" + 
    this.client_secret)
  }

  getProfileRepos(){
    return this.http
    .get("https://api.github.com/users/" + 
    this.username + 
    "/repos?client_id="+ 
    this.client_id + 
    "&client_secret=" + 
    this.client_secret)
  }

  updateProfile(username:string){
    this.username = username;
  }
}

