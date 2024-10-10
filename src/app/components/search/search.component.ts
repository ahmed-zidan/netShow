import { Component, OnInit } from '@angular/core';
import { FormControl, Validators,FormGroup } from '@angular/forms';
import { MovieService } from '../../services/movie.service';
import { MovieDetail } from '../../Models/Movie';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent implements OnInit {

  form!:FormGroup;
  movieDetail!:MovieDetail;
  constructor(private movieService:MovieService,private toast:ToastrService){

  }
  ngOnInit(): void {
    this.form =
    new FormGroup({
      movieName : new FormControl('' , [Validators.required])
    }
  )
  }

  searchForMovies(){
    let name = this.form.get("movieName")?.value;
    console.log(name);
    this.movieService.getFormByName(name).subscribe({
      next:res=>{
       this.movieDetail = res as MovieDetail;
       console.log(this.movieDetail);
       if(this.movieDetail.Genre){

       }else{
        this.toast.error("No Animation Movie Has The Name" , "Error");
       }

      }
    })
  }
}
