import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {SubMenuItem} from "../../../../../core/models/menu.model";

@Component({
  selector: 'app-navbar-submenu',
  templateUrl: './navbar-submenu.component.html',
  styleUrls: ['./navbar-submenu.component.scss']
})
export class NavbarSubmenuComponent implements OnInit, AfterViewInit{

  @Input()
  public submenu= <SubMenuItem[]>{};
  @ViewChild('submenuRef') submenuRef:ElementRef<HTMLDivElement> | undefined
  ngOnInit() {

  }
  constructor() {
  }

  ngAfterViewInit(){
    if(this.submenuRef){
      const submenu= this.submenuRef.nativeElement.getBoundingClientRect();
      const bounding = document.body.getBoundingClientRect();

      if(submenu.right > bounding.right){
        const childrenElement = this.submenuRef.nativeElement.parentNode as HTMLElement;
        if(childrenElement){
          childrenElement.style.left= '-100%'
        }
      }
    }
  }
}
