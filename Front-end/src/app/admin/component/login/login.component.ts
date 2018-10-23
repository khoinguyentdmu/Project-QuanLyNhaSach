import { Component, OnInit } from '@angular/core';
import { UtilApiService } from '../../service/util-api.service';
import { LoginModel } from '../../model/login-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  admin: LoginModel = new LoginModel('', '');

  constructor(private utilApiService: UtilApiService,
    private router: Router) { }

  ngOnInit() {
    this.checkTheLoginStatus();
  }

  checkTheLoginStatus(): void {
    this.utilApiService.checkTheLoginStatusFromLocalStorage('Token-Authorization').subscribe(res => {
      this.router.navigateByUrl('admin');
    });
  }

  login(): void {
    if (this.admin.username.length > 0 && this.admin.password.length > 0) {
      this.utilApiService.login(this.admin).subscribe(res => {
        localStorage.setItem('Token-Authorization', res.token);
        this.router.navigateByUrl('admin');
      }, (err) => {
        alert('Thông tin đăng nhập không hợp lệ');
        console.log(err);
      })
    } else {
      alert('Nhập tài khoản và mật khẩu');
    }
  }
}
