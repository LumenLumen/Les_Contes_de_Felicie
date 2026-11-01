import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SileneComponent } from './silene.component';

describe('SileneComponent', () => {
  let component: SileneComponent;
  let fixture: ComponentFixture<SileneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SileneComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SileneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
