import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, FormGroup, Validators ,FormsModule} from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as $ from 'jquery';

@Component({
  selector: 'app-update-network',
  templateUrl: './update-network.component.html',
  styleUrls: ['./update-network.component.css']
})

export class UpdateNetworkComponent implements OnInit {
  faPlus = faPlus;
  isShowTable: boolean;
  containers = [];
  updateFormData: FormGroup;

  constructor(private formBuilder: FormBuilder,private http: HttpClient, config: NgbModalConfig, private modalService: NgbModal) {

    this.updateFormData = this.formBuilder.group({
      ordererName: [''],
      domainName: [''],
      hostName: [''],
      orgName: [''],
      orgMsp: [''],
      peercount: [''],
      userscount: [''],
      channelName: ['']
    });
  }

  ngOnInit() {
  }

  async onClickModify() {
    console.log("clicked to modify Org / Peer");
    let data = this.updateFormData.value;
    
    this.createPeerOrgs(data);
    await this.delay(2000);
    this.createNewConfigTx(data);
    await this.delay(2000);
    this.createDockerCompose(data);
    await this.delay(2000);
    this.spinUpContainers(data);
    
  }

  createServicesTemplate(domainName, orgName, peerCount) {

    let orgCount: number = +(orgName.substring(orgName.length - 1));
    let peerPort = 10000 + (orgCount * 100);
    let peerServiceName = [];
    let services = [];
    let composeData = {};
    let portMap: string;
    let msp = orgName + "MSP";

    for (let i = 0; i < peerCount; i++) {

      peerServiceName[i] = "peer" + i + "." + orgName + "." + domainName;
      peerPort++;
      portMap = peerPort + ":" + peerPort;

      services[i] = {
        "container_name": peerServiceName[i],
        "image": "hyperledger/fabric-peer",
        "environment": [
          "CORE_VM_ENDPOINT=unix:///host/var/run/docker.sock",
          "CORE_PEER_ID=" + peerServiceName[i],
          "FABRIC_LOGGING_SPEC=info",
          "CORE_CHAINCODE_LOGGING_LEVEL=info",
          "CORE_PEER_LOCALMSPID=" + msp,
          "CORE_PEER_MSPCONFIGPATH=/etc/hyperledger/msp/peer/",
          "CORE_PEER_ADDRESS=" + peerServiceName[i] + ":" + peerPort,
          "CORE_VM_DOCKER_HOSTCONFIG_NETWORKMODE=net_basic",
          "CORE_LEDGER_STATE_STATEDATABASE=CouchDB",
          "CORE_LEDGER_STATE_COUCHDBCONFIG_COUCHDBADDRESS=couchdb:5984",
          "CORE_LEDGER_STATE_COUCHDBCONFIG_USERNAME=",
          "CORE_LEDGER_STATE_COUCHDBCONFIG_PASSWORD="
        ],
        "working_dir": "/opt/gopath/src/github.com/hyperledger/fabric",
        "command": "peer node start",
        "ports": [
          portMap
        ],
        "volumes": [
          "/var/run/:/host/var/run/",
          "./crypto-config/peerOrganizations/" + orgName + "." + domainName + "/peers/" + peerServiceName[i] + "/msp:/etc/hyperledger/msp/peer",
          "./crypto-config/peerOrganizations/" + orgName + "." + domainName + "/users:/etc/hyperledger/msp/users",
          "./config:/etc/hyperledger/configtx"
        ],
        "networks": [
          "basic"
        ]
      };

      composeData[peerServiceName[i]] = services[i];
    }
    console.log(composeData);
    return composeData;
  }

  createPeerOrgs(OrdererObjectUserData) {
    let orgName = OrdererObjectUserData.orgName;
    let domainName = OrdererObjectUserData.domainName;
    let domain = orgName + "." + domainName;
    let peersObject = {
      "PeerOrgs": [
        {
          "Name": OrdererObjectUserData.orgName,
          "Domain": domain,
          "EnableNodeOUs": true,
          "Template": {
            "Count": +(OrdererObjectUserData.peercount)
          },
          "Users": {
            "Count": +(OrdererObjectUserData.userscount)
          }
        }
      ]
    }
    // let payload = {
    //   "peersObject": peersObject
    // }
    // console.log("payload", payload);

    this.http.post('/updatenetwork/CreatePeerOrgs', { peersObject }).subscribe(
      data => {
        console.log("POST Request is successful ", data);
        //$(".modal-body").append('<div class="alert alert-success" role="alert"><strong>Success !!</strong> ' + JSON.stringify(data) + '</div>');
        // alert(JSON.stringify(data));
      },
      error => {
        console.log("Error", error);
        alert(JSON.stringify(error));
      }
    );
  }

  createNewConfigTx(OrdererObjectUserData) {

    let orgName = OrdererObjectUserData.orgName;
    let domainName = OrdererObjectUserData.domainName;
    let domain = orgName + "." + domainName;
    let msp = orgName + "MSP";
    let orgCount: number = +(orgName.substring(orgName.length - 1));
    let port = 10000 + (orgCount * 100);

    let newConfigTx = {
      "org": orgName,
      "domain": domain,
      "msp": msp,
      "port": port
    };

    this.http.post('/updatenetwork/CreateNewConfigTx', { newConfigTx }).subscribe(
      data => {
        console.log("POST Request is successful ", data);
        $(".modal-body").append('<div class="alert alert-success" role="alert"><strong>Success !!</strong> network configuration files created.</div>');
        // alert(JSON.stringify(data));
      },
      error => {
        console.log("Error", error);
        alert(JSON.stringify(error));
      }
    );
  }

  createDockerCompose(OrdererObjectUserData) {
    let peerCount = OrdererObjectUserData.peercount;
    let orgName = OrdererObjectUserData.orgName;
    let domainName = OrdererObjectUserData.domainName;
    let serviceList = this.createServicesTemplate(domainName, orgName, peerCount);

    let pdcObj = {
      "version": '2',
      "networks": {
        "basic": null
      },
      "services": serviceList
    }

    let payload = {
      "pdcObj": pdcObj,
      "orgName": orgName
    }

    console.log(payload);

    this.http.post('/updatenetwork/peerDockerCompose', { payload }).subscribe(
      data => {
        console.log("POST Request is successful ", data);
        //$(".modal-body").append('<div class="alert alert-success" role="alert"><strong>Success !!</strong> ' + JSON.stringify(data) + '</div>');
        // alert(JSON.stringify(data));
      },
      error => {
        console.log("Error", error);
        alert(JSON.stringify(error));
      }
    );

  }

  spinUpContainers(data) {
    console.log("spinUpContainers");
    let channelName = data.channelName;
    this.http.post('/updatenetwork/spinUp', { channelName }).subscribe(
      data => {
        console.log("POST Request is successful ", data);
      },
      error => {
        console.log("Error", error);
        alert(JSON.stringify(error));
      }
    );
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

}
