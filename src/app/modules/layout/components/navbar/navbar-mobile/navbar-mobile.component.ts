import {Component, OnInit} from '@angular/core';
import {MenuService} from "../../../services/menu.service";

@Component({
  selector: 'app-navbar-mobile',
  templateUrl: './navbar-mobile.component.html',
  styleUrls: ['./navbar-mobile.component.scss']
})
export class NavbarMobileComponent implements OnInit{
  ngOnInit() {

  }
  constructor(public menuService:MenuService) {
  }
  toggleMobileMenu():void{
    this.menuService.showMobileMenu= false;
  }
}
