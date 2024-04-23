import {Component, OnInit} from '@angular/core';
import {MenuService} from "../../services/menu.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit{


  ngOnInit() {

  }
  constructor(public menuService:MenuService) {

  }
  appJson:any = {
    version: "0.0.0",
  };

  toggleSidebar(){
    this.menuService.toggleSidebar();
  }

}
