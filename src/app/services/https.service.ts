// http.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { config } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }
  // $interval(delay, [count], [invokeApply], [Pass]);
  
  getUsers(): Observable<any> {
    const headers = new HttpHeaders().append('Content-Type', 'application/json');

    return this.http.get(`http://${config.BCS_IP}:8123/api/states/pyscript.card_users`, { headers })
      .pipe(
        tap(_ => this.log('Users fetched')),
        catchError(this.handleError('getUsers', []))
      );
  }

  getCardLogs(): Observable<any> {
    const headers = new HttpHeaders().append('Content-Type', 'application/x-www-form-urlencoded');
    
    const formData: any = new FormData();
    formData.append('q', 'select * from \"home_assistant\".\"autogen\".\"card_log\" order by \"time\" ;');
    formData.append('db', 'home_assistant');
    
    return this.http.get(`http://${config.BCS_IP}:8086/query`, { headers })
        .pipe(
            tap(_ => this.log('Card logs fetched')),
            catchError(this.handleError('getCardLogs', []))
        )
  }

  addUser(body: Object = {}): Observable<any> {
    const headers = new HttpHeaders().append('Content-Type', 'application/json');

    return this.http.post(`http://${config.BCS_IP}:8123/api/services/pyscript/swipe_user`, { headers }, body)
        .pipe(
            tap(_ => this.log('User added')),
            catchError(this.handleError('addUser', []))
        )
  }

  removeUser(body: Object = {}): Observable<any> {
    const headers = new HttpHeaders().append('Content-Type', 'application/json');

    return this.http.post(`http://${config.BCS_IP}:8123/api/services/pyscript/swipe_user`, { headers }, body)
        .pipe(
            tap(_ => this.log('User removed')),
            catchError(this.handleError('removeUser', []))
        )
  }

  checkStatus(): Observable<any> {
      return this.http.get(`http://${config.BCS_IP}:8123/api/states/pyscript.status`)
        .pipe(
            tap(_ => this.log('Status found')),
            catchError(this.handleError('checkStatus', []))
        )
  }

  getBillProjection(body: Object = {}): Observable<any> {
      return this.http.post(`http://${config.BCS_IP}:8123/api/services/pyscript/bill_projection`, body)
        .pipe(
            tap(_ => this.log('Bill Projection ready')),
            catchError(this.handleError('getBillProjection', []))
        )
  }

  fakeCard(body: Object = {}): Observable<any> {
    return this.http.post(`http://${config.BCS_IP}:8123/api/services/pyscript/fake_card`, body)
      .pipe(
        tap(_ => this.log('Fake Card')),
        catchError(this.handleError('fakeCard', []))
      )
  }

  powerGenerated(): Observable<any> {
    return this.http.get(`http://${config.BCS_IP}:8123/api/states/sensor.power_ac_fronius_inverter_1_http_${config.FRONIUS_IP}`)
      .pipe(
        tap(_ => this.log('Power Genarated')),
        catchError(this.handleError('powerGenerated', []))
      )
  }

  powerUsed(): Observable<any> {
    return this.http.get(`http://${config.BCS_IP}:8123/api/states/sensor.power_load_fronius_power_flow_0_http_${config.FRONIUS_IP}`)
      .pipe(
        tap(_ => this.log('Power Used')),
        catchError(this.handleError('powerUsed', []))
      )
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    console.log(message);
  }
}
