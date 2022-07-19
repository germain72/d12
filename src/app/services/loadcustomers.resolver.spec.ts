import { TestBed } from '@angular/core/testing';

import { LoadcustomersResolver } from './loadcustomers.resolver';

describe('LoadcustomersResolver', () => {
  let resolver: LoadcustomersResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(LoadcustomersResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
