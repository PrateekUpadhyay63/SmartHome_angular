import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddusermodalPage } from './addusermodal.page';

describe('AddusermodalPage', () => {
  let component: AddusermodalPage;
  let fixture: ComponentFixture<AddusermodalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddusermodalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddusermodalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
