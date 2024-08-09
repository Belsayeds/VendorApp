import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DataService } from '../data.service';
import { HttpClientModule } from '@angular/common/http';
import { StateService } from '../shared/state.service';
import { HttpClient } from '@angular/common/http';

interface Vendor {
  id: number;
  name: string;
  purposes: number[];
  features: number[];
  legIntPurposes: number[];
  specialFeatures: number[];
  flexiblePurposes: number[];
  specialPurposes: number[];
  cookieMaxAgeSeconds: number;
  usesCookies: boolean;
  cookieRefresh: boolean;
  usesNonCookieAccess: boolean;
  urls: { langId: string, privacy: string, legIntClaim?: string }[];
  deviceStorageDisclosureUrl: string;
  // Add other necessary fields if needed
}

interface Purpose {
  vendorListVersion: number;
  lastUpdated: string;
  purposes: any[];
  specialPurposes: any[];
  features: any[];
  specialFeatures: any[];
  stacks: any[];
}

@Component({
  selector: 'app-grids-container',
  imports: [CommonModule, FormsModule, HttpClientModule],
  standalone: true,
  templateUrl: './grids-container.component.html',
  styleUrls: ['./grids-container.component.css']
})


export class GridsContainerComponent implements OnInit{ 

  v3Json: any = {};
  vendors: Vendor[] = [];
  purpose: Purpose[] = [];
  purposes: any = {};
  expandedRowIndex: number | null = null;
  isGridVisible: boolean = true;
  selectedLanguage: string = 'English';


constructor(private dataService: DataService , private stateService: StateService,private http: HttpClient) {}

private v3Local = 'https://vendor-list.consensu.org/v3/vendor-list.json'; // Path to your JSON file



  ngOnInit(): void {
    this.loadV3Json();
    this.loadPurposeJson();
    this.stateService.gridVisible$.subscribe(
      isVisible => this.isGridVisible = isVisible
    );
  }

  loadV3Json(): void {
    this.dataService.getV3Json().subscribe(
      (data : any) => this.vendors= data.vendors, 
      (error: string) => console.error('Error fetching json:', error)
    );
  }

  loadPurposeJson(): void {
    this.dataService.getPurposeLang(this.selectedLanguage).subscribe(
      (data : any) => this.purpose= data, 
      (error: string) => console.error('Error fetching json:', error)
    );

    
  }




getVendors(): Vendor[] {
  return Object.values(this.vendors);
}

getpurpose(): Purpose[] {
  return Object.values(this.purpose);
}


toggleExpand(index: number): void {
  if (this.expandedRowIndex === index) {
    this.expandedRowIndex = null;
  } else {
    this.expandedRowIndex = index;
  }
}

isExpanded(index: number): boolean {
  
  return this.expandedRowIndex === index;
}

isLeftGridExpanded(): boolean {
  return !this.isGridVisible;
}

}



