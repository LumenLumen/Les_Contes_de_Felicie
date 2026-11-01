import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PigneComponent } from './pigne.component';

describe('PigneComponent', () => {
  let component: PigneComponent;
  let fixture: ComponentFixture<PigneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PigneComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PigneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
