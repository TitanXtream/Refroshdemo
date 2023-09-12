import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputedTagComponent } from './inputed-tag.component';

describe('InputedTagComponent', () => {
  let component: InputedTagComponent;
  let fixture: ComponentFixture<InputedTagComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputedTagComponent]
    });
    fixture = TestBed.createComponent(InputedTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
