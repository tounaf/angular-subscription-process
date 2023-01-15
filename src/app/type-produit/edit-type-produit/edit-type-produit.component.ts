import { Component, OnInit, ViewChild } from '@angular/core';
import {HttpClientService} from '../../service/http-client.service';

import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-edit-type-produit',
  templateUrl: './edit-type-produit.component.html',
  styleUrls: ['./edit-type-produit.component.scss']
})
export class EditTypeProduitComponent implements OnInit {
  @ViewChild('fileInput', {static: false}) fileInput;
  productForm: FormGroup;
  attributes = ['Attribut 1', 'Attribut 2', 'Attribut 3'];
  features = ['Caractéristique 1', 'Caractéristique 2', 'Caractéristique 3'];

  constructor(private fb: FormBuilder, private http: HttpClient, private httpClient: HttpClientService) { }

  ngOnInit() {
    this.productForm = this.fb.group({
      nom: '',
      description: '',
      image: '',
      prixVente: '',
      prix: '',
      quantite: '',
      attributes: this.fb.array([]),
      interests: this.fb.array(this.attributes.map((item) => this.fb.control(false))),
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

  onChange(event) {
    const interests = <FormArray>this.productForm.get('interests') as FormArray;

    if(event.checked) {
      interests.push(new FormControl(event.source.value))
    } else {
      const i = interests.controls.findIndex(x => x.value === event.source.value);
      interests.removeAt(i);
    }
  }




}
