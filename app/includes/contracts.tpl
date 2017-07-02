<main class="tab-pane contracts active" ng-if="globalService.currentTab==globalService.tabs.contracts.id" ng-controller='contractsCtrl' ng-cloak>

  <!-- Title -->
  <h1>
    <a translate="CONTRACT_Interact" ng-class="{'isActive': visibility=='interactView'}" ng-click="setVisibility('interactView')"> Interact with Contract </a>
    or
    <a translate="CONTRACT_Deploy"  ng-class="{'isActive': visibility=='deployView'}" ng-click="setVisibility('deployView')"> Deploy Contract </a>
  </h1>
  <!-- / Title -->


  <!-- Interact Contracts -->
  <article class="row" ng-show="visibility=='interactView'">

    @@if (site === 'mew' ) { @@include( '../includes/contracts-interact-1.tpl', { "site": "mew" } ) }
    @@if (site === 'cx'  ) { @@include( '../includes/contracts-interact-1.tpl', { "site": "cx"  } ) }


    <div class="col-xs-12 clearfix"> <hr /> </div>

    <div ng-show="showReadWrite">
      @@if (site === 'mew' ) { @@include( '../includes/contracts-interact-2.tpl', { "site": "mew" } ) }
      @@if (site === 'cx'  ) { @@include( '../includes/contracts-interact-2.tpl', { "site": "cx"  } ) }
    </div>

    @@if (site === 'mew' ) { @@include( '../includes/contracts-interact-modal.tpl', { "site": "mew" } ) }
    @@if (site === 'cx'  ) { @@include( '../includes/contracts-interact-modal.tpl', { "site": "cx"  } ) }

  </article>
  <!-- / Interact Contracts -->



  <!-- Deploy Contract -->
  <article class="row" ng-show="visibility=='deployView'">

    @@if (site === 'mew' ) { @@include( '../includes/contracts-deploy-1.tpl', { "site": "mew" } ) }
    @@if (site === 'cx'  ) { @@include( '../includes/contracts-deploy-1.tpl', { "site": "cx"  } ) }

  </article>
  <!-- / Deploy Contract -->

  <!--wallet decrypt-->
  <article class="form-group" ng-show="(!wd && visibility=='deployView') || (!wd && visibility=='interactView' && contract.selectedFunc && !contract.functions[contract.selectedFunc.index].constant)">
      @@if (site === 'cx' )  {  <wallet-decrypt-cx-drtv></wallet-decrypt-cx-drtv>   }
      @@if (site === 'mew' ) {  <wallet-decrypt-drtv></wallet-decrypt-drtv>         }
  </article>

  <article ng-show="contract.selectedFunc!=null">

    <button class="btn btn-primary" ng-click="readFromContract()" ng-show="contract.functions[contract.selectedFunc.index].constant && showRead">
      <span translate="CONTRACT_Read"> READ</span>
    </button>

    <button class="btn btn-primary" ng-click="generateContractTx()" ng-show="!contract.functions[contract.selectedFunc.index].constant">
      <span translate="CONTRACT_Write"> WRITE</span>
    </button>

    </br>
  </article>

</main>
