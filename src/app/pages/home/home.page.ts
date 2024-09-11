import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  login:any;
  constructor(public router:Router,private activedRoute: ActivatedRoute) {
    this.activedRoute.queryParams.subscribe(params =>{
      if(this.router.getCurrentNavigation()?.extras?.state){
        this.login=this.router.getCurrentNavigation()?.extras?.state?.['login'];
        
      }
    })
  }

}
