import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { BottomNavbarComponent } from './components/bottom-navbar/bottom-navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import {AngularSvgIconModule} from "angular-svg-icon";
import { NavbarMenuComponent } from './components/navbar/navbar-menu/navbar-menu.component';
import { NavbarMobileComponent } from './components/navbar/navbar-mobile/navbar-mobile.component';
import { NavbarSubmenuComponent } from './components/navbar/navbar-submenu/navbar-submenu.component';
import { ProfileMenuComponent } from './components/navbar/profile-menu/profile-menu.component';
import { SidebarMenuComponent } from './components/sidebar/sidebar-menu/sidebar-menu.component';
import { SidebarSubmenuComponent } from './components/sidebar/sidebar-submenu/sidebar-submenu.component';
import { NavbarMobileMenuComponent } from './components/navbar/navbar-mobile/navbar-mobile-menu/navbar-mobile-menu.component';
import { NavbarMobileSubmenuComponent } from './components/navbar/navbar-mobile/navbar-mobile-submenu/navbar-mobile-submenu.component';
import {HttpClientModule} from "@angular/common/http";
import {ClickOutsideDirective} from "../../shared/directives/click-outside.directive";


@NgModule({
  declarations: [
    LayoutComponent,
    BottomNavbarComponent,
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    NavbarMenuComponent,
    NavbarMobileComponent,
    NavbarSubmenuComponent,
    ProfileMenuComponent,
    SidebarMenuComponent,
    SidebarSubmenuComponent,
    NavbarMobileMenuComponent,
    NavbarMobileSubmenuComponent,
    ClickOutsideDirective
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    AngularSvgIconModule,
    AngularSvgIconModule.forRoot(),
    HttpClientModule,

  ],
  exports:[
    NavbarSubmenuComponent,
    ClickOutsideDirective
  ]
})
export class LayoutModule { }
