import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MielleComponent } from './mielle.component';

describe('MielleComponent', () => {
  let component: MielleComponent;
  let fixture: ComponentFixture<MielleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MielleComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(MielleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
