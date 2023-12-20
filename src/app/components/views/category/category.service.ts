import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from './category.model';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService implements OnInit{

  baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  findAll(): Observable<Category[]>{
    const url = `${this.baseUrl}/category/`
    return this.http.get<Category[]>(url);
  }

  ngOnInit(): void {}
}
