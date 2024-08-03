import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class StateService {
  private gridVisibleSubject = new BehaviorSubject<boolean>(false);
  gridVisible$ = this.gridVisibleSubject.asObservable();

  toggleGridVisibility(): void {
    this.gridVisibleSubject.next(!this.gridVisibleSubject.value);
    console.log(this.gridVisibleSubject);
  }
}