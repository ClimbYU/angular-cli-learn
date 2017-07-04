import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaContentTopComponent } from './ba-content-top.component';

describe('BaContentTopComponent', () => {
  let component: BaContentTopComponent;
  let fixture: ComponentFixture<BaContentTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaContentTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaContentTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
