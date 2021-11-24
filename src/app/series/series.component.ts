import { Component, OnInit } from '@angular/core';
import { Serie } from '../interfaces/serie.interface';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  arrSeries: Serie[];

  constructor() {
    this.arrSeries = [];
  }

  ngOnInit(): void {
  }

}
