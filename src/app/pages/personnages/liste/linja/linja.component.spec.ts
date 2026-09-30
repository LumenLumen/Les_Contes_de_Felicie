import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LinjaComponent } from './linja.component';

describe('LinjaComponent', () => {
  let component: LinjaComponent;
  let fixture: ComponentFixture<LinjaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinjaComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(LinjaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
