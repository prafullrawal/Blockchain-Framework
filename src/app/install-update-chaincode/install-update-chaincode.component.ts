import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FileUploader } from 'ng2-file-upload';
@Component({
  selector: 'app-install-update-chaincode',
  templateUrl: './install-update-chaincode.component.html',
  styleUrls: ['./install-update-chaincode.component.css']
})
export class InstallUpdateChaincodeComponent implements OnInit {
  constructor(private http: HttpClient) {}
  public uploader: FileUploader = new FileUploader({
    url: '/chaincode/upload'
  });

  ngOnInit() {
    this.uploader.onCompleteItem = (
      item: any,
      response: any,
      status: any,
      headers: any
    ) => {
      console.log('File uploaded:', item, status, response, headers);
    };
  }

  installChaincode() {
    console.log('inside function call');
    return this.http
      .post('/chaincode/installChaincode', null, { responseType: 'text' })
      .subscribe(
        data => {
          console.log('Sucess');
          console.log(data);
        },
        error => {
          console.log('Error', error);
        }
      );
  }

  upgradeChaincode() {
    console.log('inside function call');
    return this.http
      .post('/chaincode/upgradeChaincode', null, { responseType: 'text' })
      .subscribe(
        data => {
          console.log('Sucess');
          console.log(data);
        },
        error => {
          console.log('Error', error);
        }
      );
  }

  generateSwaggerFile() {
    this.http.get('/chaincode/generateSwaggerFile').subscribe( (response: any) => {
      console.log('File created successfully !');
    });
  }
}
