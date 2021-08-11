import { Component, OnInit } from '@angular/core';
import {HttpClientService} from '../../service/http-client.service';

@Component({
  selector: 'app-list-type-produit',
  templateUrl: './list-type-produit.component.html',
  styleUrls: ['./list-type-produit.component.scss']
})
export class ListTypeProduitComponent implements OnInit {

  constructor(
    private httpClient: HttpClientService
  ) { }

  ngOnInit() {
    this.httpClient.get('http://localhost:8000/api/sites/2').subscribe((resp) => {
      console.log(resp);
    });
  }

}
