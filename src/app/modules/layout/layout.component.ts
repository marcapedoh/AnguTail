import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router, Event} from "@angular/router";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit{

  mainContent:HTMLElement | null =null;
  ngOnInit() {
    this.mainContent= document.getElementById('main-content');
  }
  constructor(private route:Router) {
    this.route.events.subscribe((event:Event) =>{
      if(event instanceof NavigationEnd){
        if(this.mainContent){
          this.mainContent!.scrollTop=0;
        }
      }
    });
  }

}
