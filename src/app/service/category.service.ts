import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../model/category.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AppConstants } from '../../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class CategoryService implements OnInit{

  //baseUrl: string = environment.baseUrl;

  constructor(private httpClient: HttpClient, private snackBar: MatSnackBar) {}

  ngOnInit(): void {}

  findAll(): Observable<Category[]>{
    const url = `${AppConstants.baseUrl}/category/`
    return this.httpClient.get<Category[]>(url);
  }

  findById(id?: string): Observable<Category>{
    const url = `${AppConstants.baseUrl}/category/${id}`
    return this.httpClient.get<Category>(url);

  }

  create(category: Category): Observable<Category>{
    const url = `${AppConstants.baseUrl}/category/`
    return this.httpClient.post<Category>(url, category);
  }

  update(category: Category): Observable<void>{
    const url = `${AppConstants.baseUrl}/category/${category.id}`
    return this.httpClient.put<void>(url, category);
  }

  delete(id: string): Observable<void>{
     const url = `${AppConstants.baseUrl}/category/${id}`
     return this.httpClient.delete<void>(url);
  }

   message(str: string): void {
    this.snackBar.open(`${str}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000
    });   
   }
}
