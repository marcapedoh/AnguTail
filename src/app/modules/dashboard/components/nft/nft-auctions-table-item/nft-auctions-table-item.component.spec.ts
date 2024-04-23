import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NftAuctionsTableItemComponent } from './nft-auctions-table-item.component';

describe('NftAuctionsTableItemComponent', () => {
  let component: NftAuctionsTableItemComponent;
  let fixture: ComponentFixture<NftAuctionsTableItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NftAuctionsTableItemComponent]
    });
    fixture = TestBed.createComponent(NftAuctionsTableItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
