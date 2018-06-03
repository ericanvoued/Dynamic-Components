import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DyncomponentComponent } from './dyncomponent.component';

describe('DyncomponentComponent', () => {
  let component: DyncomponentComponent;
  let fixture: ComponentFixture<DyncomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DyncomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DyncomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
