export class ExplorerLogin {
  username: string;
  peername: string;
  orgname: string;
}

export class ExplorerMainPageData {
  nodes: number;
  totalBlocks: number;
  totalTxns: number;
  chaincode: number;
  currentBlockNo: number;
  txnCreator: number;
  txnId: string;
  currentBlockHash: number;
  previousBlockHash: number;
  fullBlockResponse: any;
  fullTxnResponse: any;
}

export class BlockInfoToBeSent {
  username: string;
  peername: string;
  orgname: string;
  blocknuber: number;
}

export class TxnInfoToBeSent {
  username: string;
  peername: string;
  orgname: string;
  txnId: string;
}

export class JsonViewer {
  header: string;
  response: any;
}

export class CreateNetwork {
  host: string;
  odrname: string;
  odrport: string;
  orgname: string;
  orgmsp: string;
  caname: string;
  caport: string;
  peername: string;
  peerport: string;
}
