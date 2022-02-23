import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { User } from '../shared/user.interface';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {

  user$: Observable<User> = this.authSvc.afAuth.user;
  constructor(private authSvc: AuthService, private http: HttpClient) { 

      http.get('http://localhost/api/products').subscribe(console.log);
  }

  ngOnInit() {
  }

}
