import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ZiriComponent } from './ziri.component';

describe('ZiriComponent', () => {
  let component: ZiriComponent;
  let fixture: ComponentFixture<ZiriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZiriComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ZiriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
