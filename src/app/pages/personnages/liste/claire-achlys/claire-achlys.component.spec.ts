import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClaireAchlysComponent } from './claire-achlys.component';

describe('ClaireAchlysComponent', () => {
  let component: ClaireAchlysComponent;
  let fixture: ComponentFixture<ClaireAchlysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClaireAchlysComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ClaireAchlysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
