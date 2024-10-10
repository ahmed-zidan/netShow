import { Component, Input, OnInit } from '@angular/core';
import { MovieDetail } from '../../Models/Movie';

@Component({
  selector: 'app-detail-movie-item',
  templateUrl: './detail-movie-item.component.html',
  styleUrl: './detail-movie-item.component.scss'
})
export class DetailMovieItemComponent implements OnInit{

  @Input() movie!:MovieDetail;
  ngOnInit(): void {

    console.log(this.movie);
   }
}
