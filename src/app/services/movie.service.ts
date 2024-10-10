import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http:HttpClient) {

   }

   getMovies(){
    return this.http.get(environment.apiUrl +"s=animation&type=movie");
   }

   getTrendingMovies(){
    return this.http.get(environment.apiUrl +"s=animation&type=movie&page=5");
   }

   getFormByName(movieName:string){
    console.log(environment.apiUrl +"&t="+movieName);
    return this.http.get(environment.apiUrl +"&t="+movieName);
   }
}
