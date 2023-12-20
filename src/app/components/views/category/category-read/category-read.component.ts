import { Category } from './../category.model';
import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category-read',
  templateUrl: './category-read.component.html',
  styleUrl: './category-read.component.css'
})
export class CategoryReadComponent implements OnInit{

  categorys: Category[] = [];


  displayedColumns: string[] = ['id', 'name', 'description', 'actions'];
  row: any;


  constructor(private service: CategoryService){}

  ngOnInit(): void {
    this.findAll();
  }


  findAll(){
    this.service.findAll().subscribe(data => {
      console.log(data);
        this.categorys = data;
    });
  }
}
