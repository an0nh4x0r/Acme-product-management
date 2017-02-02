import {Component, OnInit, OnChanges} from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit, OnChanges {

  rating: number = 4;
  starWidth: number;

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges(): void {
    this.starWidth = this.starWidth * 86/5;
  }

}
