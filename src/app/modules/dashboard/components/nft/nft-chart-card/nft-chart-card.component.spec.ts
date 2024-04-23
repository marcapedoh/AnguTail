import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NftChartCardComponent } from './nft-chart-card.component';

describe('NftChartCardComponent', () => {
  let component: NftChartCardComponent;
  let fixture: ComponentFixture<NftChartCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NftChartCardComponent]
    });
    fixture = TestBed.createComponent(NftChartCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
