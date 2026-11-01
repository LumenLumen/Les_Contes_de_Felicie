import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AzkenComponent } from './azken.component';

describe('AzkenComponent', () => {
  let component: AzkenComponent;
  let fixture: ComponentFixture<AzkenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AzkenComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AzkenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
