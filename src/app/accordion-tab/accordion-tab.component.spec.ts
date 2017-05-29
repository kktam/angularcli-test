/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AccordionTabComponent } from './accordion-tab.component';

describe('AccordionTabComponent', () => {
  let component: AccordionTabComponent;
  let fixture: ComponentFixture<AccordionTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccordionTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
