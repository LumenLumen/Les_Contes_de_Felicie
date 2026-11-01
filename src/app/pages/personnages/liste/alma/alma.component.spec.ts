import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlmaComponent } from './alma.component';

describe('AlmaComponent', () => {
  let component: AlmaComponent;
  let fixture: ComponentFixture<AlmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlmaComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AlmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
