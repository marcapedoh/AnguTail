import {Component, OnInit} from '@angular/core';
import {MenuService} from "../../../services/menu.service";
import {SubMenuItem} from "../../../../../core/models/menu.model";

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.scss']
})
export class SidebarMenuComponent implements OnInit{

  ngOnInit() {

  }
  constructor(public  menuService:MenuService) {

  }
  toggleMenu(subMenu:SubMenuItem){
    this.menuService.toggleMenu(subMenu);
  }
}
