import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAndDeletePageComponent } from './update-and-delete-page.component';

describe('UpdateAndDeletePageComponent', () => {
  let component: UpdateAndDeletePageComponent;
  let fixture: ComponentFixture<UpdateAndDeletePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateAndDeletePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAndDeletePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
