import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SiminiComponent } from './simini.component';

describe('SiminiComponent', () => {
  let component: SiminiComponent;
  let fixture: ComponentFixture<SiminiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SiminiComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SiminiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
