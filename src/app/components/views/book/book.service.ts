import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../../../model/book.model';
import { AppConstants } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookService implements OnInit{

  constructor(private httpClient: HttpClient) {}


  ngOnInit(): void {}

  findAllCategory(id_cat: string): Observable<Book[]>{
    const url = `${AppConstants.baseServidor}/books?category=${id_cat}`
    return this.httpClient.get<Book[]>(url);

  }
}
