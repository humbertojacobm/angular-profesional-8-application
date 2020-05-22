import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule,
         HttpTestingController
         } from '@angular/common/http/testing';
import { HttpClient
          } from '@angular/common/http';

import { ProductsService } from './products.service';

describe('ProductsService', () => {

  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let service: ProductsService;

  beforeEach(() => {
      TestBed.configureTestingModule({
          imports: [ HttpClientTestingModule]
       });
      httpClient = TestBed.get(HttpClient);
      httpTestingController = TestBed.get(HttpTestingController);
      service = TestBed.get(ProductsService);
   });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('tests for getAllProducts', () => {
    //arrange

    //act

    //assert
  })
});
