import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgUiComponent } from './svg-ui.component';

describe('SvgUiComponent', () => {
  let component: SvgUiComponent;
  let fixture: ComponentFixture<SvgUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SvgUiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SvgUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
