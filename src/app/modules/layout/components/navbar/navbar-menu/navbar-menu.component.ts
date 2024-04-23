import {Component, Input, OnInit} from '@angular/core';
import {MenuService} from "../../../services/menu.service";
import {MenuItem, SubMenuItem} from "../../../../../core/models/menu.model";


@Component({
  selector: 'app-navbar-menu',
  templateUrl: './navbar-menu.component.html',
  styleUrls: ['./navbar-menu.component.scss'],

})
export class NavbarMenuComponent  implements OnInit{

  private showMenuClass = ['scale-100', 'animate-fade-in-up', 'opacity-100', 'pointer-events-auto'];
  private hideMenuClass = ['scale-95', 'animate-fade-out-down', 'opacity-0', 'pointer-events-none'];

  ngOnInit() {

  }


  constructor(public menuService:MenuService) {
  }

  toggleMenu(menu:MenuItem):void{
    menu.selected=!menu.selected
  }

  mouseEnter(event:any){
    let element = event.target.querySelector('app-navbar-submenu').children[0];
    if(element){
      this.hideMenuClass.forEach((c) => element.classList.remove(c));
      this.showMenuClass.forEach((c)=> element.classList.add(c));
    }
  }
  mouseLeave(event:any):void{
    let element = event.target.querySelector('app-navbar-submenu').children[0];
    if(element){
      this.showMenuClass.forEach((c) =>element.classList.remove(c));
      this.hideMenuClass.forEach((c) => element.classList.add(c));
    }
  }
}
