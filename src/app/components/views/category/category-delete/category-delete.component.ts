import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../../service/category.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '../../../../model/category.model';

@Component({
  selector: 'app-category-delete',
  templateUrl: './category-delete.component.html',
  styleUrl: './category-delete.component.css'
})
export class CategoryDeleteComponent implements OnInit{

  category: Category = {} as Category;

  constructor(private service: CategoryService, private route: ActivatedRoute, private router: Router){}

  ngOnInit(): void {
    this.category.id = this.route.snapshot.paramMap.get('id')!
    this.findById();

  }

  findById(): void {
   this.service.findById(this.category.id).subscribe(data => {
    this.category.name = data.name;
    this.category.description = data.description;
    console.log(data);
   });
  }

  delete(): void{
    this.service.delete(this.category.id!).subscribe(data => {
       this.router.navigate(['category']);
       this.service.message('Category delete and success');
    }, err => {
      this.service.message(err.error.error)
    });
  }

  cancel(): void {
    this.router.navigate([`category`]);
  }

}
