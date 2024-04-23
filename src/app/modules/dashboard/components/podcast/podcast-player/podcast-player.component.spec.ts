import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PodcastPlayerComponent } from './podcast-player.component';

describe('PodcastPlayerComponent', () => {
  let component: PodcastPlayerComponent;
  let fixture: ComponentFixture<PodcastPlayerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PodcastPlayerComponent]
    });
    fixture = TestBed.createComponent(PodcastPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
