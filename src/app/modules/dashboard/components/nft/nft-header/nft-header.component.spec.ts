import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NftHeaderComponent } from './nft-header.component';

describe('NftHeaderComponent', () => {
  let component: NftHeaderComponent;
  let fixture: ComponentFixture<NftHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NftHeaderComponent]
    });
    fixture = TestBed.createComponent(NftHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
