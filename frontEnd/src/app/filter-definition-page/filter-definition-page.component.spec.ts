import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterDefinitionPageComponent } from './filter-definition-page.component';

describe('FilterDefinitionPageComponent', () => {
  let component: FilterDefinitionPageComponent;
  let fixture: ComponentFixture<FilterDefinitionPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterDefinitionPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterDefinitionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
