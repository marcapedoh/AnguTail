import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PodcastCardBannerComponent } from './podcast-card-banner.component';

describe('PodcastCardBannerComponent', () => {
  let component: PodcastCardBannerComponent;
  let fixture: ComponentFixture<PodcastCardBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PodcastCardBannerComponent]
    });
    fixture = TestBed.createComponent(PodcastCardBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
