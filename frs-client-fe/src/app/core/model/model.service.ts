import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Model } from 'src/app/data/model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ModelService {

  constructor(private http: HttpClient) { }

  public getAll(organizationId: string, applicationId: string): Observable<Model[]> {
    return this.http.get<Model[]>(`${environment.apiUrl}org/${organizationId}/app/${applicationId}/models`);
  }

  public create(organizationId: string, applicationId: string, name: string): Observable<Model> {
    return this.http.post<Model>(`${environment.apiUrl}org/${organizationId}/app/${applicationId}/model`, { name });
  }
}
