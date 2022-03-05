import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconoApComponent } from './icono-ap.component';

describe('IconoApComponent', () => {
  let component: IconoApComponent;
  let fixture: ComponentFixture<IconoApComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconoApComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconoApComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
