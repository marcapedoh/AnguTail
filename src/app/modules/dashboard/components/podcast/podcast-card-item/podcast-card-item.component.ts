import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-podcast-card-item',
  templateUrl: './podcast-card-item.component.html',
  styleUrls: ['./podcast-card-item.component.scss']
})
export class PodcastCardItemComponent {

  @Input()
  title:string='';
  @Input()
  substitle:string='';
  @Input()
  image:string='';
}
