import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NftSingleCardComponent } from './nft-single-card.component';

describe('NftSingleCardComponent', () => {
  let component: NftSingleCardComponent;
  let fixture: ComponentFixture<NftSingleCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NftSingleCardComponent]
    });
    fixture = TestBed.createComponent(NftSingleCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
