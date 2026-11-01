import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgatheComponent } from './agathe.component';

describe('AgatheComponent', () => {
  let component: AgatheComponent;
  let fixture: ComponentFixture<AgatheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgatheComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AgatheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
