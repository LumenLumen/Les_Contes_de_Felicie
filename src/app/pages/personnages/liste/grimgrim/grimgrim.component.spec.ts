import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GrimgrimComponent } from './grimgrim.component';

describe('GrimgrimComponent', () => {
  let component: GrimgrimComponent;
  let fixture: ComponentFixture<GrimgrimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GrimgrimComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(GrimgrimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
