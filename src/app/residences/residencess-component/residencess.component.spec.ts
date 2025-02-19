import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidencessComponentComponent } from './residencess-component.component';

describe('ResidencessComponentComponent', () => {
  let component: ResidencessComponentComponent;
  let fixture: ComponentFixture<ResidencessComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResidencessComponentComponent]
    });
    fixture = TestBed.createComponent(ResidencessComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
