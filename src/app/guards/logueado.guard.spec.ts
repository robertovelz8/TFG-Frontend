import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { logueadoGuardGuard } from './logueado.guard';

describe('logueadoGuardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => logueadoGuardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
