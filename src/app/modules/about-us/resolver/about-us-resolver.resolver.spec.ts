import { TestBed } from '@angular/core/testing';

import { AboutUsResolverResolver } from './about-us-resolver.resolver';

describe('AboutUsResolverResolver', () => {
  let resolver: AboutUsResolverResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(AboutUsResolverResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
