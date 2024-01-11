import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../../service/category.service';
import { Category } from '../../../../model/category.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrl: './category-create.component.css'
})
export class CategoryCreateComponent implements OnInit{

  // category: Category = {
  //   name: '',
  //   description: ''
  //   }

   category: Category = {} as Category;

  constructor(private service: CategoryService, private router: Router){}

  ngOnInit(): void {}

  create(): void {
     this.service.create(this.category).subscribe((data) => {
      console.log(data);
      this.router.navigate(['category'])
      this.service.message('Category create success');
     }, err => {
      for(let i = 0; i < err.error.errors.length; i++){
        console.log(err);
        this.service.message(err.error.errors[i].message);
      }
     });
  }

  cancel(): void {
    this.router.navigate(['category']);
  }

}
