import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-permissions',
  templateUrl: './permissions.component.html',
  styleUrls: ['./permissions.component.scss'],
})
export class PermissionsComponent {

  constructor(
    private readonly router: Router,
  ) { }

  back(){
    this.router.navigate(['home'])
  }

  allow(){
    console.log('examining');
    this.router.navigate(['examiner']);
    console.log('examining');
  }

}
