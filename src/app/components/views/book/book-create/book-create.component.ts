import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { from } from 'rxjs';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrl: './book-create.component.css'
})
export class BookCreateComponent implements OnInit{

  title = new FormControl("", [Validators.minLength(3)]);
  name_author = new FormControl("", [Validators.minLength(10)]);
  text = new FormControl("", [Validators.minLength(10)])

  constructor(){}

  ngOnInit(): void {}


  getMessage(){
    if(this.title.invalid){
      return "The book must have between 3 and 50 characters";
    }
    if(this.name_author.invalid){
      return "The Name author must have between 10 and 50 characters";
    }
    if(this.text.invalid){
      return "The Text must have between 10 and 10000 characters";
    }
     return false;
  }
 
}

  


