import { Component, OnInit } from '@angular/core';
import { Book } from '../../../../model/book.model';
import { BookService } from '../book.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-book-delete',
  templateUrl: './book-delete.component.html',
  styleUrl: './book-delete.component.css'
})
export class BookDeleteComponent implements OnInit{

  book: Book = {} as Book;
  // book: Book = {
  //    id: "",
  //    title: "",
  //    name_author: "",
  //    text: ""
  // };

  id_cat: string = '';

  constructor(private service: BookService, 
    private route: ActivatedRoute, 
    private router: Router, 
    ){}

  ngOnInit(): void {
   this.id_cat =  this.route.snapshot.paramMap.get('id_cat')!;
   this.book.id = this.route.snapshot.paramMap.get('id')!;
   this.findById();
   
  }

  findById(): void{
    this.service.findById(this.book.id!).subscribe(responseData =>{
      this.book.title = responseData.title;
      this.book.name_author = responseData.name_author;
      this.book.text = responseData.text;
      
    });
  }
  cancel(): void{
    this.router.navigate([`category/${this.id_cat}/books`]);
  }
   
  delete(): void {
    this.service.delete(this.book.id!).subscribe(responseData => {
      this.router.navigate([`category/${this.id_cat}/books`]);
      this.service.message('Delete create success');
    }, err => {
      this.router.navigate([`category/${this.id_cat}/books`]);
      this.service.message('Delete create success');
    });
  }

}
