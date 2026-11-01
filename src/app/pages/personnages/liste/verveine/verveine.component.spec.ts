import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VerveineComponent } from './verveine.component';

describe('VerveineComponent', () => {
  let component: VerveineComponent;
  let fixture: ComponentFixture<VerveineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerveineComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(VerveineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
