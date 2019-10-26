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

  constructor(private Activatedroute: ActivatedRoute) {

  }
sub;


  ngOnInit() {
    this.sub = this.Activatedroute.paramMap.subscribe(params => {
      console.log(params);
      this.id = params.get('id');
    });
  }

  OnDestroy() {
    this.sub.unsubscribe();
  }

}
