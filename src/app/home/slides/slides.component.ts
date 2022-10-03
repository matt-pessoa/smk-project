import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

import { DataService } from 'src/app/core/data.service';
import { ISlides } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.sass'],
})
export class SlidesComponent implements OnInit {
  slideImages!: ISlides[];
  currentSlide: number = 0;

  constructor(private dataService: DataService) {}

  updateArt() {
    if (this.currentSlide <= this.slideImages.length) {
      this.currentSlide += 1;
    } else {
      this.currentSlide = 0;
    }
  }

  ngOnInit(): void {
    this.dataService
      .getSlideImages()
      .subscribe((images) => (this.slideImages = images));

    interval(5000).subscribe(() => {
      this.updateArt();
    });
  }
}
