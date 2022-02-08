import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefContactInfoComponent } from './chef-contact-info.component';

describe('ChefContactInfoComponent', () => {
  let component: ChefContactInfoComponent;
  let fixture: ComponentFixture<ChefContactInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChefContactInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChefContactInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
