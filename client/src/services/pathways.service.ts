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

  // Post a pathwayQ
  addPathway(pathwayObj: any): Observable<any> {
    console.log(`pathway Q: ${JSON.stringify(pathwayObj)}`);
    return this.http.post(url.domainurl + `pathways`, pathwayObj);
  }

  // Delete a pathwayQ
  deletePathway(query: any): Observable<any> {
    console.log(`pathway Q: ${JSON.stringify(query)}`);
    return this.http.delete(url.domainurl + `pathways?${query}`);
  }
}
