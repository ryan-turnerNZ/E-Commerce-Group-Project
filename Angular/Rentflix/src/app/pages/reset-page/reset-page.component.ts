import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {LoginService} from '../../services/login-service/login.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-reset-page',
  templateUrl: './reset-page.component.html',
  styleUrls: ['./reset-page.component.scss']
})
export class ResetPageComponent implements OnInit {

  private token: any;
  resetForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private loginService: LoginService, private router: Router, private Activatedroute: ActivatedRoute) {
    this.resetForm = formBuilder.group({
      password: '',
    });
  }
    sub
  ngOnInit() {
    this.sub = this.Activatedroute.paramMap.subscribe(params => {
      this.token = params.get('token');
    });
  }

  onReset(value: {password: string}) {

  }


}
