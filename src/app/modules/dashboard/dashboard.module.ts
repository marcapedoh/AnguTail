import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { NftAuctionsTableItemComponent } from './components/nft/nft-auctions-table-item/nft-auctions-table-item.component';
import { NftAuctionsTableComponent } from './components/nft/nft-auctions-table/nft-auctions-table.component';
import { NftChartCardComponent } from './components/nft/nft-chart-card/nft-chart-card.component';
import { NftDualCardComponent } from './components/nft/nft-dual-card/nft-dual-card.component';
import { NftHeaderComponent } from './components/nft/nft-header/nft-header.component';
import { NftSingleCardComponent } from './components/nft/nft-single-card/nft-single-card.component';
import {AngularSvgIconModule} from "angular-svg-icon";
import { NftComponent } from './pages/nft/nft.component';
import { PodcastComponent } from './pages/podcast/podcast.component';
import {NgApexchartsModule} from "ng-apexcharts";
import { PodcastCardBannerComponent } from './components/podcast/podcast-card-banner/podcast-card-banner.component';
import { PodcastCardItemComponent } from './components/podcast/podcast-card-item/podcast-card-item.component';
import { PodcastHeaderComponent } from './components/podcast/podcast-header/podcast-header.component';
import { PodcastListComponent } from './components/podcast/podcast-list/podcast-list.component';
import { PodcastPlayerComponent } from './components/podcast/podcast-player/podcast-player.component';


@NgModule({
  declarations: [
    DashboardComponent,
    NftAuctionsTableItemComponent,
    NftAuctionsTableComponent,
    NftChartCardComponent,
    NftDualCardComponent,
    NftHeaderComponent,
    NftSingleCardComponent,
    NftComponent,
    PodcastComponent,
    PodcastCardBannerComponent,
    PodcastCardItemComponent,
    PodcastHeaderComponent,
    PodcastListComponent,
    PodcastPlayerComponent
  ],
    imports: [
        CommonModule,
        DashboardRoutingModule,
        AngularSvgIconModule,
        AngularSvgIconModule.forRoot(),
        NgApexchartsModule
    ]
})
export class DashboardModule { }
