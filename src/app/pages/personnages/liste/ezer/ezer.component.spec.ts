import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EzerComponent } from './ezer.component';

describe('EzerComponent', () => {
  let component: EzerComponent;
  let fixture: ComponentFixture<EzerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EzerComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(EzerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
