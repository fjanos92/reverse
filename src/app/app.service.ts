import {Injectable} from "@angular/core";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from '../environments/environment';

@Injectable()
export class AppService {
  private configUrl =  '/centralunit/api/greeting?name=User';
  constructor(private http: HttpClient) { }

  getHello(): Observable<HttpResponse<any>> {
    return this.http.get<any>(
      this.configUrl, { observe: 'response' });
  }
}
