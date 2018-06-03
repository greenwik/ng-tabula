import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class ChartDataService {
  //public _extHeaders = new HttpHeaders({'Content-Type':'application/json'});
  //private _headers = {headers: new HttpHeaders().set('Content-Type', 'application/json')};
  //const httpOptions = {
    //headers: new HttpHeaders({ 'Content-Type': 'application/json','access-control-allow-origin':'*' })
  //};

  constructor(private http:HttpClient) { }

  getChartData(url:string): Observable<any> {
    return this.http.get(url);
      // .map((data:any) => {
      //   debugger
      //   return  data;
      // })
      //catchError(this.handleError('getChartData', []))
  //  );
    // .map((res:Response) => res.json());
  }

  private handleError<T> (operation = 'operation', result?: T) {
 return (error: any): Observable<T> => {

   // TODO: send the error to remote logging infrastructure
   console.error(error); // log to console instead

   // TODO: better job of transforming error for user consumption
   console.log(`${operation} failed: ${error.message}`);

   // Let the app keep running by returning an empty result.
   return of(result as T);
 };
}

}
