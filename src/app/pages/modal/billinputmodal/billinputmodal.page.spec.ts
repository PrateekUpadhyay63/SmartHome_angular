import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillinputmodalPage } from './billinputmodal.page';

describe('BillinputmodalPage', () => {
  let component: BillinputmodalPage;
  let fixture: ComponentFixture<BillinputmodalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillinputmodalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillinputmodalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
