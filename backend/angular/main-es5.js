function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<br>\n<div class=\"container\">\n  <h1 style=\"text-align: center;\">EAS Blockchain Framework</h1>\n</div>\n<br>\n<app-page-tabs></app-page-tabs>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/create-identities/create-identities.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/create-identities/create-identities.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCreateIdentitiesCreateIdentitiesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n  <form [formGroup]=\"formData\">\n    <div class=\"card\">\n      <div class=\"card-header\"><b>Create Admin Identities</b></div>\n      <div class=\"card-body\">\n        <div class=\"row\">\n          <div class=\"col\">\n            <label for=\"mspadm\"><b>MSP :</b></label>\n            <input type=\"text\" class=\"form-control\" id=\"mspadm\" placeholder=\"Org1MSP\" formControlName=\"mspNameadm\"\n              class=\"form-control\" required>\n          </div>\n          <div class=\"col\">\n            <label for=\"nameadm\"><b>Admin Name :</b></label>\n            <input type=\"text\" class=\"form-control\" id=\"nameadm\" placeholder=\"admin\" formControlName=\"admName\"\n              class=\"form-control\" required>\n          </div>\n        </div>\n        <br>\n        <button type=\"submit\" class=\"btn btn-success mx-auto d-block\" (click)=\"onClickRegisterAdmin()\" >Generate</button>\n      </div>\n    </div>\n\n    <div class=\"card\">\n      <div class=\"card-header\"><b>Create User Identities</b></div>\n      <div class=\"card-body\">\n        <div class=\"row\">\n          <div class=\"col\">\n            <label for=\"mspusr\"><b>MSP :</b></label>\n            <input type=\"text\" class=\"form-control\" id=\"mspusr\" placeholder=\"Org1MSP\" formControlName=\"mspNameusr\"\n              class=\"form-control\" required>\n          </div>\n          <div class=\"col\">\n            <label for=\"nameusr\"><b>User Name :</b></label>\n            <input type=\"text\" class=\"form-control\" id=\"nameusr\" placeholder=\"user1\" formControlName=\"idName\"\n              class=\"form-control\" required>\n          </div>\n        </div>\n        <br>\n        <button type=\"submit\" class=\"btn btn-success mx-auto d-block\" (click)=\"onClickRegisterUser()\" >Generate</button>\n      </div>\n    </div>\n  </form>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/create-update-network/create-update-network.component.html":
  /*!******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/create-update-network/create-update-network.component.html ***!
    \******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCreateUpdateNetworkCreateUpdateNetworkComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-sm-4\">\n      <div class=\"card\">\n        <div class=\"card-header\"><b>Host Details</b></div>\n        <div class=\"card-body\">\n          <div class=\"row\">\n            <div class=\"col\">\n              <label for=\"host\"><b>Host :</b></label>\n              <input type=\"text\" class=\"form-control\" id=\"host\" [(ngModel)]=\"createNetwork.host\">\n            </div>\n          </div>\n          <br>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-8\">\n      <div class=\"card\">\n        <div class=\"card-header\"><b>Orderer Details</b></div>\n        <div class=\"card-body\">\n          <div class=\"row\">\n            <div class=\"col\">\n              <label for=\"odrname\"><b>Name :</b></label>\n              <input type=\"text\" class=\"form-control\" id=\"odrname\" [(ngModel)]=\"createNetwork.odrname\">\n            </div>\n            <div class=\"col\">\n              <label for=\"odrport\"><b>Port :</b></label>\n              <input type=\"text\" class=\"form-control\" id=\"odrport\" [(ngModel)]=\"createNetwork.odrport\">\n            </div>\n          </div>\n          <br>\n        </div>\n      </div>\n    </div>\n  </div>\n  <br>\n  <div class=\"card\">\n    <div class=\"card-header\"><b>Organization Details</b><button style=\"float: right;\">\n        <fa-icon [icon]=\"faPlus\"></fa-icon>\n      </button></div>\n    <div class=\"card-body\">\n      <div class=\"row\">\n        <div class=\"col\">\n          <label for=\"orgname\"><b>Org Name :</b></label>\n          <input type=\"text\" class=\"form-control\" id=\"orgname\" [(ngModel)]=\"createNetwork.orgname\">\n        </div>\n        <div class=\"col\">\n          <label for=\"msp\"><b>Org MSP :</b></label>\n          <input type=\"text\" class=\"form-control\" id=\"orgmsp\" [(ngModel)]=\"createNetwork.orgmsp\">\n        </div>\n      </div>\n      <br>\n      <div class=\"card\">\n        <div class=\"card-header\"><b>Certificate Authority Details</b></div>\n        <div class=\"card-body\">\n          <div class=\"row\">\n            <div class=\"col\">\n              <label for=\"caname\"><b>CA Name :</b></label>\n              <input type=\"text\" class=\"form-control\" id=\"caname\" [(ngModel)]=\"createNetwork.caname\">\n            </div>\n            <div class=\"col\">\n              <label for=\"caport\"><b>CA Port :</b></label>\n              <input type=\"text\" class=\"form-control\" id=\"caport\" [(ngModel)]=\"createNetwork.caport\">\n            </div>\n          </div>\n          <br>\n        </div>\n      </div>\n      <br>\n      <div class=\"card\">\n        <div class=\"card-header\"><b>Peer Details</b><button style=\"float: right;\">\n            <fa-icon [icon]=\"faPlus\"></fa-icon>\n          </button></div>\n        <div class=\"card-body\">\n          <div class=\"row\">\n            <div class=\"col\">\n              <label for=\"peername\"><b>Peer Name :</b></label>\n              <input type=\"text\" class=\"form-control\" id=\"peername\" [(ngModel)]=\"createNetwork.peername\">\n            </div>\n            <div class=\"col\">\n              <label for=\"peerport\"><b>Peer Port :</b></label>\n              <input type=\"text\" class=\"form-control\" id=\"peerport\" [(ngModel)]=\"createNetwork.peerport\">\n            </div>\n          </div>\n          <br>\n        </div>\n      </div>\n      <br>\n    </div>\n  </div>\n  <br>\n  <button type=\"button\" class=\"btn btn-success mx-auto d-block\" (click)=\"createCryptoFile()\">Create</button>\n  <br>\n</div>\n\n\n\n  <div class=\"modal\"  style=\"background-color:rgba(0,0,0, 0.6);\" id=\"myModal\" [style.display]=\"showModal ? 'block' : 'none'\">\n    <div class=\"modal-dialog modal-dialog-centered\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title\" id=\"modal-basic-title\">Please wait operation in progress.. <i class=\"fa fa-refresh fa-spin\" style=\"font-size:20px;color:#007bff;\" [style.display]=\"spinnerModal ? 'block' : 'none'\"></i></h4>\n        </div>\n        <div class=\"modal-body\">\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"hideModal()\">OK</button>\n        </div>\n      </div>\n    </div>\n  </div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/custom-explorer/custom-explorer.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/custom-explorer/custom-explorer.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCustomExplorerCustomExplorerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"content_section\">\n  <div class=\"left_sec_3\">\n    <div class=\"row\">\n      <div class=\"col-md-3\">\n        <div class=\"wht_blk wht_blk_1\"><span>NODES</span><span class=\"green\">{{explorerMainPageData.nodes}}</span><img\n            src=\"../../assets/images/icon_1.png\"></div>\n      </div>\n      <div class=\"col-md-3\">\n        <div class=\"wht_blk wht_blk_2\"><span>BLOCKS</span><span\n            class=\"green\">{{explorerMainPageData.totalBlocks}}</span><img src=\"../../assets/images/icon_2.png\"></div>\n      </div>\n      <div class=\"col-md-3\">\n        <div class=\"wht_blk wht_blk_3\"><span>TRANSACTIONS</span><span\n            class=\"green\">{{explorerMainPageData.totalTxns}}</span><img src=\"../../assets/images/icon_3.png\"></div>\n      </div>\n      <div class=\"col-md-3\">\n        <div class=\"wht_blk wht_blk_4\"><span>CHAINCODES</span><span\n            class=\"green\">{{explorerMainPageData.chaincode}}</span><img src=\"../../assets/images/icon_4.png\"></div>\n      </div>\n    </div>\n    <div class=\"clearfix\"></div>\n    <h3><b>BLOCK # <span class=\"grn\">{{explorerMainPageData.currentBlockNo}}</span></b><button\n        (click)=\"showfullJSON('block')\" style=\"float: right;\">\n        <fa-icon [icon]=\"faCode\"></fa-icon>\n      </button></h3>\n    <div class=\"row wht_blk blockno\" style=\"border-top: 7px solid cornflowerblue;\">\n      <div class=\"col-md-1\">\n        <img src=\"../../assets/images/prev.png\" style=\"margin-top: 40px;\" alt=\"Backward\" />\n      </div>\n      <div class=\"col-md-10\">\n        <table width=\"100%\" border=\"0\">\n          <tbody>\n            <tr>\n              <td><b>Txn By</b></td>\n              <td class=\"blue\"><b style=\"word-wrap: break-word;\">{{explorerMainPageData.txnCreator}}</b></td>\n            </tr>\n            <tr>\n              <td><b>Txn Id</b></td>\n              <td class=\"blue\"><b style=\"word-wrap: break-word;\"><a\n                    (click)=\"getTxnIdInfo(explorerMainPageData.txnId)\">{{explorerMainPageData.txnId}}</a></b></td>\n            </tr>\n            <tr>\n              <td><b>Current Hash</b></td>\n              <td class=\"blue\"><b style=\"word-wrap: break-word;\">{{explorerMainPageData.currentBlockHash}}</b></td>\n            </tr>\n            <tr>\n              <td><b>Previous Hash</b></td>\n              <td class=\"blue\"><b style=\"word-wrap: break-word;\">{{explorerMainPageData.previousBlockHash}}</b></td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n      <div class=\"col-md-1\">\n        <img src=\"../../assets/images/next.png\" style=\"margin-top: 40px;\" alt=\"Forward\" />\n      </div>\n    </div>\n    <!-- The Modal -->\n    <div class=\"modal\" id=\"myModal\" [style.display]=\"showModal ? 'block' : 'none'\">\n      <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n\n          <!-- Modal Header -->\n          <div class=\"modal-header\">\n            <h4 class=\"modal-title\"><b><i>Explorer Request Details</i></b></h4>\n            <button type=\"button\" class=\"close\" (click)=\"hideModal()\">&times;</button>\n          </div>\n\n          <!-- Modal body -->\n          <div class=\"modal-body\">\n            <div class=\"row\">\n              <div class=\"col\">\n                <label for=\"orgname\"><b>Org Name :</b></label>\n                <input type=\"text\" class=\"form-control\" id=\"orgname\" [(ngModel)]=\"explorerLoginData.orgname\">\n              </div>\n              <div class=\"col\">\n                <label for=\"peername\"><b>Peer Name :</b></label>\n                <input type=\"text\" class=\"form-control\" id=\"peername\" [(ngModel)]=\"explorerLoginData.peername\">\n              </div>\n              <div class=\"col\">\n                <label for=\"username\"><b>User Name :</b></label>\n                <input type=\"text\" class=\"form-control\" id=\"username\" [(ngModel)]=\"explorerLoginData.username\">\n              </div>\n            </div>\n          </div>\n\n          <!-- Modal footer -->\n          <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-info mx-auto d-block\" (click)=\"fetchData()\">Fetch Data</button>\n            <br>\n          </div>\n\n        </div>\n      </div>\n    </div>\n    <!-- The Modal -->\n    <div class=\"modal\" id=\"myModal\" [style.display]=\"showJSONModal ? 'block' : 'none'\">\n      <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n\n          <!-- Modal Header -->\n          <div class=\"modal-header\">\n            <h4 class=\"modal-title\"><b><i>{{jsonViewer.header}}</i></b></h4>\n            <button type=\"button\" class=\"close\" (click)=\"hideJSONModal()\">&times;</button>\n          </div>\n\n          <!-- Modal body -->\n          <div class=\"modal-body\">\n\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/custom-swagger-api/custom-swagger-api.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/custom-swagger-api/custom-swagger-api.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCustomSwaggerApiCustomSwaggerApiComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"swagger-editor\"></div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/docker-container-logs/docker-container-logs.component.html":
  /*!******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/docker-container-logs/docker-container-logs.component.html ***!
    \******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDockerContainerLogsDockerContainerLogsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"card m-3\">\n    <h5 class=\"card-header\"> Docker Containers <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"RefreshAndShowContainersStatus()\"  style=\"float: right\">Refresh </button> </h5>\n        <table class=\"table table-striped\">\n          <thead>\n          <tr>\n            <th scope=\"col\">#</th>\n            <th scope=\"col\">CONTAINER ID</th>\n            <th scope=\"col\">NAMES</th>\n            <th scope=\"col\">IMAGE</th>\n            <th scope=\"col\">STATUS</th>\n            <th scope=\"col\">PORTS</th>\n          </tr>\n          </thead>\n          <tbody>\n\t    <tr *ngFor=\"let Containers of containers; index as i\">\n            <th scope=\"row\">{{ i + 1 }}</th>\n            <td><a href=\"#\" (click)=\"getContainerLogs(Containers.CONTAINER_ID)\">{{ Containers.CONTAINER_ID }}</a></td>\n            <td>{{ Containers.NAMES }}</td>\n            <td>{{ Containers.IMAGE }}</td>\n            <td>{{ Containers.STATUS  }}</td>\n            <td>{{ Containers.PORTS  }}</td>\n          </tr>\n          </tbody>\n        </table>\n        <br>\n</div>\n\n\n<button type=\"button\" id=\"openModal\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#exampleModalScrollable\" hidden></button>\n<div class=\"modal fade\" id=\"exampleModalScrollable\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalScrollableTitle\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-dialog-scrollable\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalScrollableTitle\">Modal title</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\" id=\"dockerContainerLogs\">\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n        <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\n      </div>\n    </div>\n  </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/install-prerequisites/install-prerequisites.component.html":
  /*!******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/install-prerequisites/install-prerequisites.component.html ***!
    \******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppInstallPrerequisitesInstallPrerequisitesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n  <br>\n  <img src=\"../../assets/images/pre-requisite.PNG\" class=\"mx-auto d-block\">\n  <br>\n  <button type=\"button\" class=\"btn btn-success mx-auto d-block\" (click)=\"installPrerequisite()\">Install</button>\n</div>\n<br>\n<br>\n<br>\n<br>\n<div class=\"card-header\" *ngIf=\"isShown\">\n  {{message}}\n</div>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/install-update-chaincode/install-update-chaincode.component.html":
  /*!************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/install-update-chaincode/install-update-chaincode.component.html ***!
    \************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppInstallUpdateChaincodeInstallUpdateChaincodeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n  <br>\n  <div class=\"card\">\n    <div class=\"card-header\"><b>Upload Chaincode Files</b></div>\n    <div class=\"card-body\">\n      <div class=\"row\">\n        <div class=\"col-sm-9\">\n          <div class=\"custom-file\">\n            <input type=\"file\" ng2FileSelect [uploader]=\"uploader\" class=\"custom-file-input\" id=\"customFile\"\n              name=\"filename\" multiple/>\n            <label class=\"custom-file-label\" for=\"customFile\"><b>Choose file</b></label>\n          </div>\n        </div>\n        <div class=\"col-sm-3\">\n          <button type=\"button\" class=\"btn btn-success mx-auto d-block\" (click)=\"uploader.uploadAll()\">Upload</button>\n        </div>\n      </div>\n      <br>\n      <div class=\"row\">\n        <div class=\"col-sm-2\">\n\n        </div>\n        <div class=\"col-sm-8\">\n          <div class=\"table-responsive\">\n            <table class=\"table table-borderless\">\n              <tbody>\n                <tr *ngFor=\"let item of uploader.queue\">\n                  <td style=\"background-color: darkgray;\">\n                    <div class=\"rounded\">\n                      <strong>{{ item?.file?.name }}</strong>\n                      <button type=\"button\" class=\"btn btn-danger\" (click)=\"item.remove()\"\n                        style=\"float: right; border-radius: 50px;\">Remove</button>\n                    </div>\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n        <div class=\"col-sm-2\">\n\n        </div>\n      </div>\n    </div>\n  </div>\n  <br>\n  <div class=\"card\">\n    <div class=\"card-header\"><b>Install, Instantiate, Query & Upgrade Chaincode</b></div>\n    <div class=\"card-body\">\n      <div class=\"row\">\n        <div class=\"col\">\n          <button type=\"button\" class=\"btn btn-success mx-auto d-block\" (click)=\"installChaincode()\">Install</button>\n        </div>\n        <div class=\"col\">\n          <button type=\"button\" class=\"btn btn-success mx-auto d-block\">Instantiate</button>\n        </div>\n        <div class=\"col\">\n          <button type=\"button\" class=\"btn btn-success mx-auto d-block\">Query/Invoke</button>\n        </div>\n        <div class=\"col\">\n          <button type=\"button\" class=\"btn btn-success mx-auto d-block\" (click)=\"upgradeChaincode()\">Upgrade</button>\n        </div>\n      </div>\n    </div>\n  </div>\n  <br>\n  <div class=\"card\">\n    <div class=\"card-header\"><b>Generate File For Swagger</b></div>\n    <div class=\"card-body\">\n      <button type=\"button\" class=\"btn btn-success mx-auto d-block\" (click)=\"generateSwaggerFile()\">Generate\n        JSON</button>\n    </div>\n  </div>\n  <br>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/page-tabs/page-tabs.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page-tabs/page-tabs.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPageTabsPageTabsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-xl-3\">\n      <ul class=\"nav nav-pills flex-column\" id=\"myTab\" role=\"tablist\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link active\" id=\"home-tab\" data-toggle=\"tab\" routerLink=\"/prerequisite\" role=\"tab\"\n            aria-controls=\"prerequisite\" aria-selected=\"true\"><fa-icon [icon]=\"faCloudDownloadAlt\"></fa-icon><b>Pre-requisites</b></a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" id=\"profile-tab\" data-toggle=\"tab\" routerLink=\"/network\" role=\"tab\" aria-controls=\"network\"\n            aria-selected=\"false\"><fa-icon [icon]=\"faNetworkWired\"></fa-icon><b>Network</b></a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" id=\"profile-tab\" data-toggle=\"tab\" routerLink=\"/updatenetwork\" role=\"tab\" aria-controls=\"update\"\n            aria-selected=\"false\"><fa-icon [icon]=\"faNetworkWired\"></fa-icon><b>Update</b></a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" id=\"contact-tab\" data-toggle=\"tab\" routerLink=\"/chaincode\" role=\"tab\" aria-controls=\"chaincode\"\n            aria-selected=\"false\"><fa-icon [icon]=\"faFileCode\"></fa-icon><b>Chaincode</b></a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" id=\"contact-tab\" data-toggle=\"tab\" routerLink=\"/identities\" role=\"tab\"\n            aria-controls=\"identities\" aria-selected=\"false\"><fa-icon [icon]=\"faFingerprint\"></fa-icon><b>Identities</b></a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" id=\"contact-tab\" data-toggle=\"tab\" routerLink=\"/explorer\" role=\"tab\" aria-controls=\"explorer\"\n            aria-selected=\"false\"><fa-icon [icon]=\"faCubes\"></fa-icon><b>Explorer</b></a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" id=\"contact-tab\" data-toggle=\"tab\" routerLink=\"/swagger\" role=\"tab\" aria-controls=\"swagger\"\n            aria-selected=\"false\"><fa-icon [icon]=\"faGlobe\"></fa-icon><b>Swagger APIs</b></a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" id=\"contact-tab\" data-toggle=\"tab\" routerLink=\"/docker\" role=\"tab\" aria-controls=\"docker\"\n            aria-selected=\"false\"><fa-icon [icon]=\"faServer\"></fa-icon><b>Docker Data</b></a>\n        </li>\n      </ul>\n    </div>\n    <div class=\"col-xl-9\">\n      <div class=\"tab-content\" id=\"myTabContent\">\n        <div class=\"tab-pane fade show active\" id=\"prerequisite\" role=\"tabpanel\" aria-labelledby=\"prerequisite-tab\">\n          <router-outlet></router-outlet>\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n\n</div>\n<!-- /.container -->\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/update-network/update-network.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/update-network/update-network.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUpdateNetworkUpdateNetworkComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n  <form [formGroup]=\"updateFormData\">\n    <div class=\"row\">\n      <div class=\"col-sm-8\">\n        <div class=\"card\">\n          <div class=\"card-header\"><b>Orderer Details</b></div>\n          <div class=\"card-body\">\n            <div class=\"row\">\n              <div class=\"col\">\n                <label for=\"odrname\"><b>Name :</b></label>\n                <input type=\"text\" class=\"form-control\" id=\"odrname\" placeholder=\"Orderer\" formControlName=\"ordererName\" >\n              </div>\n              <div class=\"col\">\n                <label for=\"domain\"><b>Domain :</b></label>\n                <input type=\"text\" class=\"form-control\" id=\"domain\" placeholder=\"example.com\" formControlName=\"domainName\" >\n              </div>\n            </div>\n            <br>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-sm-4\">\n        <div class=\"card\">\n          <div class=\"card-header\"><b>Host Details</b></div>\n          <div class=\"card-body\">\n            <div class=\"row\">\n              <div class=\"col\">\n                <label for=\"host\"><b>Host :</b></label>\n                <input type=\"text\" class=\"form-control\" id=\"host\" placeholder=\"orderer\" formControlName=\"hostName\">\n              </div>\n            </div>\n            <br>\n          </div>\n        </div>\n      </div>\n    </div>\n    <br>\n    <div class=\"card\">\n      <div class=\"card-header\"><b>Organization Details</b><button style=\"float: right;\">\n          <fa-icon [icon]=\"faPlus\"></fa-icon>\n        </button></div>\n      <div class=\"card-body\">\n        <div class=\"row\">\n          <div class=\"col\">\n            <label for=\"orgname\"><b>Org Name :</b></label>\n            <input type=\"text\" class=\"form-control\" id=\"orgname\" placeholder=\"org1\" formControlName=\"orgName\">\n          </div>\n          <div class=\"col\">\n            <label for=\"msp\"><b>Org MSP :</b></label>\n            <input type=\"text\" class=\"form-control\" id=\"msp\" placeholder=\"org1MSP\" formControlName=\"orgMsp\">\n          </div>\n        </div>\n        <br>\n        <br>\n        <div class=\"card\">\n          <div class=\"card-header\"><b>Peer Details</b><button style=\"float: right;\">\n              <fa-icon [icon]=\"faPlus\"></fa-icon>\n            </button></div>\n          <div class=\"card-body\">\n            <div class=\"row\">\n              <div class=\"col\">\n                <label for=\"peername\"><b>Peer Count :</b></label>\n                <input type=\"text\" class=\"form-control\" id=\"peername\" placeholder=\"1\" formControlName=\"peercount\">\n              </div>\n              <div class=\"col\">\n                <label for=\"peerport\"><b>User Count :</b></label>\n                <input type=\"text\" class=\"form-control\" id=\"peerport\" placeholder=\"1\" formControlName=\"userscount\">\n              </div>\n            </div>\n            <br>\n          </div>\n        </div>\n        <div class=\"card\">\n          <div class=\"card-header\"><b>Channel Details</b><button style=\"float: right;\">\n              <fa-icon [icon]=\"faPlus\"></fa-icon>\n            </button></div>\n          <div class=\"card-body\">\n            <div class=\"row\">\n              <div class=\"col\">\n                <label for=\"chname\"><b>Channel Name :</b></label>\n                <input type=\"text\" class=\"form-control\" id=\"chname\" placeholder=\"mychannel\" formControlName=\"channelName\">\n              </div>\n            </div>\n            <br>\n          </div>\n        </div>\n        <br>\n      </div>\n    </div>\n    <br>\n    <button type=\"button\" class=\"btn btn-success mx-auto d-block\" (click)=\"onClickModify()\" >Update</button>\n    <br>\n  </form>\n</div>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _install_prerequisites_install_prerequisites_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./install-prerequisites/install-prerequisites.component */
    "./src/app/install-prerequisites/install-prerequisites.component.ts");
    /* harmony import */


    var _create_update_network_create_update_network_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./create-update-network/create-update-network.component */
    "./src/app/create-update-network/create-update-network.component.ts");
    /* harmony import */


    var _update_network_update_network_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./update-network/update-network.component */
    "./src/app/update-network/update-network.component.ts");
    /* harmony import */


    var _install_update_chaincode_install_update_chaincode_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./install-update-chaincode/install-update-chaincode.component */
    "./src/app/install-update-chaincode/install-update-chaincode.component.ts");
    /* harmony import */


    var _create_identities_create_identities_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./create-identities/create-identities.component */
    "./src/app/create-identities/create-identities.component.ts");
    /* harmony import */


    var _custom_explorer_custom_explorer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./custom-explorer/custom-explorer.component */
    "./src/app/custom-explorer/custom-explorer.component.ts");
    /* harmony import */


    var _custom_swagger_api_custom_swagger_api_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./custom-swagger-api/custom-swagger-api.component */
    "./src/app/custom-swagger-api/custom-swagger-api.component.ts");
    /* harmony import */


    var _docker_container_logs_docker_container_logs_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./docker-container-logs/docker-container-logs.component */
    "./src/app/docker-container-logs/docker-container-logs.component.ts");

    var routes = [{
      path: 'prerequisite',
      component: _install_prerequisites_install_prerequisites_component__WEBPACK_IMPORTED_MODULE_3__["InstallPrerequisitesComponent"]
    }, {
      path: 'network',
      component: _create_update_network_create_update_network_component__WEBPACK_IMPORTED_MODULE_4__["CreateUpdateNetworkComponent"]
    }, {
      path: 'updatenetwork',
      component: _update_network_update_network_component__WEBPACK_IMPORTED_MODULE_5__["UpdateNetworkComponent"]
    }, {
      path: 'chaincode',
      component: _install_update_chaincode_install_update_chaincode_component__WEBPACK_IMPORTED_MODULE_6__["InstallUpdateChaincodeComponent"]
    }, {
      path: 'identities',
      component: _create_identities_create_identities_component__WEBPACK_IMPORTED_MODULE_7__["CreateIdentitiesComponent"]
    }, {
      path: 'explorer',
      component: _custom_explorer_custom_explorer_component__WEBPACK_IMPORTED_MODULE_8__["CustomExplorerComponent"]
    }, {
      path: 'swagger',
      component: _custom_swagger_api_custom_swagger_api_component__WEBPACK_IMPORTED_MODULE_9__["CustomSwaggerApiComponent"]
    }, {
      path: 'docker',
      component: _docker_container_logs_docker_container_logs_component__WEBPACK_IMPORTED_MODULE_10__["DockerContainerLogsComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        onSameUrlNavigation: 'reload'
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'custom-blockchain-framework';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
    /* harmony import */


    var ng2_file_upload__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ng2-file-upload */
    "./node_modules/ng2-file-upload/fesm2015/ng2-file-upload.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _page_tabs_page_tabs_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./page-tabs/page-tabs.component */
    "./src/app/page-tabs/page-tabs.component.ts");
    /* harmony import */


    var _create_identities_create_identities_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./create-identities/create-identities.component */
    "./src/app/create-identities/create-identities.component.ts");
    /* harmony import */


    var _create_update_network_create_update_network_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./create-update-network/create-update-network.component */
    "./src/app/create-update-network/create-update-network.component.ts");
    /* harmony import */


    var _update_network_update_network_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./update-network/update-network.component */
    "./src/app/update-network/update-network.component.ts");
    /* harmony import */


    var _install_update_chaincode_install_update_chaincode_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./install-update-chaincode/install-update-chaincode.component */
    "./src/app/install-update-chaincode/install-update-chaincode.component.ts");
    /* harmony import */


    var _install_prerequisites_install_prerequisites_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./install-prerequisites/install-prerequisites.component */
    "./src/app/install-prerequisites/install-prerequisites.component.ts");
    /* harmony import */


    var _custom_explorer_custom_explorer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./custom-explorer/custom-explorer.component */
    "./src/app/custom-explorer/custom-explorer.component.ts");
    /* harmony import */


    var _custom_swagger_api_custom_swagger_api_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./custom-swagger-api/custom-swagger-api.component */
    "./src/app/custom-swagger-api/custom-swagger-api.component.ts");
    /* harmony import */


    var _docker_container_logs_docker_container_logs_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./docker-container-logs/docker-container-logs.component */
    "./src/app/docker-container-logs/docker-container-logs.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _page_tabs_page_tabs_component__WEBPACK_IMPORTED_MODULE_7__["PageTabsComponent"], _create_identities_create_identities_component__WEBPACK_IMPORTED_MODULE_8__["CreateIdentitiesComponent"], _create_update_network_create_update_network_component__WEBPACK_IMPORTED_MODULE_9__["CreateUpdateNetworkComponent"], _update_network_update_network_component__WEBPACK_IMPORTED_MODULE_10__["UpdateNetworkComponent"], _install_update_chaincode_install_update_chaincode_component__WEBPACK_IMPORTED_MODULE_11__["InstallUpdateChaincodeComponent"], _install_prerequisites_install_prerequisites_component__WEBPACK_IMPORTED_MODULE_12__["InstallPrerequisitesComponent"], _custom_explorer_custom_explorer_component__WEBPACK_IMPORTED_MODULE_13__["CustomExplorerComponent"], _custom_swagger_api_custom_swagger_api_component__WEBPACK_IMPORTED_MODULE_14__["CustomSwaggerApiComponent"], _docker_container_logs_docker_container_logs_component__WEBPACK_IMPORTED_MODULE_15__["DockerContainerLogsComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"], ng2_file_upload__WEBPACK_IMPORTED_MODULE_4__["FileUploadModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/create-identities/create-identities.component.css":
  /*!*******************************************************************!*\
    !*** ./src/app/create-identities/create-identities.component.css ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCreateIdentitiesCreateIdentitiesComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".card-header {\n  background-color: lightslategray;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3JlYXRlLWlkZW50aXRpZXMvY3JlYXRlLWlkZW50aXRpZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdDQUFnQztBQUNsQyIsImZpbGUiOiJzcmMvYXBwL2NyZWF0ZS1pZGVudGl0aWVzL2NyZWF0ZS1pZGVudGl0aWVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNsYXRlZ3JheTtcbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/create-identities/create-identities.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/create-identities/create-identities.component.ts ***!
    \******************************************************************/

  /*! exports provided: CreateIdentitiesComponent */

  /***/
  function srcAppCreateIdentitiesCreateIdentitiesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateIdentitiesComponent", function () {
      return CreateIdentitiesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");

    var CreateIdentitiesComponent =
    /*#__PURE__*/
    function () {
      function CreateIdentitiesComponent(formBuilder, http, config, modalService) {
        _classCallCheck(this, CreateIdentitiesComponent);

        this.formBuilder = formBuilder;
        this.http = http;
        this.modalService = modalService; // customize default values of modals used by this component tree

        config.backdrop = 'static';
        config.keyboard = false;
        this.formData = this.formBuilder.group({
          mspNameadm: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          mspNameusr: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          admName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          idName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
      }

      _createClass(CreateIdentitiesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onClickRegisterAdmin",
        value: function onClickRegisterAdmin() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var userData, payload;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    userData = this.formData.value;
                    console.log("clicked to Register Admin ", userData);
                    payload = {
                      "msp": userData.mspNameadm,
                      "username": userData.admName
                    };
                    this.http.post('/identities/regAdmin', {
                      payload: payload
                    }).subscribe(function (data) {
                      console.log("Admin registration is successful ", data);
                    }, function (error) {
                      console.log("Error", error);
                      alert(JSON.stringify(error));
                    });

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "onClickRegisterUser",
        value: function onClickRegisterUser() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var userData, payload;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    userData = this.formData.value;
                    console.log("clicked to Register User ", userData);
                    payload = {
                      "msp": userData.mspNameusr,
                      "username": userData.idName
                    };
                    this.http.post('/identities/regUser', {
                      payload: payload
                    }).subscribe(function (data) {
                      console.log("User registration is successful ", data);
                    }, function (error) {
                      console.log("Error", error);
                      alert(JSON.stringify(error));
                    });

                  case 4:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }]);

      return CreateIdentitiesComponent;
    }();

    CreateIdentitiesComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }, {
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModalConfig"]
      }, {
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]
      }];
    };

    CreateIdentitiesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-create-identities',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./create-identities.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/create-identities/create-identities.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./create-identities.component.css */
      "./src/app/create-identities/create-identities.component.css")).default]
    })], CreateIdentitiesComponent);
    /***/
  },

  /***/
  "./src/app/create-update-network/create-update-network.component.css":
  /*!***************************************************************************!*\
    !*** ./src/app/create-update-network/create-update-network.component.css ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCreateUpdateNetworkCreateUpdateNetworkComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".card-header {\n  background-color: lightslategray;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3JlYXRlLXVwZGF0ZS1uZXR3b3JrL2NyZWF0ZS11cGRhdGUtbmV0d29yay5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0NBQWdDO0FBQ2xDIiwiZmlsZSI6InNyYy9hcHAvY3JlYXRlLXVwZGF0ZS1uZXR3b3JrL2NyZWF0ZS11cGRhdGUtbmV0d29yay5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRzbGF0ZWdyYXk7XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/create-update-network/create-update-network.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/create-update-network/create-update-network.component.ts ***!
    \**************************************************************************/

  /*! exports provided: CreateUpdateNetworkComponent */

  /***/
  function srcAppCreateUpdateNetworkCreateUpdateNetworkComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateUpdateNetworkComponent", function () {
      return CreateUpdateNetworkComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @fortawesome/free-solid-svg-icons */
    "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _models_application_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../models/application.model */
    "./src/app/models/application.model.ts");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! jquery */
    "./node_modules/jquery/dist/jquery.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_5___default =
    /*#__PURE__*/
    __webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);

    var CreateUpdateNetworkComponent =
    /*#__PURE__*/
    function () {
      function CreateUpdateNetworkComponent(httpClient) {
        _classCallCheck(this, CreateUpdateNetworkComponent);

        this.httpClient = httpClient;
        this.faPlus = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faPlus"];
      }

      _createClass(CreateUpdateNetworkComponent, [{
        key: "openModal",
        value: function openModal() {
          this.showModal = true;
          this.spinnerModal = true;
        }
      }, {
        key: "hideModal",
        value: function hideModal() {
          this.showModal = false;
          jquery__WEBPACK_IMPORTED_MODULE_5__(this).find('.alert-success').remove();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.createNetwork = new _models_application_model__WEBPACK_IMPORTED_MODULE_4__["CreateNetwork"]();
        }
      }, {
        key: "createCryptoFile",
        value: function createCryptoFile() {
          var _this = this;

          this.httpClient.post('/network/createCryptoFile', this.createNetwork).subscribe(function (response) {
            var resp = JSON.parse(JSON.stringify(response));
            console.log(resp);

            if (resp.success) {
              _this.openModal(); // tslint:disable-next-line: max-line-length


              jquery__WEBPACK_IMPORTED_MODULE_5__('.modal-body').append('<div class="alert alert-success" role="alert"><strong>Success !!</strong> Crypto config file created.</div>');

              _this.createConfigFile(_this.createNetwork);
            }
          });
        }
      }, {
        key: "createConfigFile",
        value: function createConfigFile(network) {
          var _this2 = this;

          this.httpClient.post('/network/createConfigFile', network).subscribe(function (response) {
            var resp = JSON.parse(JSON.stringify(response));
            console.log(resp);

            if (resp.success) {
              // tslint:disable-next-line: max-line-length
              jquery__WEBPACK_IMPORTED_MODULE_5__('.modal-body').append('<div class="alert alert-success" role="alert"><strong>Success !!</strong> Config tx file created.</div>');

              _this2.generateCertsAndConfigFiles();
            }
          });
        }
      }, {
        key: "generateCertsAndConfigFiles",
        value: function generateCertsAndConfigFiles() {
          var _this3 = this;

          this.httpClient.get('/network/generateCertsAndConfigFiles').subscribe(function (response) {
            var resp = JSON.parse(JSON.stringify(response));
            console.log(resp);

            if (resp.success) {
              // tslint:disable-next-line: max-line-length
              jquery__WEBPACK_IMPORTED_MODULE_5__('.modal-body').append('<div class="alert alert-success" role="alert"><strong>Success !!</strong> Certificates and configuration files generated.</div>');

              _this3.createDockerFile(_this3.createNetwork);
            }
          });
        }
      }, {
        key: "createDockerFile",
        value: function createDockerFile(network) {
          var _this4 = this;

          this.httpClient.post('/network/createDockerFile', network).subscribe(function (response) {
            var resp = JSON.parse(JSON.stringify(response));

            if (resp.success) {
              // tslint:disable-next-line: max-line-length
              jquery__WEBPACK_IMPORTED_MODULE_5__('.modal-body').append('<div class="alert alert-success" role="alert"><strong>Success !!</strong> Docker file created.</div>');

              _this4.startNetwork(_this4.createNetwork);
            }
          });
        }
      }, {
        key: "startNetwork",
        value: function startNetwork(network) {
          this.httpClient.post('/network/startNetwork', network).subscribe(function (response) {
            var resp = JSON.parse(JSON.stringify(response));

            if (resp.success) {
              // tslint:disable-next-line: max-line-length
              jquery__WEBPACK_IMPORTED_MODULE_5__('.modal-body').append('<div class="alert alert-success" role="alert"><strong>Success !!</strong> Network is up and connection file generated.</div>');
            }
          });
        }
      }]);

      return CreateUpdateNetworkComponent;
    }();

    CreateUpdateNetworkComponent.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    CreateUpdateNetworkComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-create-update-network',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./create-update-network.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/create-update-network/create-update-network.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./create-update-network.component.css */
      "./src/app/create-update-network/create-update-network.component.css")).default]
    })], CreateUpdateNetworkComponent);
    /***/
  },

  /***/
  "./src/app/custom-explorer/custom-explorer.component.css":
  /*!***************************************************************!*\
    !*** ./src/app/custom-explorer/custom-explorer.component.css ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCustomExplorerCustomExplorerComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".wht_blk {\n  background: #FFFFFF;\n  border-radius: 3px;\n  padding: 15px;\n}\n.wht_blk_1 {\n  color: #0033a0;\n  text-align: center;\n  border-top: 7px solid #c800a1;\n  border-radius: 5px 5px 3px 3px;\n  margin-bottom: 10px;\n}\n.wht_blk_2 {\n  color: #0033a0;\n  text-align: center;\n  border-top: 7px solid #ff8f1c;\n  border-radius: 5px 5px 3px 3px;\n  margin-bottom: 10px;\n}\n.wht_blk_3 {\n  color: #0033a0;\n  text-align: center;\n  border-top: 7px solid #840b55;\n  border-radius: 5px 5px 3px 3px;\n}\n.wht_blk_4 {\n  color: #0033a0;\n  text-align: center;\n  border-top: 7px solid #f4633a;\n  border-radius: 5px 5px 3px 3px;\n}\n.content_section .left_sec_3 {\n  width: 100%;\n  background: #d4d8db;\n  display: table-cell;\n  padding: 30px 30px 30px 30px;\n}\n.content_section .right_sec_3 {\n  width: 67%;\n  display: table-cell;\n  padding: 0px 85px 30px 0px;\n  background: #d4d8db;\n}\n.content_section .left_sec_3 h3, .content_section .right_sec_3 h3 {\n  font-size: 18px;\n  font-weight: normal;\n  color: #0033a0;\n  text-transform: uppercase;\n  margin: 25px 15px 25px 15px;\n}\n.content_section {\n  display: table;\n  width: 100%;\n}\n.wht_blk span {\n  font-weight: bold;\n  display: block;\n}\n.wht_blk span.green {\n  font-weight: bold;\n  color: #00b140;\n  display: block;\n  margin-bottom: 5px;\n  font-size: 14px;\n}\nimg {\n  vertical-align: middle;\n}\n.modal {\n  width: 100%;\n  height: 50%;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  margin: auto;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdG9tLWV4cGxvcmVyL2N1c3RvbS1leHBsb3Jlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixhQUFhO0FBQ2Y7QUFDQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsNkJBQTZCO0VBQzdCLDhCQUE4QjtFQUM5QixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsNkJBQTZCO0VBQzdCLDhCQUE4QjtFQUM5QixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsNkJBQTZCO0VBQzdCLDhCQUE4QjtBQUNoQztBQUNBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtFQUNsQiw2QkFBNkI7RUFDN0IsOEJBQThCO0FBQ2hDO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQiw0QkFBNEI7QUFDOUI7QUFDQTtFQUNFLFVBQVU7RUFDVixtQkFBbUI7RUFDbkIsMEJBQTBCO0VBQzFCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLDJCQUEyQjtBQUM3QjtBQUNBO0VBQ0UsY0FBYztFQUNkLFdBQVc7QUFDYjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixRQUFRO0VBQ1IsU0FBUztFQUNULE9BQU87RUFDUCxZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9jdXN0b20tZXhwbG9yZXIvY3VzdG9tLWV4cGxvcmVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2h0X2JsayB7XG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgcGFkZGluZzogMTVweDtcbn1cbi53aHRfYmxrXzEge1xuICBjb2xvcjogIzAwMzNhMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItdG9wOiA3cHggc29saWQgI2M4MDBhMTtcbiAgYm9yZGVyLXJhZGl1czogNXB4IDVweCAzcHggM3B4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLndodF9ibGtfMiB7XG4gIGNvbG9yOiAjMDAzM2EwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci10b3A6IDdweCBzb2xpZCAjZmY4ZjFjO1xuICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDNweCAzcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4ud2h0X2Jsa18zIHtcbiAgY29sb3I6ICMwMDMzYTA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXRvcDogN3B4IHNvbGlkICM4NDBiNTU7XG4gIGJvcmRlci1yYWRpdXM6IDVweCA1cHggM3B4IDNweDtcbn1cbi53aHRfYmxrXzQge1xuICBjb2xvcjogIzAwMzNhMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItdG9wOiA3cHggc29saWQgI2Y0NjMzYTtcbiAgYm9yZGVyLXJhZGl1czogNXB4IDVweCAzcHggM3B4O1xufVxuLmNvbnRlbnRfc2VjdGlvbiAubGVmdF9zZWNfMyB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjZDRkOGRiO1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICBwYWRkaW5nOiAzMHB4IDMwcHggMzBweCAzMHB4O1xufVxuLmNvbnRlbnRfc2VjdGlvbiAucmlnaHRfc2VjXzMge1xuICB3aWR0aDogNjclO1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICBwYWRkaW5nOiAwcHggODVweCAzMHB4IDBweDtcbiAgYmFja2dyb3VuZDogI2Q0ZDhkYjtcbn1cbi5jb250ZW50X3NlY3Rpb24gLmxlZnRfc2VjXzMgaDMsIC5jb250ZW50X3NlY3Rpb24gLnJpZ2h0X3NlY18zIGgzIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBjb2xvcjogIzAwMzNhMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbWFyZ2luOiAyNXB4IDE1cHggMjVweCAxNXB4O1xufVxuLmNvbnRlbnRfc2VjdGlvbiB7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICB3aWR0aDogMTAwJTtcbn1cbi53aHRfYmxrIHNwYW4ge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4ud2h0X2JsayBzcGFuLmdyZWVuIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjMDBiMTQwO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBmb250LXNpemU6IDE0cHg7XG59XG5pbWcge1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuLm1vZGFsIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/custom-explorer/custom-explorer.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/custom-explorer/custom-explorer.component.ts ***!
    \**************************************************************/

  /*! exports provided: CustomExplorerComponent */

  /***/
  function srcAppCustomExplorerCustomExplorerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomExplorerComponent", function () {
      return CustomExplorerComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _models_application_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../models/application.model */
    "./src/app/models/application.model.ts");
    /* harmony import */


    var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @fortawesome/free-solid-svg-icons */
    "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");

    var CustomExplorerComponent =
    /*#__PURE__*/
    function () {
      function CustomExplorerComponent(httpClient) {
        _classCallCheck(this, CustomExplorerComponent);

        this.httpClient = httpClient;
        this.faCode = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faCode"];
      }

      _createClass(CustomExplorerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.explorerLoginData = new _models_application_model__WEBPACK_IMPORTED_MODULE_3__["ExplorerLogin"]();
          this.explorerMainPageData = new _models_application_model__WEBPACK_IMPORTED_MODULE_3__["ExplorerMainPageData"]();
          this.jsonViewer = new _models_application_model__WEBPACK_IMPORTED_MODULE_3__["JsonViewer"]();
          this.showModal = true;
        }
      }, {
        key: "fetchData",
        value: function fetchData() {
          var _this5 = this;

          this.httpClient.post('/explorer/getMainPageData', this.explorerLoginData).subscribe(function (response) {
            _this5.showModal = false;
            var totalBlockData = JSON.parse(response.block);
            _this5.explorerMainPageData.currentBlockHash = response.currentBlockHash;
            _this5.explorerMainPageData.previousBlockHash = response.previousBlockHash;
            _this5.explorerMainPageData.nodes = response.totalNodes;
            _this5.explorerMainPageData.totalBlocks = response.totalBlocks;
            _this5.explorerMainPageData.currentBlockNo = response.totalBlocks;
            _this5.explorerMainPageData.fullBlockResponse = totalBlockData; // tslint:disable-next-line: prefer-for-of

            for (var i = 0; i < totalBlockData.data.data.length; i++) {
              _this5.explorerMainPageData.txnId = totalBlockData.data.data[i].payload.header.channel_header.tx_id;
              _this5.explorerMainPageData.txnCreator = totalBlockData.data.data[i].payload.header.signature_header.creator.Mspid;
            }
          });
        }
      }, {
        key: "previousBlockData",
        value: function previousBlockData() {
          var _this6 = this;

          this.blockData.orgname = this.explorerLoginData.orgname;
          this.blockData.username = this.explorerLoginData.username;
          this.blockData.peername = this.explorerLoginData.peername;
          this.blockData.blocknuber = this.explorerMainPageData.currentBlockNo - 1;

          if (this.blockData.blocknuber > 1) {
            this.httpClient.post('/explorer/blockInfo', this.blockData).subscribe(function (response) {
              var totalBlockData = JSON.parse(response.block);
              _this6.explorerMainPageData.currentBlockHash = totalBlockData.currentBlockHash;
              _this6.explorerMainPageData.previousBlockHash = totalBlockData.previousBlockHash;
              _this6.explorerMainPageData.currentBlockNo = totalBlockData.currentBlock;
              _this6.explorerMainPageData.fullBlockResponse = totalBlockData; // tslint:disable-next-line: prefer-for-of

              for (var i = 0; i < totalBlockData.data.data.length; i++) {
                _this6.explorerMainPageData.txnId = totalBlockData.data.data[i].payload.header.channel_header.tx_id;
                _this6.explorerMainPageData.txnCreator = totalBlockData.data.data[i].payload.header.signature_header.creator.Mspid;
              }
            });
          } else {
            alert('This is the last block or the genesis block !');
          }
        }
      }, {
        key: "nextBlockData",
        value: function nextBlockData() {
          var _this7 = this;

          this.blockData.orgname = this.explorerLoginData.orgname;
          this.blockData.username = this.explorerLoginData.username;
          this.blockData.peername = this.explorerLoginData.peername;
          this.blockData.blocknuber = this.explorerMainPageData.currentBlockNo + 1;

          if (this.blockData.blocknuber >= this.explorerMainPageData.totalBlocks) {
            this.httpClient.post('/explorer/blockInfo', this.blockData).subscribe(function (response) {
              var totalBlockData = JSON.parse(response.block);
              _this7.explorerMainPageData.currentBlockHash = totalBlockData.currentBlockHash;
              _this7.explorerMainPageData.previousBlockHash = totalBlockData.previousBlockHash;
              _this7.explorerMainPageData.fullBlockResponse = totalBlockData; // tslint:disable-next-line: prefer-for-of

              for (var i = 0; i < totalBlockData.data.data.length; i++) {
                _this7.explorerMainPageData.txnId = totalBlockData.data.data[i].payload.header.channel_header.tx_id;
                _this7.explorerMainPageData.txnCreator = totalBlockData.data.data[i].payload.header.signature_header.creator.Mspid;
              }
            });
          } else {
            alert('This is the last committed block in the network !');
          }
        }
      }, {
        key: "getTxnIdInfo",
        value: function getTxnIdInfo(id) {
          var _this8 = this;

          this.txnData.orgname = this.explorerLoginData.orgname;
          this.txnData.username = this.explorerLoginData.username;
          this.txnData.peername = this.explorerLoginData.peername;
          this.txnData.txnId = id;
          this.httpClient.post('/explorer/txnInfo', this.txnData).subscribe(function (response) {
            _this8.explorerMainPageData.fullTxnResponse = JSON.parse(response.txn);

            _this8.showfullJSON('txn');
          });
        }
      }, {
        key: "hideModal",
        value: function hideModal() {
          this.showModal = false;
        }
      }, {
        key: "hideJSONModal",
        value: function hideJSONModal() {
          this.showJSONModal = false;
        }
      }, {
        key: "showfullJSON",
        value: function showfullJSON(type) {
          this.showJSONModal = true;

          if (type === 'block') {
            this.jsonViewer.header = 'BLOCK DETAILS';
            this.jsonViewer.response = this.explorerMainPageData.fullBlockResponse;
          } else if (type === 'txn') {
            this.jsonViewer.header = 'TRANSACTION DETAILS';
            this.jsonViewer.response = this.explorerMainPageData.fullTxnResponse;
          }
        }
      }]);

      return CustomExplorerComponent;
    }();

    CustomExplorerComponent.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    CustomExplorerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-custom-explorer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./custom-explorer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/custom-explorer/custom-explorer.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./custom-explorer.component.css */
      "./src/app/custom-explorer/custom-explorer.component.css")).default]
    })], CustomExplorerComponent);
    /***/
  },

  /***/
  "./src/app/custom-swagger-api/custom-swagger-api.component.css":
  /*!*********************************************************************!*\
    !*** ./src/app/custom-swagger-api/custom-swagger-api.component.css ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCustomSwaggerApiCustomSwaggerApiComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbS1zd2FnZ2VyLWFwaS9jdXN0b20tc3dhZ2dlci1hcGkuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/custom-swagger-api/custom-swagger-api.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/custom-swagger-api/custom-swagger-api.component.ts ***!
    \********************************************************************/

  /*! exports provided: CustomSwaggerApiComponent */

  /***/
  function srcAppCustomSwaggerApiCustomSwaggerApiComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomSwaggerApiComponent", function () {
      return CustomSwaggerApiComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var CustomSwaggerApiComponent =
    /*#__PURE__*/
    function () {
      function CustomSwaggerApiComponent(el) {
        _classCallCheck(this, CustomSwaggerApiComponent);

        this.el = el;
      }

      _createClass(CustomSwaggerApiComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var ui = SwaggerUIBundle({
            dom_id: '#swagger-editor',
            layout: 'BaseLayout',
            presets: [SwaggerUIBundle.presets.apis, SwaggerUIBundle.SwaggerUIStandalonePreset],
            url: 'https://petstore.swagger.io/v2/swagger.json',
            docExpansion: 'none',
            operationsSorter: 'alpha'
          });
        }
      }]);

      return CustomSwaggerApiComponent;
    }();

    CustomSwaggerApiComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }];
    };

    CustomSwaggerApiComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-custom-swagger-api',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./custom-swagger-api.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/custom-swagger-api/custom-swagger-api.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./custom-swagger-api.component.css */
      "./src/app/custom-swagger-api/custom-swagger-api.component.css")).default]
    })], CustomSwaggerApiComponent);
    /***/
  },

  /***/
  "./src/app/docker-container-logs/docker-container-logs.component.css":
  /*!***************************************************************************!*\
    !*** ./src/app/docker-container-logs/docker-container-logs.component.css ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDockerContainerLogsDockerContainerLogsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RvY2tlci1jb250YWluZXItbG9ncy9kb2NrZXItY29udGFpbmVyLWxvZ3MuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/docker-container-logs/docker-container-logs.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/docker-container-logs/docker-container-logs.component.ts ***!
    \**************************************************************************/

  /*! exports provided: DockerContainerLogsComponent */

  /***/
  function srcAppDockerContainerLogsDockerContainerLogsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DockerContainerLogsComponent", function () {
      return DockerContainerLogsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! jquery */
    "./node_modules/jquery/dist/jquery.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_3___default =
    /*#__PURE__*/
    __webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);

    var DockerContainerLogsComponent =
    /*#__PURE__*/
    function () {
      function DockerContainerLogsComponent(http) {
        _classCallCheck(this, DockerContainerLogsComponent);

        this.http = http;
        this.isShowTable = true;
        this.isOkModal = true;
        this.isSpinner = true;
        this.isSpinnerModal = false;
      }

      _createClass(DockerContainerLogsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "RefreshAndShowContainersStatus",
        value: function RefreshAndShowContainersStatus() {
          var _this9 = this;

          console.log("inside refresh"); // showing table 

          this.http.post('/docker/refreshAndShowContainersStatus', null).subscribe(function (data) {
            var table = JSON.parse(JSON.stringify(data));
            console.log("POST Request is successful Table data", table);
            var CONTAINER = table;
            _this9.containers = CONTAINER;
          }, function (error) {
            console.log("Error", error);
            alert(JSON.stringify(error));
          });
        }
      }, {
        key: "getContainerLogs",
        value: function getContainerLogs(container_id) {
          var data = {
            "container_id": container_id
          };
          jquery__WEBPACK_IMPORTED_MODULE_3__("#openModal").click();
          jquery__WEBPACK_IMPORTED_MODULE_3__('#dockerContainerLogs').html("");
          this.http.post('/docker/getContainerLogs', {
            data: data
          }).subscribe(function (data) {
            var logs = JSON.parse(JSON.stringify(data));
            console.log(logs);
            jquery__WEBPACK_IMPORTED_MODULE_3__('#dockerContainerLogs').append(logs.stderr);
          }, function (error) {
            console.log("Error", error);
            alert(JSON.stringify(error));
          });
        }
      }]);

      return DockerContainerLogsComponent;
    }();

    DockerContainerLogsComponent.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    DockerContainerLogsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-docker-container-logs',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./docker-container-logs.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/docker-container-logs/docker-container-logs.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./docker-container-logs.component.css */
      "./src/app/docker-container-logs/docker-container-logs.component.css")).default]
    })], DockerContainerLogsComponent);
    /***/
  },

  /***/
  "./src/app/install-prerequisites/install-prerequisites.component.css":
  /*!***************************************************************************!*\
    !*** ./src/app/install-prerequisites/install-prerequisites.component.css ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppInstallPrerequisitesInstallPrerequisitesComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "img{\n  width: 250px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5zdGFsbC1wcmVyZXF1aXNpdGVzL2luc3RhbGwtcHJlcmVxdWlzaXRlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvaW5zdGFsbC1wcmVyZXF1aXNpdGVzL2luc3RhbGwtcHJlcmVxdWlzaXRlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1ne1xuICB3aWR0aDogMjUwcHg7XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/install-prerequisites/install-prerequisites.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/install-prerequisites/install-prerequisites.component.ts ***!
    \**************************************************************************/

  /*! exports provided: InstallPrerequisitesComponent */

  /***/
  function srcAppInstallPrerequisitesInstallPrerequisitesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InstallPrerequisitesComponent", function () {
      return InstallPrerequisitesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var InstallPrerequisitesComponent =
    /*#__PURE__*/
    function () {
      //constructor() { }
      function InstallPrerequisitesComponent(http) {
        _classCallCheck(this, InstallPrerequisitesComponent);

        this.http = http;
        this.httpOptions = {
          headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'text'
          })
        };
        this.isShown = false; // hidden by default
      }

      _createClass(InstallPrerequisitesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "installPrerequisite",
        value: function installPrerequisite() {
          var _this10 = this;

          console.log("inside function call");
          return this.http.post('/prerequisite/installPrerequisite', null, {
            responseType: 'text'
          }).subscribe( //this.http.post('/prerequisite/installPrerequisite',null, this.httpOptions).subscribe(
          function (data) {
            console.log("Sucess");
            _this10.message = data;
            _this10.isShown = !_this10.isShown;
            console.log(data);
          }, function (error) {
            console.log("Error", error); //alert(JSON.stringify(error));
          });
        }
      }]);

      return InstallPrerequisitesComponent;
    }();

    InstallPrerequisitesComponent.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    InstallPrerequisitesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-install-prerequisites',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./install-prerequisites.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/install-prerequisites/install-prerequisites.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./install-prerequisites.component.css */
      "./src/app/install-prerequisites/install-prerequisites.component.css")).default]
    })], InstallPrerequisitesComponent);
    /***/
  },

  /***/
  "./src/app/install-update-chaincode/install-update-chaincode.component.css":
  /*!*********************************************************************************!*\
    !*** ./src/app/install-update-chaincode/install-update-chaincode.component.css ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppInstallUpdateChaincodeInstallUpdateChaincodeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".card-header {\n  background-color: lightslategray;\n}\n.rounded {\n  height: 34px;\n  text-align: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5zdGFsbC11cGRhdGUtY2hhaW5jb2RlL2luc3RhbGwtdXBkYXRlLWNoYWluY29kZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0NBQWdDO0FBQ2xDO0FBQ0E7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvaW5zdGFsbC11cGRhdGUtY2hhaW5jb2RlL2luc3RhbGwtdXBkYXRlLWNoYWluY29kZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRzbGF0ZWdyYXk7XG59XG4ucm91bmRlZCB7XG4gIGhlaWdodDogMzRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/install-update-chaincode/install-update-chaincode.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/install-update-chaincode/install-update-chaincode.component.ts ***!
    \********************************************************************************/

  /*! exports provided: InstallUpdateChaincodeComponent */

  /***/
  function srcAppInstallUpdateChaincodeInstallUpdateChaincodeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InstallUpdateChaincodeComponent", function () {
      return InstallUpdateChaincodeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var ng2_file_upload__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ng2-file-upload */
    "./node_modules/ng2-file-upload/fesm2015/ng2-file-upload.js");

    var InstallUpdateChaincodeComponent =
    /*#__PURE__*/
    function () {
      function InstallUpdateChaincodeComponent(http) {
        _classCallCheck(this, InstallUpdateChaincodeComponent);

        this.http = http;
        this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_3__["FileUploader"]({
          url: '/chaincode/upload'
        });
      }

      _createClass(InstallUpdateChaincodeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.uploader.onCompleteItem = function (item, response, status, headers) {
            console.log('File uploaded:', item, status, response, headers);
          };
        }
      }, {
        key: "installChaincode",
        value: function installChaincode() {
          console.log('inside function call');
          return this.http.post('/chaincode/installChaincode', null, {
            responseType: 'text'
          }).subscribe(function (data) {
            console.log('Sucess');
            console.log(data);
          }, function (error) {
            console.log('Error', error);
          });
        }
      }, {
        key: "upgradeChaincode",
        value: function upgradeChaincode() {
          console.log('inside function call');
          return this.http.post('/chaincode/upgradeChaincode', null, {
            responseType: 'text'
          }).subscribe(function (data) {
            console.log('Sucess');
            console.log(data);
          }, function (error) {
            console.log('Error', error);
          });
        }
      }, {
        key: "generateSwaggerFile",
        value: function generateSwaggerFile() {
          this.http.get('/chaincode/generateSwaggerFile').subscribe(function (response) {
            console.log('File created successfully !');
          });
        }
      }]);

      return InstallUpdateChaincodeComponent;
    }();

    InstallUpdateChaincodeComponent.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    InstallUpdateChaincodeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-install-update-chaincode',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./install-update-chaincode.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/install-update-chaincode/install-update-chaincode.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./install-update-chaincode.component.css */
      "./src/app/install-update-chaincode/install-update-chaincode.component.css")).default]
    })], InstallUpdateChaincodeComponent);
    /***/
  },

  /***/
  "./src/app/models/application.model.ts":
  /*!*********************************************!*\
    !*** ./src/app/models/application.model.ts ***!
    \*********************************************/

  /*! exports provided: ExplorerLogin, ExplorerMainPageData, BlockInfoToBeSent, TxnInfoToBeSent, JsonViewer, CreateNetwork */

  /***/
  function srcAppModelsApplicationModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExplorerLogin", function () {
      return ExplorerLogin;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExplorerMainPageData", function () {
      return ExplorerMainPageData;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlockInfoToBeSent", function () {
      return BlockInfoToBeSent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TxnInfoToBeSent", function () {
      return TxnInfoToBeSent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JsonViewer", function () {
      return JsonViewer;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateNetwork", function () {
      return CreateNetwork;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var ExplorerLogin = function ExplorerLogin() {
      _classCallCheck(this, ExplorerLogin);
    };

    var ExplorerMainPageData = function ExplorerMainPageData() {
      _classCallCheck(this, ExplorerMainPageData);
    };

    var BlockInfoToBeSent = function BlockInfoToBeSent() {
      _classCallCheck(this, BlockInfoToBeSent);
    };

    var TxnInfoToBeSent = function TxnInfoToBeSent() {
      _classCallCheck(this, TxnInfoToBeSent);
    };

    var JsonViewer = function JsonViewer() {
      _classCallCheck(this, JsonViewer);
    };

    var CreateNetwork = function CreateNetwork() {
      _classCallCheck(this, CreateNetwork);
    };
    /***/

  },

  /***/
  "./src/app/page-tabs/page-tabs.component.css":
  /*!***************************************************!*\
    !*** ./src/app/page-tabs/page-tabs.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPageTabsPageTabsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "b {\n  margin-left: 10px;\n  color: black;\n  text-transform: uppercase;\n}\n.nav-pills .nav-link.active, .nav-pills .show>.nav-link{\n  background-color: cadetblue;\n}\nli{\n  line-height: 3.5rem;\n}\nfa-icon{\n  font-size: larger;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS10YWJzL3BhZ2UtdGFicy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWix5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLDJCQUEyQjtBQUM3QjtBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9wYWdlLXRhYnMvcGFnZS10YWJzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJiIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGNvbG9yOiBibGFjaztcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbi5uYXYtcGlsbHMgLm5hdi1saW5rLmFjdGl2ZSwgLm5hdi1waWxscyAuc2hvdz4ubmF2LWxpbmt7XG4gIGJhY2tncm91bmQtY29sb3I6IGNhZGV0Ymx1ZTtcbn1cbmxpe1xuICBsaW5lLWhlaWdodDogMy41cmVtO1xufVxuZmEtaWNvbntcbiAgZm9udC1zaXplOiBsYXJnZXI7XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/page-tabs/page-tabs.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/page-tabs/page-tabs.component.ts ***!
    \**************************************************/

  /*! exports provided: PageTabsComponent */

  /***/
  function srcAppPageTabsPageTabsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PageTabsComponent", function () {
      return PageTabsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @fortawesome/free-solid-svg-icons */
    "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js"); // tslint:disable-next-line: max-line-length


    var PageTabsComponent =
    /*#__PURE__*/
    function () {
      function PageTabsComponent() {
        _classCallCheck(this, PageTabsComponent);

        this.faCloudDownloadAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faCloudDownloadAlt"];
        this.faFingerprint = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faFingerprint"];
        this.faNetworkWired = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faNetworkWired"];
        this.faCubes = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faCubes"];
        this.faFileCode = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faFileCode"];
        this.faServer = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faServer"];
        this.faGlobe = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faGlobe"];
      }

      _createClass(PageTabsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PageTabsComponent;
    }();

    PageTabsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-page-tabs',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./page-tabs.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/page-tabs/page-tabs.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./page-tabs.component.css */
      "./src/app/page-tabs/page-tabs.component.css")).default]
    })], PageTabsComponent);
    /***/
  },

  /***/
  "./src/app/update-network/update-network.component.css":
  /*!*************************************************************!*\
    !*** ./src/app/update-network/update-network.component.css ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUpdateNetworkUpdateNetworkComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".card-header {\n  background-color: lightslategray;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXBkYXRlLW5ldHdvcmsvdXBkYXRlLW5ldHdvcmsuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdDQUFnQztBQUNsQyIsImZpbGUiOiJzcmMvYXBwL3VwZGF0ZS1uZXR3b3JrL3VwZGF0ZS1uZXR3b3JrLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNsYXRlZ3JheTtcbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/update-network/update-network.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/update-network/update-network.component.ts ***!
    \************************************************************/

  /*! exports provided: UpdateNetworkComponent */

  /***/
  function srcAppUpdateNetworkUpdateNetworkComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UpdateNetworkComponent", function () {
      return UpdateNetworkComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @fortawesome/free-solid-svg-icons */
    "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! jquery */
    "./node_modules/jquery/dist/jquery.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_6___default =
    /*#__PURE__*/
    __webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_6__);

    var UpdateNetworkComponent =
    /*#__PURE__*/
    function () {
      function UpdateNetworkComponent(formBuilder, http, config, modalService) {
        _classCallCheck(this, UpdateNetworkComponent);

        this.formBuilder = formBuilder;
        this.http = http;
        this.modalService = modalService;
        this.faPlus = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faPlus"];
        this.containers = [];
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

      _createClass(UpdateNetworkComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onClickModify",
        value: function onClickModify() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            var data;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    console.log("clicked to modify Org / Peer");
                    data = this.updateFormData.value;
                    this.createPeerOrgs(data);
                    _context3.next = 5;
                    return this.delay(2000);

                  case 5:
                    this.createNewConfigTx(data);
                    _context3.next = 8;
                    return this.delay(2000);

                  case 8:
                    this.createDockerCompose(data);
                    _context3.next = 11;
                    return this.delay(2000);

                  case 11:
                    this.spinUpContainers(data);

                  case 12:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "createServicesTemplate",
        value: function createServicesTemplate(domainName, orgName, peerCount) {
          var orgCount = +orgName.substring(orgName.length - 1);
          var peerPort = 10000 + orgCount * 100;
          var peerServiceName = [];
          var services = [];
          var composeData = {};
          var portMap;
          var msp = orgName + "MSP";

          for (var i = 0; i < peerCount; i++) {
            peerServiceName[i] = "peer" + i + "." + orgName + "." + domainName;
            peerPort++;
            portMap = peerPort + ":" + peerPort;
            services[i] = {
              "container_name": peerServiceName[i],
              "image": "hyperledger/fabric-peer",
              "environment": ["CORE_VM_ENDPOINT=unix:///host/var/run/docker.sock", "CORE_PEER_ID=" + peerServiceName[i], "FABRIC_LOGGING_SPEC=info", "CORE_CHAINCODE_LOGGING_LEVEL=info", "CORE_PEER_LOCALMSPID=" + msp, "CORE_PEER_MSPCONFIGPATH=/etc/hyperledger/msp/peer/", "CORE_PEER_ADDRESS=" + peerServiceName[i] + ":" + peerPort, "CORE_VM_DOCKER_HOSTCONFIG_NETWORKMODE=net_basic", "CORE_LEDGER_STATE_STATEDATABASE=CouchDB", "CORE_LEDGER_STATE_COUCHDBCONFIG_COUCHDBADDRESS=couchdb:5984", "CORE_LEDGER_STATE_COUCHDBCONFIG_USERNAME=", "CORE_LEDGER_STATE_COUCHDBCONFIG_PASSWORD="],
              "working_dir": "/opt/gopath/src/github.com/hyperledger/fabric",
              "command": "peer node start",
              "ports": [portMap],
              "volumes": ["/var/run/:/host/var/run/", "./crypto-config/peerOrganizations/" + orgName + "." + domainName + "/peers/" + peerServiceName[i] + "/msp:/etc/hyperledger/msp/peer", "./crypto-config/peerOrganizations/" + orgName + "." + domainName + "/users:/etc/hyperledger/msp/users", "./config:/etc/hyperledger/configtx"],
              "networks": ["basic"]
            };
            composeData[peerServiceName[i]] = services[i];
          }

          console.log(composeData);
          return composeData;
        }
      }, {
        key: "createPeerOrgs",
        value: function createPeerOrgs(OrdererObjectUserData) {
          var orgName = OrdererObjectUserData.orgName;
          var domainName = OrdererObjectUserData.domainName;
          var domain = orgName + "." + domainName;
          var peersObject = {
            "PeerOrgs": [{
              "Name": OrdererObjectUserData.orgName,
              "Domain": domain,
              "EnableNodeOUs": true,
              "Template": {
                "Count": +OrdererObjectUserData.peercount
              },
              "Users": {
                "Count": +OrdererObjectUserData.userscount
              }
            }]
          }; // let payload = {
          //   "peersObject": peersObject
          // }
          // console.log("payload", payload);

          this.http.post('/updatenetwork/CreatePeerOrgs', {
            peersObject: peersObject
          }).subscribe(function (data) {
            console.log("POST Request is successful ", data); //$(".modal-body").append('<div class="alert alert-success" role="alert"><strong>Success !!</strong> ' + JSON.stringify(data) + '</div>');
            // alert(JSON.stringify(data));
          }, function (error) {
            console.log("Error", error);
            alert(JSON.stringify(error));
          });
        }
      }, {
        key: "createNewConfigTx",
        value: function createNewConfigTx(OrdererObjectUserData) {
          var orgName = OrdererObjectUserData.orgName;
          var domainName = OrdererObjectUserData.domainName;
          var domain = orgName + "." + domainName;
          var msp = orgName + "MSP";
          var orgCount = +orgName.substring(orgName.length - 1);
          var port = 10000 + orgCount * 100;
          var newConfigTx = {
            "org": orgName,
            "domain": domain,
            "msp": msp,
            "port": port
          };
          this.http.post('/updatenetwork/CreateNewConfigTx', {
            newConfigTx: newConfigTx
          }).subscribe(function (data) {
            console.log("POST Request is successful ", data);
            jquery__WEBPACK_IMPORTED_MODULE_6__(".modal-body").append('<div class="alert alert-success" role="alert"><strong>Success !!</strong> network configuration files created.</div>'); // alert(JSON.stringify(data));
          }, function (error) {
            console.log("Error", error);
            alert(JSON.stringify(error));
          });
        }
      }, {
        key: "createDockerCompose",
        value: function createDockerCompose(OrdererObjectUserData) {
          var peerCount = OrdererObjectUserData.peercount;
          var orgName = OrdererObjectUserData.orgName;
          var domainName = OrdererObjectUserData.domainName;
          var serviceList = this.createServicesTemplate(domainName, orgName, peerCount);
          var pdcObj = {
            "version": '2',
            "networks": {
              "basic": null
            },
            "services": serviceList
          };
          var payload = {
            "pdcObj": pdcObj,
            "orgName": orgName
          };
          console.log(payload);
          this.http.post('/updatenetwork/peerDockerCompose', {
            payload: payload
          }).subscribe(function (data) {
            console.log("POST Request is successful ", data); //$(".modal-body").append('<div class="alert alert-success" role="alert"><strong>Success !!</strong> ' + JSON.stringify(data) + '</div>');
            // alert(JSON.stringify(data));
          }, function (error) {
            console.log("Error", error);
            alert(JSON.stringify(error));
          });
        }
      }, {
        key: "spinUpContainers",
        value: function spinUpContainers(data) {
          console.log("spinUpContainers");
          var channelName = data.channelName;
          this.http.post('/updatenetwork/spinUp', {
            channelName: channelName
          }).subscribe(function (data) {
            console.log("POST Request is successful ", data);
          }, function (error) {
            console.log("Error", error);
            alert(JSON.stringify(error));
          });
        }
      }, {
        key: "delay",
        value: function delay(ms) {
          return new Promise(function (resolve) {
            return setTimeout(resolve, ms);
          });
        }
      }]);

      return UpdateNetworkComponent;
    }();

    UpdateNetworkComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
      }, {
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModalConfig"]
      }, {
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"]
      }];
    };

    UpdateNetworkComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-update-network',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./update-network.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/update-network/update-network.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./update-network.component.css */
      "./src/app/update-network/update-network.component.css")).default]
    })], UpdateNetworkComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/ubuntu/CustomFramework/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map