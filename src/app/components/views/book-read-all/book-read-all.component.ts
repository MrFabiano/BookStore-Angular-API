import { Component, OnInit } from '@angular/core';
import { Book } from '../../../model/book.model';
import { BookService } from '../book/book.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-book-read-all',
  templateUrl: './book-read-all.component.html',
  styleUrl: './book-read-all.component.css'
})
export class BookReadAllComponent implements OnInit{

  displayedColumns: string[] = ['id', 'name', 'book', 'actions'];
  row: any;

  //books!: Book[];
  books: Book[] = [];

  id_cat: string = '';

  constructor(private service: BookService, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.id_cat = this.route.snapshot.paramMap.get('id_cat')!
    return this.findAllBook();
  }


  findAllBook(): void{
    this.service.findAllCategory(this.id_cat!).subscribe(response => {
     this.books = response;
    });
  }
}
