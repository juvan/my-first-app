/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { UsersService } from './users.service';

describe('Users Service', () => {
  beforeEachProviders(() => [UsersService]);

  it('should ...',
      inject([UsersService], (service: UsersService) => {
    expect(service).toBeTruthy();
  }));
});
