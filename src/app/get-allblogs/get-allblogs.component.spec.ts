import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllblogsComponent } from './get-allblogs.component';

describe('GetAllblogsComponent', () => {
  let component: GetAllblogsComponent;
  let fixture: ComponentFixture<GetAllblogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAllblogsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAllblogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
