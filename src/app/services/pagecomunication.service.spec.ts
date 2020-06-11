import { TestBed } from '@angular/core/testing';

import { PagecomunicationService } from './pagecomunication.service';

describe('PagecomunicationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PagecomunicationService = TestBed.get(PagecomunicationService);
    expect(service).toBeTruthy();
  });
});
