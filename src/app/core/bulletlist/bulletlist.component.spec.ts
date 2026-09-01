import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BulletlistComponent } from './bulletlist.component';

describe('BulletlistComponent', () => {
  let component: BulletlistComponent;
  let fixture: ComponentFixture<BulletlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BulletlistComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(BulletlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
