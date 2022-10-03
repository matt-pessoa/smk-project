import { Component, OnInit } from '@angular/core';
import { DataService } from '../core/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-art-info',
  templateUrl: './art-info.component.html',
  styleUrls: ['./art-info.component.sass'],
})
export class ArtInfoComponent implements OnInit {
  currentArt!: {};
  id!: string;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') || '';

    this.dataService.getArtById(this.id).subscribe((data) => {
      this.currentArt = data.items[0];
    });
  }
}
