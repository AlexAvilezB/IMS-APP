import { Component } from '@angular/core';
import ChartsEmbedSDK from '@mongodb-js/charts-embed-dom';



@Component({
  selector: 'app-graphic',
  templateUrl: './graphic.component.html',
  styles: [],
})
export class GraphicComponent {
  charts = [
    {
      title: 'Products',
      url: 'https://charts.mongodb.com/charts-project-0-apleo/embed/charts?id=63ddd0c2-4888-4be3-81a6-eee56dbf4400&maxDataAge=86400&theme=light&autoRefresh=false',
    },
    {
      title: 'Users',
      url: 'https://charts.mongodb.com/charts-project-0-apleo/embed/charts?id=63ddf48c-716e-46ca-81e6-d386bf2e740e&maxDataAge=86400&theme=light&autoRefresh=false',
    },
    {
      title: '',
      url: 'https://charts.mongodb.com/charts-project-0-apleo/embed/charts?id=63e1cb85-666b-480d-8a18-5b5c9db80443&maxDataAge=86400&theme=light&autoRefresh=false',
    },
    {
      title: 'Inventory',
      url: 'https://charts.mongodb.com/charts-project-0-apleo/embed/charts?id=63deab76-3346-4859-81fa-c583c4253fc4&maxDataAge=86400&theme=light&autoRefresh=false',
    },
  ];
}
