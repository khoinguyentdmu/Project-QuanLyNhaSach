import { Component, OnInit } from '@angular/core';
import { UtilApiService } from '../../service/util-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-crud',
  templateUrl: './admin-crud.component.html',
  styleUrls: ['./admin-crud.component.css']
})
export class AdminCrudComponent implements OnInit {

  constructor(private utilApiService: UtilApiService,
    private router: Router) { }


  ngOnInit() {
    this.checkTheLoginStatus();
  }

  checkTheLoginStatus(): void {
    this.utilApiService.checkTheLoginStatusFromLocalStorage('Token-Authorization').subscribe(res => {
    }, (res) => {
      this.router.navigateByUrl('login');
    });
  }

}
