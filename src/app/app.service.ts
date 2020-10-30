import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  // Push logs to any API, just declaration.
  constructor(private http: HttpClient) {
  }
  logger(message: string) {
    console.log(`${message}`);
  }
}
