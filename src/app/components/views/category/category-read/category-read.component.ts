import { Category } from '../../../../model/category.model';
import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../../service/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-read',
  templateUrl: './category-read.component.html',
  styleUrl: './category-read.component.css'
})
export class CategoryReadComponent implements OnInit{

  categorys: Category[] = [];


  displayedColumns: string[] = ['id', 'name', 'description', 'book', 'actions'];
  row: any;


  constructor(private service: CategoryService, private router: Router){}

  ngOnInit(): void {
    this.findAll();
  }


  findAll(){
    this.service.findAll().subscribe(data => {
      console.log(data);
        this.categorys = data;
    });
  }

  navegateCategoryCreate(){
        this.router.navigate(['category/create']);
  }
}
