import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DataService } from '../data.service';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-header',
  imports: [HttpClientModule,CommonModule,FormsModule],
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})


export class HeaderComponent implements OnInit { 
v3Json: any = '';

constructor(private dataService: DataService) {}


  ngOnInit(): void {
    this.loadV3Json();
  }

  loadV3Json(): void {
    this.dataService.getV3Json().subscribe(
      (data : string) => this.v3Json = data,
      (error: string) => console.error('Error fetching json:', error)
    );
  }
}
