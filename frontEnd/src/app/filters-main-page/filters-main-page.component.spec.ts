import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltersMainPageComponent } from './filters-main-page.component';

describe('FiltersMainPageComponent', () => {
  let component: FiltersMainPageComponent;
  let fixture: ComponentFixture<FiltersMainPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltersMainPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltersMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
