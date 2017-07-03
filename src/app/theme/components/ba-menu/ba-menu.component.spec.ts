import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaMenuComponent } from './ba-menu.component';

describe('BaMenuComponent', () => {
  let component: BaMenuComponent;
  let fixture: ComponentFixture<BaMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
