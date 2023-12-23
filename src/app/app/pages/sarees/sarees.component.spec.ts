import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SareesComponent } from './sarees.component';

describe('SareesComponent', () => {
  let component: SareesComponent;
  let fixture: ComponentFixture<SareesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SareesComponent]
    });
    fixture = TestBed.createComponent(SareesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
