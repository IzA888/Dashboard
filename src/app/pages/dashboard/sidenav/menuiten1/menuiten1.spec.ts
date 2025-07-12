import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Menuiten1 } from './menuiten1';

describe('Menuiten1', () => {
  let component: Menuiten1;
  let fixture: ComponentFixture<Menuiten1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Menuiten1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Menuiten1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
