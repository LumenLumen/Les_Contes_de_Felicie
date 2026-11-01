import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MelianaComponent } from './meliana.component';

describe('MelianaComponent', () => {
  let component: MelianaComponent;
  let fixture: ComponentFixture<MelianaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MelianaComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(MelianaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
