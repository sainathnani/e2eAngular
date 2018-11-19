import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-blue-strip',
  templateUrl: './blue-strip.component.html',
  styleUrls: ['./blue-strip.component.scss']
})
export class BlueStripComponent implements OnInit {

  constructor() { }

  @Input()
  info: String = '';
  ngOnInit() {
  }

}
