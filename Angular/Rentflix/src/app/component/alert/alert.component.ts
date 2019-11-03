import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent {

  constructor( public dialogRef: MatDialogRef<AlertComponent>){}

  close() {
    this.dialogRef.close('Thanks for using me!');
  }


}
