import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Profile } from './profile';

@Injectable()
export class ProfileService {

  private SERVER = 'http://localhost:3000/profiles'; // Json server

  constructor(private http: HttpClient) { }

  public all(): Observable<Profile[]> {
    return this.http.get<Profile[]>(this.SERVER);
  }

  public get(id: string): Observable<Profile> {
    return this.http.get<Profile>(`${this.SERVER}/${id}`);
  }

  public add(p: Profile): Observable<any> {
    return this.http.post(`${this.SERVER}`, p);
  }

  public delete(id: number): Observable<any> {
    return this.http.delete(`${this.SERVER}/${id}`);
  }

  public put(p: Profile): Observable<any> {
    console.log(p);
    return this.http.put(`${this.SERVER}/${p.id}`, p);
  }

  private getLastId() {
    this.http.get<Profile[]>(this.SERVER).subscribe((data: Profile[]) => {
      if (typeof data[data.length - 1] === 'undefined') {
        return 1;
      }
      return data[data.length - 1].id + 1;
    });
  }
}
