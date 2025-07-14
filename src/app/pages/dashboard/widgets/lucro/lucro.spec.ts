import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lucro } from './lucro';

describe('Lucro', () => {
  let component: Lucro;
  let fixture: ComponentFixture<Lucro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lucro]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lucro);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
