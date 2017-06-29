import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarSidebarComponent } from './bar-sidebar.component';

describe('BarSidebarComponent', () => {
  let component: BarSidebarComponent;
  let fixture: ComponentFixture<BarSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
