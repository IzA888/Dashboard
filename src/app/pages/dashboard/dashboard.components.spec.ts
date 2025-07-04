import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashoardComponents } from './dashoard.components';

describe('DashoardComponents', () => {
  let component: DashoardComponents;
  let fixture: ComponentFixture<DashoardComponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashoardComponents]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashoardComponents);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
