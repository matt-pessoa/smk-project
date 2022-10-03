import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/core/data.service';
import { ISlides } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.sass'],
})
export class SlidesComponent implements OnInit {
  slideImages!: ISlides[];
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService
      .getSlideImages()
      .subscribe((images) => (this.slideImages = images));
  }
}
