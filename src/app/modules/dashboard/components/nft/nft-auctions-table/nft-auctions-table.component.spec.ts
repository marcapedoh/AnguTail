import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NftAuctionsTableComponent } from './nft-auctions-table.component';

describe('NftAuctionsTableComponent', () => {
  let component: NftAuctionsTableComponent;
  let fixture: ComponentFixture<NftAuctionsTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NftAuctionsTableComponent]
    });
    fixture = TestBed.createComponent(NftAuctionsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
