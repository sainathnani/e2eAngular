import { Component, OnInit } from '@angular/core';
import {BatchService} from './batch.service';
import {Batches} from '../models/Batches';

@Component({
  selector: 'app-batches',
  templateUrl: './batches.component.html',
  styleUrls: ['./batches.component.scss']
})
export class BatchesComponent implements OnInit {

  constructor(private batchService: BatchService ) { }

  batSource: Batches[] = [];
  displayColumns = ['courseName', 'startDate', 'courseTime', 'duration'];
  ngOnInit() {
    this.getAllBatches();
  }

  getAllBatches(): void {
    this.batchService.getAllBatches().subscribe(res => {
      this.batSource = res;
    });
  }
}
