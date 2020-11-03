import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Kisi } from '../models/kisi.model';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class KisilerService {

  private readonly url: string;

  constructor(private http: HttpClient) {

    this.url = environment.baseApiUrl;
  }


  GetAll(): Observable<Kisi[]> {
    return this.http.get<any>(this.url + "/Kisi/Kisiler")
      .pipe(map(response => {
        return response;
      }));
  }

  GetById(id: string): Observable<Kisi> {
    return this.http.get<any>(this.url + "/Kisi/Kisiler/" + id)
      .pipe(map(response => {
        return response;
      }));
  }

  Create(mdl: Kisi): Observable<Kisi> {
    return this.http
      .post<any>(this.url + "/Kisi/Kisiler/", mdl)
      .pipe(
        map(kategori => {
          if (kategori) {
            console.log(kategori);
          }
          return kategori;
        })
      );
  }

  Update(id: string, mdl: Kisi): Observable<Kisi> {
    return this.http.put<any>(this.url + "/Kisi/Kisiler/" + id, mdl)
      .pipe(map(response => {
        return response;
      }));
  }

  Delete(id: string) {
    return this.http.delete<any>(this.url + "/Kisi/Kisiler/" + id)
      .pipe(map(response => {
        return response;
      }));
  }
}
