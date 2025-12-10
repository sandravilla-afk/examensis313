import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

export interface Celular {
  almacenamiento: string;
  color: string;
  marca: string;
  modelo: string;
  precio: number;
}

@Injectable({ providedIn: 'root' })
export class MenuService {
  private url = 'https://sandra-4cd59-default-rtdb.firebaseio.com/celular.json';

  constructor(private http: HttpClient) {}

  getCelulares(): Observable<Celular[]> {
    return this.http.get<Celular[] | null>(this.url).pipe(
      map(data => Array.isArray(data) ? data : [])
    );
  }
}
