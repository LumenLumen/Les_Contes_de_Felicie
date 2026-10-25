import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ThooComponent } from './thoo.component';

describe('ThooComponent', () => {
  let component: ThooComponent;
  let fixture: ComponentFixture<ThooComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThooComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ThooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
