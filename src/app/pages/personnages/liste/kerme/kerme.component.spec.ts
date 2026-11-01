import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KermeComponent } from './kerme.component';

describe('KermeComponent', () => {
  let component: KermeComponent;
  let fixture: ComponentFixture<KermeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KermeComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(KermeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
