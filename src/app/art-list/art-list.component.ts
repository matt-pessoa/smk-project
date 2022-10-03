import { Component, OnInit } from '@angular/core';
import { DataService } from '../core/data.service';
import { IArtList } from '../shared/interfaces';

@Component({
  selector: 'app-art-list',
  templateUrl: './art-list.component.html',
  styleUrls: ['./art-list.component.sass'],
})
export class ArtListComponent implements OnInit {
  userSearch!: string;
  artList!: any[];

  constructor(private dataService: DataService) {}

  updateSearch(value: string) {
    this.dataService.getSearchArt(value).subscribe((data) => {
      this.artList = data.items;
    });
  }

  ngOnInit(): void {
    this.dataService.getArt().subscribe((data: IArtList) => {
      this.artList = data.items;
      console.log(this.artList);
    });
  }
}
