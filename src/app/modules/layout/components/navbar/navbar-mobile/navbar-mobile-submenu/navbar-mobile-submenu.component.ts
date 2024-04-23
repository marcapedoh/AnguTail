import {Component, Input, OnInit} from '@angular/core';
import {MenuService} from "../../../../services/menu.service";
import {SubMenuItem} from "../../../../../../core/models/menu.model";

@Component({
  selector: 'app-navbar-mobile-submenu',
  templateUrl: './navbar-mobile-submenu.component.html',
  styleUrls: ['./navbar-mobile-submenu.component.scss']
})
export class NavbarMobileSubmenuComponent implements OnInit{

  @Input()
  public submenu= <SubMenuItem>{};
  ngOnInit() {

  }
  constructor(private menuService:MenuService) {
  }
  toggleMenu(menu:any){
    this.menuService.toggleSubMenu(menu)
  }

  collapse(items:Array<any>){
    items.forEach((item)=>{
      item.expanded= false;
      if(item.children) this.collapse(item.children)
    });
  }
  public closeMobileMenu(){
    this.menuService.showMobileMenu= false;
  }
}
