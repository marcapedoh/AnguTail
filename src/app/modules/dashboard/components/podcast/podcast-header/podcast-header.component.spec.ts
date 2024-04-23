import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PodcastHeaderComponent } from './podcast-header.component';

describe('PodcastHeaderComponent', () => {
  let component: PodcastHeaderComponent;
  let fixture: ComponentFixture<PodcastHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PodcastHeaderComponent]
    });
    fixture = TestBed.createComponent(PodcastHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
