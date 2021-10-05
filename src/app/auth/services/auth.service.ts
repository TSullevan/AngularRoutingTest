import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authenticatedUser: boolean = false;

  constructor(private router: Router) { }

  public getAuthenticatedUser() {
    return this.authenticatedUser;
  }

  public doAuth(user: UserModel): void {
    this.authenticatedUser = user.name == 'enzo' && user.password == '123';
    if(this.authenticatedUser) {
      this.router.navigate(['/']);
    }
    else {
      alert('Usuário ou Senha inválidos.');
    }
  }
}
