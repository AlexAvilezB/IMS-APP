import { Component, } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Data } from '../../interfaces/data';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [],
})
export class DashboardComponent {

  dataList: Data[] = [];

  constructor(private dataService: DataService) {
    this.dataService.getTotalData().subscribe((data) => {
      this.dataList = data;
    });
  }


}
