import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators ,FormsModule} from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-create-identities',
  templateUrl: './create-identities.component.html',
  styleUrls: ['./create-identities.component.css']
})
export class CreateIdentitiesComponent implements OnInit {

  formData: FormGroup;

  constructor(private formBuilder: FormBuilder,private http: HttpClient, config: NgbModalConfig, private modalService: NgbModal) {

    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;

    this.formData = this.formBuilder.group({
      mspNameadm: ['', Validators.required],
      mspNameusr: ['', Validators.required],
      admName: ['', Validators.required],
      idName: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  async onClickRegisterAdmin() {
    let userData = this.formData.value;
    console.log("clicked to Register Admin ", userData);

    let payload = {
      "msp": userData.mspNameadm,
      "username": userData.admName
    }

    this.http.post('/identities/regAdmin', { payload }).subscribe(
      data => {
        console.log("Admin registration is successful ", data);
      },
      error => {
        console.log("Error", error);
        alert(JSON.stringify(error));
      }
    );
  }

  async onClickRegisterUser() {
    let userData = this.formData.value;
    console.log("clicked to Register User ", userData);

    let payload = {
      "msp": userData.mspNameusr,
      "username": userData.idName
    }

    this.http.post('/identities/regUser', { payload }).subscribe(
      data => {
        console.log("User registration is successful ", data);
      },
      error => {
        console.log("Error", error);
        alert(JSON.stringify(error));
      }
    );
  }

}
