
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { HttpClientModule,withFetch } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Import CommonModule if needed
import { HeaderComponent } from './header/header.component'; // Update path as necessary
import { DataService } from './data.service'; // Update path as necessary
import { HttpClient } from '@angular/common/http';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, MainComponent, FooterComponent, HttpClientModule, FormsModule, CommonModule], // Add HeaderComponent to imports
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'sample-app';
}
