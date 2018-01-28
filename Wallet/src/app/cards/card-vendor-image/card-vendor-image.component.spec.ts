import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardVendorImageComponent } from './card-vendor-image.component';

describe('CardVendorImageComponent', () => {
  let component: CardVendorImageComponent;
  let fixture: ComponentFixture<CardVendorImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardVendorImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardVendorImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
