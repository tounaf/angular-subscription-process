import { Component, OnInit, ViewChild } from '@angular/core';
import {HttpClientService} from '../../service/http-client.service';

import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list-type-produit',
  templateUrl: './list-type-produit.component.html',
  styleUrls: ['./list-type-produit.component.scss']
})
export class ListTypeProduitComponent implements OnInit {
  @ViewChild('fileInput', {static: false}) fileInput;
  productForm: FormGroup;
  attributes = ['Attribut 1', 'Attribut 2', 'Attribut 3'];
  features = ['Caractéristique 1', 'Caractéristique 2', 'Caractéristique 3'];

  constructor(private fb: FormBuilder, private http: HttpClient, private httpClient: HttpClientService) { }

  ngOnInit() {
    this.productForm = this.fb.group({
      name: '',
      description: '',
      image: '',
      purchasePrice: '',
      salePrice: '',
      quantity: '',
      attributes: [],
      features: []
    });
  }

  openFileDialog() {
    this.fileInput.nativeElement.click();
  }

  handleFileInput(event) {
    const files = event.target.files;
    console.log(files.item(0));
    let fileReader = new FileReader();
    fileReader.readAsDataURL(files.item(0));
    
    fileReader.onload = () => {

      console.log(fileReader.result);
    }
    console.log(fileReader);
    console.log(files);
    this.productForm.patchValue({
      image: files.item(0)
    });
  }

  submitForm() {

    const data = JSON.stringify(this.productForm.value);
    console.log(data);
    this.httpClient.pos('/products', data).subscribe(
      (response) => {
        console.log(response);
      }
    )
    // this.http.post('https://your-api-endpoint.com/products', data).subscribe(
    //   (response) => {
    //     console.log(response);
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // );
  }

}
