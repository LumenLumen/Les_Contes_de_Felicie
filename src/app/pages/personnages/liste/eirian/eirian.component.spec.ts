import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EirianComponent } from './eirian.component';

describe('EirianComponent', () => {
  let component: EirianComponent;
  let fixture: ComponentFixture<EirianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EirianComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(EirianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
