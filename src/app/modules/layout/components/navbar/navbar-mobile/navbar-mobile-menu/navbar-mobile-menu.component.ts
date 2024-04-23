import {Component, OnInit} from '@angular/core';
import {MenuService} from "../../../../services/menu.service";
import {SubMenuItem} from "../../../../../../core/models/menu.model";

@Component({
  selector: 'app-navbar-mobile-menu',
  templateUrl: './navbar-mobile-menu.component.html',
  styleUrls: ['./navbar-mobile-menu.component.scss']
})
export class NavbarMobileMenuComponent implements OnInit{

  ngOnInit() {

  }
  constructor(public  menuService:MenuService) {
  }

  public toggleMenu(subMenu: SubMenuItem){
    this.menuService.toggleMenu(subMenu)
  }
  closeMenu(){
    this.menuService.showMobileMenu=false;
  }
}
