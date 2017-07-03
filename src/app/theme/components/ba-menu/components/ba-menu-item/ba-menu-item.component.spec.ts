import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaMenuItemComponent } from './ba-menu-item.component';

describe('BaMenuItemComponent', () => {
  let component: BaMenuItemComponent;
  let fixture: ComponentFixture<BaMenuItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaMenuItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaMenuItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
