import {Component, Input, OnInit} from '@angular/core';
import {Nft} from "../../../models/nft";

@Component({
  selector: 'app-nft-dual-card',
  templateUrl: './nft-dual-card.component.html',
  styleUrls: ['./nft-dual-card.component.scss']
})
export class NftDualCardComponent implements OnInit{
  @Input()
  nft: Nft = <Nft>{};

  constructor() {}

  ngOnInit(): void {}
}
