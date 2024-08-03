import { Component } from '@angular/core';
import { SearchContainerComponent } from '../search-container/search-container.component';
import { LabelsContainerComponent } from '../labels-container/labels-container.component';
import { GridsContainerComponent } from '../grids-container/grids-container.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [SearchContainerComponent, LabelsContainerComponent, GridsContainerComponent],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent { }
