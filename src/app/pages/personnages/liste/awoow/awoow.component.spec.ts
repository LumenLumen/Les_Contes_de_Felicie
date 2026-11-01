import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AwoowComponent } from './awoow.component';

describe('AwoowComponent', () => {
  let component: AwoowComponent;
  let fixture: ComponentFixture<AwoowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AwoowComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AwoowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
