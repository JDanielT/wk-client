import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {API_URL} from '../app.api';

@Injectable({
  providedIn: 'root'
})
export class DoadorService {

  protected readonly API = API_URL;

  constructor(protected http: HttpClient) {
  }

  private context(): string {
    return 'doadores';
  }

  upload(json: string): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<any>(`${this.API}/${this.context()}/upload`, json, {headers});
  }

  porEstado(): Observable<any> {
    return this.http.get<any>(`${this.API}/${this.context()}/por-estado`);
  }

  porFaixaEtaria(): Observable<any> {
    return this.http.get<any>(`${this.API}/${this.context()}/por-faixa-etaria`);
  }

  percentualObesos(sexo: string): Observable<number> {
    return this.http.get<number>(`${this.API}/${this.context()}/obesos/${sexo}`);
  }

  porTipoSanguineo(): Observable<any> {
    return this.http.get<any>(`${this.API}/${this.context()}/por-tipo-sanguineo`);
  }

  porPossivelDoador(): Observable<any> {
    return this.http.get<any>(`${this.API}/${this.context()}/por-possivel-doador`);
  }

}
