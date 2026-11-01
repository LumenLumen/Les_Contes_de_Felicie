import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MalusComponent } from './malus.component';

describe('MalusComponent', () => {
  let component: MalusComponent;
  let fixture: ComponentFixture<MalusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MalusComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(MalusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
