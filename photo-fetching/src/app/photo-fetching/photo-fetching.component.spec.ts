import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoFetchingComponent } from './photo-fetching.component';

describe('PhotoFetchingComponent', () => {
  let component: PhotoFetchingComponent;
  let fixture: ComponentFixture<PhotoFetchingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoFetchingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotoFetchingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
