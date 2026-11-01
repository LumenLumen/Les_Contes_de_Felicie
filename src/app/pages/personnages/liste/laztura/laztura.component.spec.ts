import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LazturaComponent } from './laztura.component';

describe('LazturaComponent', () => {
  let component: LazturaComponent;
  let fixture: ComponentFixture<LazturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LazturaComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(LazturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
