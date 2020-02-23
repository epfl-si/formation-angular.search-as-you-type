import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

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

  it('searches', function() {
    const input = fixture.debugElement.query(By.css('input'));
    input.nativeElement.value = "toto";
    spyOn(component, 'search');
    input.triggerEventHandler('keyup', {});
    expect(component.search).toHaveBeenCalledWith('toto');
  });

  it('shows results');
});
