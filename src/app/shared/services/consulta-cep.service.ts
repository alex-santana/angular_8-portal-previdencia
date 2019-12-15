import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsultaCepService {

  constructor(private httpClient:HttpClient) { }
  
   GetAddressByZipCode(zipcode: string)
  {
    zipcode = zipcode.replace(/\D/g, '');
    if(zipcode != ""){

      var validateZipCode = /^[0-9]{8}$/;
      if (validateZipCode.test(zipcode)) {
          return this.httpClient.get(`//viacep.com.br/ws/${zipcode}/json`);
        
      }
    }

    return of({});
  }
}
