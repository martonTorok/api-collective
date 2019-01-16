import { TestBed } from '@angular/core/testing';

import { PicflowService } from './picflow.service';

describe('PicflowService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PicflowService = TestBed.get(PicflowService);
    expect(service).toBeTruthy();
  });
});
