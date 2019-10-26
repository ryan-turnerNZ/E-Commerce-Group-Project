import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  private id;
  private activatedRoute;

  constructor(
    activatedRoute: ActivatedRoute,
     router:Router) { 
   

  }
sub;
  

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => { 
      this.id = params.get('id'); 
  });
  }

}
