import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private username:string;
  private client_id ="c020cc3ac574f8f1f0b2";
  private client_secret ="6dd46f1e925d4f759575e14859da48dce494d14c";

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

