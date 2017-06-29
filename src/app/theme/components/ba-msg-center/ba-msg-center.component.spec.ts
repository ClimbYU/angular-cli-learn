import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaMsgCenterComponent } from './ba-msg-center.component';

describe('BaMsgCenterComponent', () => {
  let component: BaMsgCenterComponent;
  let fixture: ComponentFixture<BaMsgCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaMsgCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaMsgCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
