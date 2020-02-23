import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchAsYouTypeComponent } from './search-as-you-type.component';

describe('SearchAsYouTypeComponent', () => {
  let component: SearchAsYouTypeComponent;
  let fixture: ComponentFixture<SearchAsYouTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchAsYouTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchAsYouTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
