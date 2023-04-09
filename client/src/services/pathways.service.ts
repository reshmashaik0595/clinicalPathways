import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { url } from '../config/constants';

@Injectable({
  providedIn: 'root',
})
export class PathwayService {
  constructor(private http: HttpClient) {}

  // Get a pathwayQ
  getPathwaybyQuery(query: any): Observable<any> {
    console.log(`pathway Q: ${JSON.stringify(query)}`);
    return this.http.get(url.domainurl + `pathways?${query}`);
  }
}
