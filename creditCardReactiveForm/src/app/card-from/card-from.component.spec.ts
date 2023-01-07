import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFromComponent } from './card-from.component';

describe('CardFromComponent', () => {
  let component: CardFromComponent;
  let fixture: ComponentFixture<CardFromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardFromComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
