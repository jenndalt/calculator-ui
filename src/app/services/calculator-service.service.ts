import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { CalculationModelInterface } from '../model/calculation-model.interface';

@Injectable({
  providedIn: 'root'
})
export class CalculatorServiceService {
  calculationUrl = "http://localhost:8080/calculate"

  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': '' });

  options = { headers: this.headers };


  constructor(private http: HttpClient) { }

  calculate(calculationModel: CalculationModelInterface): Observable<CalculationModelInterface> {
    return this.http.post<CalculationModelInterface>(this.calculationUrl, calculationModel, this.options)
      .pipe(
      );
  }

}
