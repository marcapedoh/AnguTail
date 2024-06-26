import {Component, OnInit} from '@angular/core';
import {MenuService} from "../../services/menu.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{
  ngOnInit() {
  }

  constructor(private menuService:MenuService) {
  }

  toggleMobileMenu(){
    this.menuService.showMobileMenu=true;
  }
}
