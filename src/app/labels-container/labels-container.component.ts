import { Component } from '@angular/core';
import { StateService } from '../shared/state.service';

@Component({
  selector: 'app-labels-container',
  standalone: true,
  templateUrl: './labels-container.component.html',
  styleUrls: ['./labels-container.component.css']
})
export class LabelsContainerComponent { 

  constructor(private stateService: StateService) {}

  toggleGrid(): void {
    this.stateService.toggleGridVisibility();
  }

}
