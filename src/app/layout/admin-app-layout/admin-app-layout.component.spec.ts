import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAppLayoutComponent } from './admin-app-layout.component';

describe('AdminAppLayoutComponent', () => {
  let component: AdminAppLayoutComponent;
  let fixture: ComponentFixture<AdminAppLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminAppLayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminAppLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
