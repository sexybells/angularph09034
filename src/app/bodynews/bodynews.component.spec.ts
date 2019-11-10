import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodynewsComponent } from './bodynews.component';

describe('BodynewsComponent', () => {
  let component: BodynewsComponent;
  let fixture: ComponentFixture<BodynewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodynewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodynewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
