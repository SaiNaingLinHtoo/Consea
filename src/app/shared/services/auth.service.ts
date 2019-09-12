import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authenticUsers = [
    {username: 'john', password: 'Abc123!'},
    {username: 'mary', password: 'Abc123!'},
    {username: 'emerald', password: 'Abc123!'}
  ]
  
  constructor() { }

  isAuthenticate(username: String, password: String) {
    for (var item in this.authenticUsers){
      if(this.authenticUsers[item].username == username && 
        this.authenticUsers[item].password == password){
        return true;
      }
    }
  }

}