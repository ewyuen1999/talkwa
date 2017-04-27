/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AboutZHComponent } from './about-zh.component';

describe('AboutZHComponent', () => {
  let component: AboutZHComponent;
  let fixture: ComponentFixture<AboutZHComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutZHComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutZHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
