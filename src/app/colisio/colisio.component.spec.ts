import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColisioComponent } from './colisio.component';

describe('ColisioComponent', () => {
  let component: ColisioComponent;
  let fixture: ComponentFixture<ColisioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColisioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColisioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
