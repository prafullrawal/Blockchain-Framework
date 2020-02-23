import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ExplorerLogin, ExplorerMainPageData, BlockInfoToBeSent, TxnInfoToBeSent, JsonViewer } from '../models/application.model';
import { faCode } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-custom-explorer',
  templateUrl: './custom-explorer.component.html',
  styleUrls: ['./custom-explorer.component.css']
})
export class CustomExplorerComponent implements OnInit {
  faCode = faCode;
  showModal: boolean;
  showJSONModal: boolean;
  public explorerLoginData: ExplorerLogin;
  public explorerMainPageData: ExplorerMainPageData;
  public blockData: BlockInfoToBeSent;
  public txnData: TxnInfoToBeSent;
  public jsonViewer: JsonViewer;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.explorerLoginData = new ExplorerLogin();
    this.explorerMainPageData = new ExplorerMainPageData();
    this.jsonViewer = new JsonViewer();
    this.showModal = true;
  }

  fetchData() {
    this.httpClient.post('/explorer/getMainPageData', this.explorerLoginData).subscribe( (response: any) => {
      this.showModal = false;
      const totalBlockData = JSON.parse(response.block);
      this.explorerMainPageData.currentBlockHash = response.currentBlockHash;
      this.explorerMainPageData.previousBlockHash = response.previousBlockHash;
      this.explorerMainPageData.nodes = response.totalNodes;
      this.explorerMainPageData.totalBlocks = response.totalBlocks;
      this.explorerMainPageData.currentBlockNo = response.totalBlocks;
      this.explorerMainPageData.fullBlockResponse = totalBlockData;
      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < totalBlockData.data.data.length; i++) {
        this.explorerMainPageData.txnId = totalBlockData.data.data[i].payload.header.channel_header.tx_id;
        this.explorerMainPageData.txnCreator = totalBlockData.data.data[i].payload.header.signature_header.creator.Mspid;
      }
    });
  }

  previousBlockData() {
    this.blockData.orgname = this.explorerLoginData.orgname;
    this.blockData.username = this.explorerLoginData.username;
    this.blockData.peername = this.explorerLoginData.peername;
    this.blockData.blocknuber = this.explorerMainPageData.currentBlockNo - 1;
    if (this.blockData.blocknuber > 1) {
      this.httpClient.post('/explorer/blockInfo', this.blockData).subscribe( (response: any) => {
        const totalBlockData = JSON.parse(response.block);
        this.explorerMainPageData.currentBlockHash = totalBlockData.currentBlockHash;
        this.explorerMainPageData.previousBlockHash = totalBlockData.previousBlockHash;
        this.explorerMainPageData.currentBlockNo = totalBlockData.currentBlock;
        this.explorerMainPageData.fullBlockResponse = totalBlockData;
        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < totalBlockData.data.data.length; i++) {
          this.explorerMainPageData.txnId = totalBlockData.data.data[i].payload.header.channel_header.tx_id;
          this.explorerMainPageData.txnCreator = totalBlockData.data.data[i].payload.header.signature_header.creator.Mspid;
        }
      });
    } else {
      alert('This is the last block or the genesis block !');
    }
  }

  nextBlockData() {
    this.blockData.orgname = this.explorerLoginData.orgname;
    this.blockData.username = this.explorerLoginData.username;
    this.blockData.peername = this.explorerLoginData.peername;
    this.blockData.blocknuber = this.explorerMainPageData.currentBlockNo + 1;
    if (this.blockData.blocknuber >= this.explorerMainPageData.totalBlocks) {
      this.httpClient.post('/explorer/blockInfo', this.blockData).subscribe( (response: any) => {
        const totalBlockData = JSON.parse(response.block);
        this.explorerMainPageData.currentBlockHash = totalBlockData.currentBlockHash;
        this.explorerMainPageData.previousBlockHash = totalBlockData.previousBlockHash;
        this.explorerMainPageData.fullBlockResponse = totalBlockData;
        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < totalBlockData.data.data.length; i++) {
          this.explorerMainPageData.txnId = totalBlockData.data.data[i].payload.header.channel_header.tx_id;
          this.explorerMainPageData.txnCreator = totalBlockData.data.data[i].payload.header.signature_header.creator.Mspid;
        }
      });
    } else {
      alert('This is the last committed block in the network !');
    }
  }

  getTxnIdInfo(id) {
    this.txnData.orgname = this.explorerLoginData.orgname;
    this.txnData.username = this.explorerLoginData.username;
    this.txnData.peername = this.explorerLoginData.peername;
    this.txnData.txnId = id;
    this.httpClient.post('/explorer/txnInfo', this.txnData).subscribe( (response: any) => {
      this.explorerMainPageData.fullTxnResponse = JSON.parse(response.txn);
      this.showfullJSON('txn');
    });
  }

  hideModal() {
    this.showModal = false;
  }

  hideJSONModal() {
    this.showJSONModal = false;
  }

  showfullJSON(type) {
    this.showJSONModal = true;
    if (type === 'block') {
      this.jsonViewer.header = 'BLOCK DETAILS';
      this.jsonViewer.response = this.explorerMainPageData.fullBlockResponse;
    } else if (type === 'txn') {
      this.jsonViewer.header = 'TRANSACTION DETAILS';
      this.jsonViewer.response = this.explorerMainPageData.fullTxnResponse;
    }
  }
}
