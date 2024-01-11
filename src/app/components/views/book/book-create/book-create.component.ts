import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Observable, from } from 'rxjs';
import { Book } from '../../../../model/book.model';
import { BookService } from '../book.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrl: './book-create.component.css'
})
export class BookCreateComponent implements OnInit{

  book: Book = {} as Book;
  id_cat: string = '';
  id: string = '';

  title = new FormControl("", [Validators.minLength(3)]);
  name_author = new FormControl("", [Validators.minLength(3)]);
  text = new FormControl("", [Validators.minLength(10)]);

  constructor(private service: BookService, 
    private route: ActivatedRoute, 
    private router: Router, 
    ){}

  ngOnInit(): void {
   this.id_cat =  this.route.snapshot.paramMap.get('id_cat')!
  }

  create(): void {
    this.service.create(this.book, this.id_cat).subscribe(response =>{
      this.router.navigate([`category/${this.id_cat}/books`]);
      this.service.message('Create book success');
      
    }, err =>{
      this.router.navigate([`category/${this.id_cat}/books`]);
      this.service.message('Error create book');
     
    });
  }
  
  cancel(): void{
    this.router.navigate([`category/${this.id_cat}/books`]);
  }

  getMessage(){
    if(this.title.invalid){
      return "The TITLE field must be between 3 and 10 characters long";
    }else  if(this.name_author.invalid){

      return "The NAME AUTHOR must have between 3 and 50 characters";
      
    }else if(this.text.invalid){
      return "The TEXT must have between 10 and 10000 characters";
    }
     return false;
  }

}

  


