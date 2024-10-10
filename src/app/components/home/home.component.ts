import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { movieList } from '../../Models/Movie';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  movies!:movieList;
  trendingMovies!:movieList;
  constructor(private movieService:MovieService,private route: ActivatedRoute){

  }
  ngOnInit(): void {
    this.getBannerData();
    this.getTrendingMovies();
  }

  getBannerData(){
    this.movieService.getMovies().subscribe({
      next:res=>{
        this.movies = res as movieList;

      }
    })
  }
  getTrendingMovies(): void {
    this.movieService.getTrendingMovies().subscribe({
      next:res=>{
        this.trendingMovies = res as movieList;
        this.movieService.getTrendingMovies().subscribe({
          next:res=>{
            let movies = res as movieList;
            this.trendingMovies.Search.push(... movies.Search);

          }
        })
      }
    })
  }



}
