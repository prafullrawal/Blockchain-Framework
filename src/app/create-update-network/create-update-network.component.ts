import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {CreateNetwork } from '../models/application.model';

import * as $ from 'jquery';

@Component({
  selector: 'app-create-update-network',
  templateUrl: './create-update-network.component.html',
  styleUrls: ['./create-update-network.component.css'],
})


export class CreateUpdateNetworkComponent implements OnInit {

  public createNetwork: CreateNetwork;
  showModal: boolean;
  spinnerModal: boolean;
  faPlus = faPlus;

  constructor(private httpClient: HttpClient) { }

  openModal() {
    this.showModal = true;
    this.spinnerModal = true;
  }

  hideModal() {
    this.showModal = false;
    $(this).find('.alert-success').remove();
  }

  ngOnInit() {
    this.createNetwork = new CreateNetwork();
  }

  createCryptoFile() {
    this.httpClient.post('/network/createCryptoFile', this.createNetwork).subscribe( (response: any) => {
      const resp = JSON.parse(JSON.stringify(response));
      console.log(resp);
      if (resp.success) {
        this.openModal();
        // tslint:disable-next-line: max-line-length
        $('.modal-body').append('<div class="alert alert-success" role="alert"><strong>Success !!</strong> Crypto config file created.</div>');
        this.createConfigFile(this.createNetwork);
      }
    });
  }

  createConfigFile(network) {
    this.httpClient.post('/network/createConfigFile', network).subscribe( (response: any) => {
      const resp = JSON.parse(JSON.stringify(response));
      console.log(resp);
      if (resp.success) {
        // tslint:disable-next-line: max-line-length
        $('.modal-body').append('<div class="alert alert-success" role="alert"><strong>Success !!</strong> Config tx file created.</div>');
        this.generateCertsAndConfigFiles();
      }
    });
  }

  generateCertsAndConfigFiles() {
    this.httpClient.get('/network/generateCertsAndConfigFiles').subscribe( (response: any) => {
      const resp = JSON.parse(JSON.stringify(response));
      console.log(resp);
      if (resp.success) {
        // tslint:disable-next-line: max-line-length
        $('.modal-body').append('<div class="alert alert-success" role="alert"><strong>Success !!</strong> Certificates and configuration files generated.</div>');
        this.createDockerFile(this.createNetwork);
      }
    });
  }

  createDockerFile(network) {
    this.httpClient.post('/network/createDockerFile', network).subscribe( (response: any) => {
      const resp = JSON.parse(JSON.stringify(response));
      if (resp.success) {
        // tslint:disable-next-line: max-line-length
        $('.modal-body').append('<div class="alert alert-success" role="alert"><strong>Success !!</strong> Docker file created.</div>');
        this.startNetwork(this.createNetwork);
      }
    });
  }

  startNetwork(network) {
    this.httpClient.post('/network/startNetwork',network).subscribe( (response: any) => {
      const resp = JSON.parse(JSON.stringify(response));
      if (resp.success) {
        // tslint:disable-next-line: max-line-length
        $('.modal-body').append('<div class="alert alert-success" role="alert"><strong>Success !!</strong> Network is up and connection file generated.</div>');
      }
    });
  }

}
