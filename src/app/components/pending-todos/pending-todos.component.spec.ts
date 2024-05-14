import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingTodosComponent } from './pending-todos.component';

describe('PendingTodosComponent', () => {
  let component: PendingTodosComponent;
  let fixture: ComponentFixture<PendingTodosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PendingTodosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PendingTodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
