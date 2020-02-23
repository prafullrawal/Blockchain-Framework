import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';






@Component({
  selector: 'app-install-prerequisites',
  templateUrl: './install-prerequisites.component.html',
  styleUrls: ['./install-prerequisites.component.css']
})
export class InstallPrerequisitesComponent implements OnInit {

  //constructor() { }

  constructor(private http: HttpClient) { }


  ngOnInit() {
  }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'text'
    })
  }

  message: string;
  isShown: boolean = false ; // hidden by default

  installPrerequisite(){
    console.log("inside function call")
    return this.http.post('/prerequisite/installPrerequisite',null,{responseType: 'text'}).subscribe(
      //this.http.post('/prerequisite/installPrerequisite',null, this.httpOptions).subscribe(
      data => {
        console.log("Sucess")
        this.message = data
        this.isShown = ! this.isShown;
        console.log(data);
      },
      error => {
        console.log("Error", error);
        //alert(JSON.stringify(error));
      }
    );   
  }

  








}
