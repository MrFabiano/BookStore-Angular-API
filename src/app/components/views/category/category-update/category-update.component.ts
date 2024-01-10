import { Component, OnInit } from '@angular/core';
import { Category } from '../../../../model/category.model';
import { Observable } from 'rxjs';
import { CategoryService } from '../../../../service/category.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-category-update',
  templateUrl: './category-update.component.html',
  styleUrl: './category-update.component.css'
})
export class CategoryUpdateComponent implements OnInit{

  category: Category = {} as Category;

  constructor(private service: CategoryService,
     private route: ActivatedRoute, 
     private router: Router){}
  
  ngOnInit(): void {
    this.category.id = this.route.snapshot.paramMap.get('id')!
    this.findById();
  }


  findById(): void {
    this.service.findById(this.category.id).subscribe(data => {
      this.category.name = data.name;
      this.category.description = data.description;
    });
  }

  update(): void {
    this.service.update(this.category).subscribe(data => {
      this.router.navigate(['category']);
      this.service.message('Category create success');
    }, err => {
      console.log(err);
      this.service.message('Validate message correctly');
    }
    );
  }

  cancel(): void{
    this.router.navigate(['category']);
  }

}
