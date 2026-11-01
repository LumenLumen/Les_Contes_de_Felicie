import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SmalaComponent } from './smala.component';

describe('SmalaComponent', () => {
  let component: SmalaComponent;
  let fixture: ComponentFixture<SmalaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmalaComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SmalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
