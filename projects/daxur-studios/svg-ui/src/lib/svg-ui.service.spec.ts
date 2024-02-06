import { TestBed } from '@angular/core/testing';

import { SvgUiService } from './svg-ui.service';

describe('SvgUiService', () => {
  let service: SvgUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SvgUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
