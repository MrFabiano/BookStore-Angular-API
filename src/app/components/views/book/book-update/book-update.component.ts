import { Component, OnInit } from '@angular/core';
import { Book } from '../../../../model/book.model';
import { FormControl, Validators } from '@angular/forms';
import { BookService } from '../book.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-book-update',
  templateUrl: './book-update.component.html',
  styleUrl: './book-update.component.css'
})
export class BookUpdateComponent implements OnInit {


  book: Book = {} as Book;
  // book: Book = {
  //    id: "",
  //    title: "",
  //    name_author: "",
  //    text: ""
  // };

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

  update(): void{
    this.service.update(this.book).subscribe(responseData =>{
      this.router.navigate([`category/${this.id_cat}/books`]);
      this.service.message('Update create success');
    }, err =>{
      this.router.navigate([`category/${this.id_cat}/books`]);
      this.service.message('Update error create');
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


