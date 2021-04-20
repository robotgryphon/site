import { TestBed } from '@angular/core/testing';

import { CfWidgetService } from './cfwidget.service';

describe('CfwidgetService', () => {
  let service: CfWidgetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CfWidgetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
