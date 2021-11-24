import { Component, OnInit } from '@angular/core';
import { Serie } from '../interfaces/serie.interface';
import { SeriesService } from '../series.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  arrSeries: Serie[];

  constructor(private seriesService: SeriesService) {
    this.arrSeries = [];
  }

  async ngOnInit() {
    try {
      const response = await this.seriesService.getAll();
      this.arrSeries = response.data;
    }
    catch (err) {
      console.log(err);
    }
  }

}
