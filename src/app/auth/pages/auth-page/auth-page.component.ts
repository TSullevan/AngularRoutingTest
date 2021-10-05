import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../models/user.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.css']
})
export class AuthPageComponent implements OnInit {

  public user: UserModel = new UserModel();

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  public doAuth(): void {
    this.authService.doAuth(this.user);
  }

}
