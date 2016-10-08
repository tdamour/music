import { Component, OnInit, Input } from '@angular/core';
import { AppState } from '../app-state';


@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {
 
  constructor() { 
  }
  private delay: number = 2000;
  private currentTimeout: any;
  private isDelayedRunning: boolean = true


  @Input("data")
  appData: AppState;

  ngOnInit() {
  }

}
