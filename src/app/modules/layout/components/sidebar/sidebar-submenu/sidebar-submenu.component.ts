import {Component, Input, OnInit} from '@angular/core';
import {MenuService} from "../../../services/menu.service";
import {SubMenuItem} from "../../../../../core/models/menu.model";

@Component({
  selector: 'app-sidebar-submenu',
  templateUrl: './sidebar-submenu.component.html',
  styleUrls: ['./sidebar-submenu.component.scss']
})
export class SidebarSubmenuComponent implements OnInit{

  @Input()
  submenu=<SubMenuItem>{}
  ngOnInit() {

  }
  constructor(public menuService:MenuService) {

  }
  toggleMenu(menu:any){
    this.menuService.toggleMenu(menu);
  }

  collapse(items:Array<any>){
    items.forEach((item)=>{
      item.expanded= false;
      if(item.children) this.collapse(item.children);
    })
  }
}
