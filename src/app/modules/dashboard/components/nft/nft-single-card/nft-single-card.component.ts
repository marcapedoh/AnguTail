import {Component, Input, OnInit} from '@angular/core';
import {Nft} from "../../../models/nft";

@Component({
  selector: 'app-nft-single-card',
  templateUrl: './nft-single-card.component.html',
  styleUrls: ['./nft-single-card.component.scss']
})
export class NftSingleCardComponent implements OnInit{
  @Input() nft: Nft = <Nft>{};

  constructor() {}

  ngOnInit(): void {}
}
