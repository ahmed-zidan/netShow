import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { ToastrService } from 'ngx-toastr';
import { MovieDetail } from '../../Models/Movie';
import { ActivatedRoute } from '@angular/router';
import { DetailMovieItemComponent } from "../detail-movie-item/detail-movie-item.component";

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.scss'
})
export class MovieDetailsComponent implements OnInit {
  movieDetail!:MovieDetail;
  constructor(private movieService:MovieService ,
    private route: ActivatedRoute, private toastService:ToastrService){

  }
  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get("id");
      this.getMovie(id);
  }

  getMovie(id:any){
    this.movieService.getFormByName(id).subscribe({
      next:res=>{
       this.movieDetail = res as MovieDetail;
       console.log(this.movieDetail);
       if(this.movieDetail.Genre){

       }else{

        this.toastService.error("No Animation Movie Has The Name" , "Error");
       }

      }
    })
  }
}
