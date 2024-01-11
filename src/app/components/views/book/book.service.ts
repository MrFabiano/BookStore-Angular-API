import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../../../model/book.model';
import { AppConstants } from '../../../../environments/environment';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class BookService implements OnInit{

  constructor(private httpClient: HttpClient, private snackBar: MatSnackBar) {}


  ngOnInit(): void {}


  create(book: Book, id_cat: string): Observable<Book> {
    const url = `${AppConstants.baseServidor}/books?category=${id_cat}`
    return this.httpClient.post<Book>(url, book);
  }


  findAllCategory(id_cat: string): Observable<Book[]>{
    const url = `${AppConstants.baseServidor}/books?category=${id_cat}`
    return this.httpClient.get<Book[]>(url);

  }

  findById(id: string): Observable<Book>{
    const url = `${AppConstants.baseServidor}/books/${id}`
    return this.httpClient.get<Book>(url);

  }

  update(book: Book): Observable<Book>{
    const url = `${AppConstants.baseServidor}/books/${book.id}`
    return this.httpClient.put<Book>(url, book);
  }

  delete(id: string): Observable<void>{
    const url = `${AppConstants.baseServidor}/books/${id}`
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
