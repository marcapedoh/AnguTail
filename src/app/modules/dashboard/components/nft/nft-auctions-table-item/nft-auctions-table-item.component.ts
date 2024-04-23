import {Component, Input, OnInit} from '@angular/core';
import {Nft} from "../../../models/nft";

@Component({
  selector: 'app-nft-auctions-table-item',
  templateUrl: './nft-auctions-table-item.component.html',
  styleUrls: ['./nft-auctions-table-item.component.scss']
})
export class NftAuctionsTableItemComponent implements OnInit{

  @Input()
  auction= <Nft>{};
  ngOnInit() {

  }
  constructor() {
  }
}
