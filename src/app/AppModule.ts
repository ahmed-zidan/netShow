import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule, RouterOutlet } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { NavbarComponent } from "./components/navbar/navbar.component";
import {MatButtonModule} from '@angular/material/button';
import {MatFormField} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MovieService } from "./services/movie.service";
import { SearchComponent } from "./components/search/search.component";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule, ToastrService } from "ngx-toastr";
import { AppRoutingModule } from "./app.routes";
import { HomeComponent } from "./components/home/home.component";
import { DetailMovieItemComponent } from "./components/detail-movie-item/detail-movie-item.component";
import { MovieDetailsComponent } from "./components/movie-details/movie-details.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchComponent,
    HomeComponent,
    DetailMovieItemComponent,
    MovieDetailsComponent
    // other components...
  ],
  imports: [
    MatToolbarModule,
    MatIconModule,
    RouterOutlet,
    BrowserModule,
    HttpClientModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormField,
    MatInputModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RouterModule,
    AppRoutingModule

  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
