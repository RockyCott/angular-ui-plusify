import { TestBed } from '@angular/core/testing';

import { DatetimePickerService } from './datetime-picker.service';

describe('DatetimePickerService', () => {
  let service: DatetimePickerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatetimePickerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
