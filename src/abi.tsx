const ABI = {
  UNITROLLER_ABI: [
    {
      inputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint256",
          name: "error",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "info",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "detail",
          type: "uint256",
        },
      ],
      name: "Failure",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "oldAdmin",
          type: "address",
        },
        {
          indexed: false,
          internalType: "address",
          name: "newAdmin",
          type: "address",
        },
      ],
      name: "NewAdmin",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "oldImplementation",
          type: "address",
        },
        {
          indexed: false,
          internalType: "address",
          name: "newImplementation",
          type: "address",
        },
      ],
      name: "NewImplementation",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "oldPendingAdmin",
          type: "address",
        },
        {
          indexed: false,
          internalType: "address",
          name: "newPendingAdmin",
          type: "address",
        },
      ],
      name: "NewPendingAdmin",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "oldPendingImplementation",
          type: "address",
        },
        {
          indexed: false,
          internalType: "address",
          name: "newPendingImplementation",
          type: "address",
        },
      ],
      name: "NewPendingImplementation",
      type: "event",
    },
    { payable: true, stateMutability: "payable", type: "fallback" },
    {
      constant: false,
      inputs: [],
      name: "_acceptAdmin",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [],
      name: "_acceptImplementation",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        { internalType: "address", name: "newPendingAdmin", type: "address" },
      ],
      name: "_setPendingAdmin",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        {
          internalType: "address",
          name: "newPendingImplementation",
          type: "address",
        },
      ],
      name: "_setPendingImplementation",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "admin",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "implementation",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "pendingAdmin",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "pendingImplementation",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
  ],

  COMPTROLLER_ABI: [{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"action","type":"string"},{"indexed":false,"internalType":"bool","name":"pauseState","type":"bool"}],"name":"ActionPaused","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"contract CToken","name":"cToken","type":"address"},{"indexed":false,"internalType":"string","name":"action","type":"string"},{"indexed":false,"internalType":"bool","name":"pauseState","type":"bool"}],"name":"ActionPaused","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"recipient","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"CompGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"contract CToken","name":"cToken","type":"address"},{"indexed":false,"internalType":"uint256","name":"newSpeed","type":"uint256"}],"name":"CompSpeedUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"contributor","type":"address"},{"indexed":false,"internalType":"uint256","name":"newSpeed","type":"uint256"}],"name":"ContributorCompSpeedUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"contract CToken","name":"cToken","type":"address"},{"indexed":true,"internalType":"address","name":"borrower","type":"address"},{"indexed":false,"internalType":"uint256","name":"compDelta","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"compBorrowIndex","type":"uint256"}],"name":"DistributedBorrowerComp","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"contract CToken","name":"cToken","type":"address"},{"indexed":true,"internalType":"address","name":"supplier","type":"address"},{"indexed":false,"internalType":"uint256","name":"compDelta","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"compSupplyIndex","type":"uint256"}],"name":"DistributedSupplierComp","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"error","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"info","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"detail","type":"uint256"}],"name":"Failure","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"contract CToken","name":"cToken","type":"address"},{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"MarketEntered","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"contract CToken","name":"cToken","type":"address"},{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"MarketExited","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"contract CToken","name":"cToken","type":"address"}],"name":"MarketListed","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"contract CToken","name":"cToken","type":"address"}],"name":"MarketRemoved","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"cToken","type":"address"},{"indexed":false,"internalType":"address","name":"oldBProtocol","type":"address"},{"indexed":false,"internalType":"address","name":"newBProtocol","type":"address"}],"name":"NewBProtocol","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"contract CToken","name":"cToken","type":"address"},{"indexed":false,"internalType":"uint256","name":"newBorrowCap","type":"uint256"}],"name":"NewBorrowCap","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"oldBorrowCapGuardian","type":"address"},{"indexed":false,"internalType":"address","name":"newBorrowCapGuardian","type":"address"}],"name":"NewBorrowCapGuardian","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"oldCloseFactorMantissa","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newCloseFactorMantissa","type":"uint256"}],"name":"NewCloseFactor","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"contract CToken","name":"cToken","type":"address"},{"indexed":false,"internalType":"uint256","name":"oldCollateralFactorMantissa","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newCollateralFactorMantissa","type":"uint256"}],"name":"NewCollateralFactor","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"oldLiquidationIncentiveMantissa","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newLiquidationIncentiveMantissa","type":"uint256"}],"name":"NewLiquidationIncentive","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"oldPauseGuardian","type":"address"},{"indexed":false,"internalType":"address","name":"newPauseGuardian","type":"address"}],"name":"NewPauseGuardian","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"contract PriceOracle","name":"oldPriceOracle","type":"address"},{"indexed":false,"internalType":"contract PriceOracle","name":"newPriceOracle","type":"address"}],"name":"NewPriceOracle","type":"event"},{"constant":false,"inputs":[{"internalType":"contract Unitroller","name":"unitroller","type":"address"}],"name":"_become","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"_borrowGuardianPaused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"contract CToken","name":"cToken","type":"address"}],"name":"_disableMarket","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"_grantComp","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"_mintGuardianPaused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"cToken","type":"address"},{"internalType":"address","name":"newBProtocol","type":"address"}],"name":"_setBProtocol","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"newBorrowCapGuardian","type":"address"}],"name":"_setBorrowCapGuardian","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"contract CToken","name":"cToken","type":"address"},{"internalType":"bool","name":"state","type":"bool"}],"name":"_setBorrowPaused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"newCloseFactorMantissa","type":"uint256"}],"name":"_setCloseFactor","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"contract CToken","name":"cToken","type":"address"},{"internalType":"uint256","name":"newCollateralFactorMantissa","type":"uint256"}],"name":"_setCollateralFactor","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"contract CToken","name":"cToken","type":"address"},{"internalType":"uint256","name":"compSpeed","type":"uint256"}],"name":"_setCompSpeed","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"contributor","type":"address"},{"internalType":"uint256","name":"compSpeed","type":"uint256"}],"name":"_setContributorCompSpeed","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"newLiquidationIncentiveMantissa","type":"uint256"}],"name":"_setLiquidationIncentive","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"contract CToken[]","name":"cTokens","type":"address[]"},{"internalType":"uint256[]","name":"newBorrowCaps","type":"uint256[]"}],"name":"_setMarketBorrowCaps","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"contract CToken","name":"cToken","type":"address"},{"internalType":"bool","name":"state","type":"bool"}],"name":"_setMintPaused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"newPauseGuardian","type":"address"}],"name":"_setPauseGuardian","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"contract PriceOracle","name":"newOracle","type":"address"}],"name":"_setPriceOracle","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bool","name":"state","type":"bool"}],"name":"_setSeizePaused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bool","name":"state","type":"bool"}],"name":"_setTransferPaused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"contract CToken","name":"cToken","type":"address"}],"name":"_supportMarket","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"accountAssets","outputs":[{"internalType":"contract CToken","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"admin","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"allMarkets","outputs":[{"internalType":"contract CToken","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"cToken","type":"address"},{"internalType":"address","name":"borrower","type":"address"},{"internalType":"uint256","name":"borrowAmount","type":"uint256"}],"name":"borrowAllowed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"borrowCapGuardian","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"borrowCaps","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"borrowGuardianPaused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"cToken","type":"address"},{"internalType":"address","name":"borrower","type":"address"},{"internalType":"uint256","name":"borrowAmount","type":"uint256"}],"name":"borrowVerify","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"bprotocol","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"contract CToken","name":"cToken","type":"address"}],"name":"checkMembership","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"holder","type":"address"},{"internalType":"contract CToken[]","name":"cTokens","type":"address[]"}],"name":"claimComp","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address[]","name":"holders","type":"address[]"},{"internalType":"contract CToken[]","name":"cTokens","type":"address[]"}],"name":"claimComp","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"holder","type":"address"}],"name":"claimComp","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"closeFactorMantissa","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"compAccrued","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"compBorrowState","outputs":[{"internalType":"uint224","name":"index","type":"uint224"},{"internalType":"uint32","name":"block","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"compBorrowerIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"compContributorSpeeds","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"compInitialIndex","outputs":[{"internalType":"uint224","name":"","type":"uint224"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"compRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"compSpeeds","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"compSupplierIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"compSupplyState","outputs":[{"internalType":"uint224","name":"index","type":"uint224"},{"internalType":"uint32","name":"block","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address[]","name":"cTokens","type":"address[]"}],"name":"enterMarkets","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"cTokenAddress","type":"address"}],"name":"exitMarket","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"getAccountLiquidity","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getAllMarkets","outputs":[{"internalType":"contract CToken[]","name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"getAssetsIn","outputs":[{"internalType":"contract CToken[]","name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getBlockNumber","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getCompAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"address","name":"cTokenModify","type":"address"},{"internalType":"uint256","name":"redeemTokens","type":"uint256"},{"internalType":"uint256","name":"borrowAmount","type":"uint256"}],"name":"getHypotheticalAccountLiquidity","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"implementation","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"isComptroller","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"lastContributorBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"cTokenBorrowed","type":"address"},{"internalType":"address","name":"cTokenCollateral","type":"address"},{"internalType":"address","name":"liquidator","type":"address"},{"internalType":"address","name":"borrower","type":"address"},{"internalType":"uint256","name":"repayAmount","type":"uint256"}],"name":"liquidateBorrowAllowed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"cTokenBorrowed","type":"address"},{"internalType":"address","name":"cTokenCollateral","type":"address"},{"internalType":"address","name":"liquidator","type":"address"},{"internalType":"address","name":"borrower","type":"address"},{"internalType":"uint256","name":"actualRepayAmount","type":"uint256"},{"internalType":"uint256","name":"seizeTokens","type":"uint256"}],"name":"liquidateBorrowVerify","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"cTokenBorrowed","type":"address"},{"internalType":"address","name":"cTokenCollateral","type":"address"},{"internalType":"uint256","name":"actualRepayAmount","type":"uint256"}],"name":"liquidateCalculateSeizeTokens","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"liquidationIncentiveMantissa","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"markets","outputs":[{"internalType":"bool","name":"isListed","type":"bool"},{"internalType":"uint256","name":"collateralFactorMantissa","type":"uint256"},{"internalType":"bool","name":"isComped","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"maxAssets","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"cToken","type":"address"},{"internalType":"address","name":"minter","type":"address"},{"internalType":"uint256","name":"mintAmount","type":"uint256"}],"name":"mintAllowed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"mintGuardianPaused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"cToken","type":"address"},{"internalType":"address","name":"minter","type":"address"},{"internalType":"uint256","name":"actualMintAmount","type":"uint256"},{"internalType":"uint256","name":"mintTokens","type":"uint256"}],"name":"mintVerify","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"oracle","outputs":[{"internalType":"contract PriceOracle","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"pauseGuardian","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"pendingAdmin","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"pendingImplementation","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"cToken","type":"address"},{"internalType":"address","name":"redeemer","type":"address"},{"internalType":"uint256","name":"redeemTokens","type":"uint256"}],"name":"redeemAllowed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"cToken","type":"address"},{"internalType":"address","name":"redeemer","type":"address"},{"internalType":"uint256","name":"redeemAmount","type":"uint256"},{"internalType":"uint256","name":"redeemTokens","type":"uint256"}],"name":"redeemVerify","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"cToken","type":"address"},{"internalType":"address","name":"payer","type":"address"},{"internalType":"address","name":"borrower","type":"address"},{"internalType":"uint256","name":"repayAmount","type":"uint256"}],"name":"repayBorrowAllowed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"cToken","type":"address"},{"internalType":"address","name":"payer","type":"address"},{"internalType":"address","name":"borrower","type":"address"},{"internalType":"uint256","name":"actualRepayAmount","type":"uint256"},{"internalType":"uint256","name":"borrowerIndex","type":"uint256"}],"name":"repayBorrowVerify","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"cTokenCollateral","type":"address"},{"internalType":"address","name":"cTokenBorrowed","type":"address"},{"internalType":"address","name":"liquidator","type":"address"},{"internalType":"address","name":"borrower","type":"address"},{"internalType":"uint256","name":"seizeTokens","type":"uint256"}],"name":"seizeAllowed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"seizeGuardianPaused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"cTokenCollateral","type":"address"},{"internalType":"address","name":"cTokenBorrowed","type":"address"},{"internalType":"address","name":"liquidator","type":"address"},{"internalType":"address","name":"borrower","type":"address"},{"internalType":"uint256","name":"seizeTokens","type":"uint256"}],"name":"seizeVerify","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"cToken","type":"address"},{"internalType":"address","name":"src","type":"address"},{"internalType":"address","name":"dst","type":"address"},{"internalType":"uint256","name":"transferTokens","type":"uint256"}],"name":"transferAllowed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"transferGuardianPaused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"cToken","type":"address"},{"internalType":"address","name":"src","type":"address"},{"internalType":"address","name":"dst","type":"address"},{"internalType":"uint256","name":"transferTokens","type":"uint256"}],"name":"transferVerify","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"contributor","type":"address"}],"name":"updateContributorRewards","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}],

  TOKEN_ABI: [
    {
      constant: true,
      inputs: [],
      name: "name",
      outputs: [{ name: "", type: "string" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        { name: "_spender", type: "address" },
        { name: "_value", type: "uint256" },
      ],
      name: "approve",
      outputs: [{ name: "", type: "bool" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "totalSupply",
      outputs: [{ name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        { name: "_from", type: "address" },
        { name: "_to", type: "address" },
        { name: "_value", type: "uint256" },
      ],
      name: "transferFrom",
      outputs: [{ name: "", type: "bool" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "decimals",
      outputs: [{ name: "", type: "uint8" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        { name: "_to", type: "address" },
        { name: "_value", type: "uint256" },
        { name: "_data", type: "bytes" },
      ],
      name: "transferAndCall",
      outputs: [{ name: "success", type: "bool" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        { name: "_spender", type: "address" },
        { name: "_subtractedValue", type: "uint256" },
      ],
      name: "decreaseApproval",
      outputs: [{ name: "success", type: "bool" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: true,
      inputs: [{ name: "_owner", type: "address" }],
      name: "balanceOf",
      outputs: [{ name: "balance", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "symbol",
      outputs: [{ name: "", type: "string" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        { name: "_to", type: "address" },
        { name: "_value", type: "uint256" },
      ],
      name: "transfer",
      outputs: [{ name: "success", type: "bool" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        { name: "_spender", type: "address" },
        { name: "_addedValue", type: "uint256" },
      ],
      name: "increaseApproval",
      outputs: [{ name: "success", type: "bool" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: true,
      inputs: [
        { name: "_owner", type: "address" },
        { name: "_spender", type: "address" },
      ],
      name: "allowance",
      outputs: [{ name: "remaining", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      anonymous: false,
      inputs: [
        { indexed: true, name: "from", type: "address" },
        { indexed: true, name: "to", type: "address" },
        { indexed: false, name: "value", type: "uint256" },
        { indexed: false, name: "data", type: "bytes" },
      ],
      name: "Transfer",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        { indexed: true, name: "owner", type: "address" },
        { indexed: true, name: "spender", type: "address" },
        { indexed: false, name: "value", type: "uint256" },
      ],
      name: "Approval",
      type: "event",
    },
  ],

  HTOKEN_ABI: [
    {
      inputs: [
        {
          internalType: "contract ComptrollerInterface",
          name: "comptroller_",
          type: "address",
        },
        {
          internalType: "contract InterestRateModel",
          name: "interestRateModel_",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "initialExchangeRateMantissa_",
          type: "uint256",
        },
        { internalType: "string", name: "name_", type: "string" },
        { internalType: "string", name: "symbol_", type: "string" },
        { internalType: "uint8", name: "decimals_", type: "uint8" },
        { internalType: "address payable", name: "admin_", type: "address" },
      ],
      payable: false,
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint256",
          name: "cashPrior",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "interestAccumulated",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "borrowIndex",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "totalBorrows",
          type: "uint256",
        },
      ],
      name: "AccrueInterest",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "owner",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "spender",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "Approval",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "borrower",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "borrowAmount",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "accountBorrows",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "totalBorrows",
          type: "uint256",
        },
      ],
      name: "Borrow",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint256",
          name: "error",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "info",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "detail",
          type: "uint256",
        },
      ],
      name: "Failure",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "liquidator",
          type: "address",
        },
        {
          indexed: false,
          internalType: "address",
          name: "borrower",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "repayAmount",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "address",
          name: "cTokenCollateral",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "seizeTokens",
          type: "uint256",
        },
      ],
      name: "LiquidateBorrow",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "minter",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "mintAmount",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "mintTokens",
          type: "uint256",
        },
      ],
      name: "Mint",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "oldAdmin",
          type: "address",
        },
        {
          indexed: false,
          internalType: "address",
          name: "newAdmin",
          type: "address",
        },
      ],
      name: "NewAdmin",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "contract ComptrollerInterface",
          name: "oldComptroller",
          type: "address",
        },
        {
          indexed: false,
          internalType: "contract ComptrollerInterface",
          name: "newComptroller",
          type: "address",
        },
      ],
      name: "NewComptroller",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "contract InterestRateModel",
          name: "oldInterestRateModel",
          type: "address",
        },
        {
          indexed: false,
          internalType: "contract InterestRateModel",
          name: "newInterestRateModel",
          type: "address",
        },
      ],
      name: "NewMarketInterestRateModel",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "oldPendingAdmin",
          type: "address",
        },
        {
          indexed: false,
          internalType: "address",
          name: "newPendingAdmin",
          type: "address",
        },
      ],
      name: "NewPendingAdmin",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint256",
          name: "oldReserveFactorMantissa",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "newReserveFactorMantissa",
          type: "uint256",
        },
      ],
      name: "NewReserveFactor",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "redeemer",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "redeemAmount",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "redeemTokens",
          type: "uint256",
        },
      ],
      name: "Redeem",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "payer",
          type: "address",
        },
        {
          indexed: false,
          internalType: "address",
          name: "borrower",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "repayAmount",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "accountBorrows",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "totalBorrows",
          type: "uint256",
        },
      ],
      name: "RepayBorrow",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "benefactor",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "addAmount",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "newTotalReserves",
          type: "uint256",
        },
      ],
      name: "ReservesAdded",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "admin",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "reduceAmount",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "newTotalReserves",
          type: "uint256",
        },
      ],
      name: "ReservesReduced",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "from",
          type: "address",
        },
        { indexed: true, internalType: "address", name: "to", type: "address" },
        {
          indexed: false,
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "Transfer",
      type: "event",
    },
    { payable: true, stateMutability: "payable", type: "fallback" },
    {
      constant: false,
      inputs: [],
      name: "_acceptAdmin",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        { internalType: "uint256", name: "reduceAmount", type: "uint256" },
      ],
      name: "_reduceReserves",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        {
          internalType: "contract ComptrollerInterface",
          name: "newComptroller",
          type: "address",
        },
      ],
      name: "_setComptroller",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        {
          internalType: "contract InterestRateModel",
          name: "newInterestRateModel",
          type: "address",
        },
      ],
      name: "_setInterestRateModel",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        {
          internalType: "address payable",
          name: "newPendingAdmin",
          type: "address",
        },
      ],
      name: "_setPendingAdmin",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        {
          internalType: "uint256",
          name: "newReserveFactorMantissa",
          type: "uint256",
        },
      ],
      name: "_setReserveFactor",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "accrualBlockNumber",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: false,
      inputs: [],
      name: "accrueInterest",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "admin",
      outputs: [{ internalType: "address payable", name: "", type: "address" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [
        { internalType: "address", name: "owner", type: "address" },
        { internalType: "address", name: "spender", type: "address" },
      ],
      name: "allowance",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        { internalType: "address", name: "spender", type: "address" },
        { internalType: "uint256", name: "amount", type: "uint256" },
      ],
      name: "approve",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: true,
      inputs: [{ internalType: "address", name: "owner", type: "address" }],
      name: "balanceOf",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: false,
      inputs: [{ internalType: "address", name: "owner", type: "address" }],
      name: "balanceOfUnderlying",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        { internalType: "uint256", name: "borrowAmount", type: "uint256" },
      ],
      name: "borrow",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [{ internalType: "address", name: "account", type: "address" }],
      name: "borrowBalanceCurrent",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: true,
      inputs: [{ internalType: "address", name: "account", type: "address" }],
      name: "borrowBalanceStored",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "borrowIndex",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "borrowRatePerBlock",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "comptroller",
      outputs: [
        {
          internalType: "contract ComptrollerInterface",
          name: "",
          type: "address",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "decimals",
      outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: false,
      inputs: [],
      name: "exchangeRateCurrent",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "exchangeRateStored",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [{ internalType: "address", name: "account", type: "address" }],
      name: "getAccountSnapshot",
      outputs: [
        { internalType: "uint256", name: "", type: "uint256" },
        { internalType: "uint256", name: "", type: "uint256" },
        { internalType: "uint256", name: "", type: "uint256" },
        { internalType: "uint256", name: "", type: "uint256" },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "getCash",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        {
          internalType: "contract ComptrollerInterface",
          name: "comptroller_",
          type: "address",
        },
        {
          internalType: "contract InterestRateModel",
          name: "interestRateModel_",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "initialExchangeRateMantissa_",
          type: "uint256",
        },
        { internalType: "string", name: "name_", type: "string" },
        { internalType: "string", name: "symbol_", type: "string" },
        { internalType: "uint8", name: "decimals_", type: "uint8" },
      ],
      name: "initialize",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "interestRateModel",
      outputs: [
        {
          internalType: "contract InterestRateModel",
          name: "",
          type: "address",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "isCToken",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        { internalType: "address", name: "borrower", type: "address" },
        {
          internalType: "contract CToken",
          name: "cTokenCollateral",
          type: "address",
        },
      ],
      name: "liquidateBorrow",
      outputs: [],
      payable: true,
      stateMutability: "payable",
      type: "function",
    },
    {
      constant: false,
      inputs: [],
      name: "mint",
      outputs: [],
      payable: true,
      stateMutability: "payable",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "name",
      outputs: [{ internalType: "string", name: "", type: "string" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "pendingAdmin",
      outputs: [{ internalType: "address payable", name: "", type: "address" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        { internalType: "uint256", name: "redeemTokens", type: "uint256" },
      ],
      name: "redeem",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        { internalType: "uint256", name: "redeemAmount", type: "uint256" },
      ],
      name: "redeemUnderlying",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [],
      name: "repayBorrow",
      outputs: [],
      payable: true,
      stateMutability: "payable",
      type: "function",
    },
    {
      constant: false,
      inputs: [{ internalType: "address", name: "borrower", type: "address" }],
      name: "repayBorrowBehalf",
      outputs: [],
      payable: true,
      stateMutability: "payable",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "reserveFactorMantissa",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        { internalType: "address", name: "liquidator", type: "address" },
        { internalType: "address", name: "borrower", type: "address" },
        { internalType: "uint256", name: "seizeTokens", type: "uint256" },
      ],
      name: "seize",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "supplyRatePerBlock",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "symbol",
      outputs: [{ internalType: "string", name: "", type: "string" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "totalBorrows",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: false,
      inputs: [],
      name: "totalBorrowsCurrent",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "totalReserves",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "totalSupply",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        { internalType: "address", name: "dst", type: "address" },
        { internalType: "uint256", name: "amount", type: "uint256" },
      ],
      name: "transfer",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        { internalType: "address", name: "src", type: "address" },
        { internalType: "address", name: "dst", type: "address" },
        { internalType: "uint256", name: "amount", type: "uint256" },
      ],
      name: "transferFrom",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
  ],

  CETHER_ABI: [
    {
      inputs: [
        {
          internalType: "contract ComptrollerInterface",
          name: "comptroller_",
          type: "address",
        },
        {
          internalType: "contract InterestRateModel",
          name: "interestRateModel_",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "initialExchangeRateMantissa_",
          type: "uint256",
        },
        { internalType: "string", name: "name_", type: "string" },
        { internalType: "string", name: "symbol_", type: "string" },
        { internalType: "uint8", name: "decimals_", type: "uint8" },
        { internalType: "address payable", name: "admin_", type: "address" },
      ],
      payable: false,
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint256",
          name: "cashPrior",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "interestAccumulated",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "borrowIndex",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "totalBorrows",
          type: "uint256",
        },
      ],
      name: "AccrueInterest",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "owner",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "spender",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "Approval",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "borrower",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "borrowAmount",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "accountBorrows",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "totalBorrows",
          type: "uint256",
        },
      ],
      name: "Borrow",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint256",
          name: "error",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "info",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "detail",
          type: "uint256",
        },
      ],
      name: "Failure",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "liquidator",
          type: "address",
        },
        {
          indexed: false,
          internalType: "address",
          name: "borrower",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "repayAmount",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "address",
          name: "cTokenCollateral",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "seizeTokens",
          type: "uint256",
        },
      ],
      name: "LiquidateBorrow",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "minter",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "mintAmount",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "mintTokens",
          type: "uint256",
        },
      ],
      name: "Mint",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "oldAdmin",
          type: "address",
        },
        {
          indexed: false,
          internalType: "address",
          name: "newAdmin",
          type: "address",
        },
      ],
      name: "NewAdmin",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "contract ComptrollerInterface",
          name: "oldComptroller",
          type: "address",
        },
        {
          indexed: false,
          internalType: "contract ComptrollerInterface",
          name: "newComptroller",
          type: "address",
        },
      ],
      name: "NewComptroller",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "contract InterestRateModel",
          name: "oldInterestRateModel",
          type: "address",
        },
        {
          indexed: false,
          internalType: "contract InterestRateModel",
          name: "newInterestRateModel",
          type: "address",
        },
      ],
      name: "NewMarketInterestRateModel",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "oldPendingAdmin",
          type: "address",
        },
        {
          indexed: false,
          internalType: "address",
          name: "newPendingAdmin",
          type: "address",
        },
      ],
      name: "NewPendingAdmin",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint256",
          name: "oldReserveFactorMantissa",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "newReserveFactorMantissa",
          type: "uint256",
        },
      ],
      name: "NewReserveFactor",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "redeemer",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "redeemAmount",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "redeemTokens",
          type: "uint256",
        },
      ],
      name: "Redeem",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "payer",
          type: "address",
        },
        {
          indexed: false,
          internalType: "address",
          name: "borrower",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "repayAmount",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "accountBorrows",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "totalBorrows",
          type: "uint256",
        },
      ],
      name: "RepayBorrow",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "benefactor",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "addAmount",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "newTotalReserves",
          type: "uint256",
        },
      ],
      name: "ReservesAdded",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "admin",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "reduceAmount",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "newTotalReserves",
          type: "uint256",
        },
      ],
      name: "ReservesReduced",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "from",
          type: "address",
        },
        { indexed: true, internalType: "address", name: "to", type: "address" },
        {
          indexed: false,
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "Transfer",
      type: "event",
    },
    { payable: true, stateMutability: "payable", type: "fallback" },
    {
      constant: false,
      inputs: [],
      name: "_acceptAdmin",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        { internalType: "uint256", name: "reduceAmount", type: "uint256" },
      ],
      name: "_reduceReserves",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        {
          internalType: "contract ComptrollerInterface",
          name: "newComptroller",
          type: "address",
        },
      ],
      name: "_setComptroller",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        {
          internalType: "contract InterestRateModel",
          name: "newInterestRateModel",
          type: "address",
        },
      ],
      name: "_setInterestRateModel",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        {
          internalType: "address payable",
          name: "newPendingAdmin",
          type: "address",
        },
      ],
      name: "_setPendingAdmin",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        {
          internalType: "uint256",
          name: "newReserveFactorMantissa",
          type: "uint256",
        },
      ],
      name: "_setReserveFactor",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        { internalType: "address", name: "original", type: "address" },
        { internalType: "address[]", name: "accounts", type: "address[]" },
      ],
      name: "_specialInitState",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "accrualBlockNumber",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: false,
      inputs: [],
      name: "accrueInterest",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "admin",
      outputs: [{ internalType: "address payable", name: "", type: "address" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [
        { internalType: "address", name: "owner", type: "address" },
        { internalType: "address", name: "spender", type: "address" },
      ],
      name: "allowance",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        { internalType: "address", name: "spender", type: "address" },
        { internalType: "uint256", name: "amount", type: "uint256" },
      ],
      name: "approve",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: true,
      inputs: [{ internalType: "address", name: "owner", type: "address" }],
      name: "balanceOf",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: false,
      inputs: [{ internalType: "address", name: "owner", type: "address" }],
      name: "balanceOfUnderlying",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        { internalType: "uint256", name: "borrowAmount", type: "uint256" },
      ],
      name: "borrow",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [{ internalType: "address", name: "account", type: "address" }],
      name: "borrowBalanceCurrent",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: true,
      inputs: [{ internalType: "address", name: "account", type: "address" }],
      name: "borrowBalanceStored",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "borrowIndex",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "borrowRatePerBlock",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "comptroller",
      outputs: [
        {
          internalType: "contract ComptrollerInterface",
          name: "",
          type: "address",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "decimals",
      outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: false,
      inputs: [],
      name: "exchangeRateCurrent",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "exchangeRateStored",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [{ internalType: "address", name: "account", type: "address" }],
      name: "getAccountSnapshot",
      outputs: [
        { internalType: "uint256", name: "", type: "uint256" },
        { internalType: "uint256", name: "", type: "uint256" },
        { internalType: "uint256", name: "", type: "uint256" },
        { internalType: "uint256", name: "", type: "uint256" },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "getCash",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        {
          internalType: "contract ComptrollerInterface",
          name: "comptroller_",
          type: "address",
        },
        {
          internalType: "contract InterestRateModel",
          name: "interestRateModel_",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "initialExchangeRateMantissa_",
          type: "uint256",
        },
        { internalType: "string", name: "name_", type: "string" },
        { internalType: "string", name: "symbol_", type: "string" },
        { internalType: "uint8", name: "decimals_", type: "uint8" },
      ],
      name: "initialize",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "interestRateModel",
      outputs: [
        {
          internalType: "contract InterestRateModel",
          name: "",
          type: "address",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "isCToken",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        { internalType: "address", name: "borrower", type: "address" },
        {
          internalType: "contract CToken",
          name: "cTokenCollateral",
          type: "address",
        },
      ],
      name: "liquidateBorrow",
      outputs: [],
      payable: true,
      stateMutability: "payable",
      type: "function",
    },
    {
      constant: false,
      inputs: [],
      name: "mint",
      outputs: [],
      payable: true,
      stateMutability: "payable",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "name",
      outputs: [{ internalType: "string", name: "", type: "string" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "pendingAdmin",
      outputs: [{ internalType: "address payable", name: "", type: "address" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        { internalType: "uint256", name: "redeemTokens", type: "uint256" },
      ],
      name: "redeem",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        { internalType: "uint256", name: "redeemAmount", type: "uint256" },
      ],
      name: "redeemUnderlying",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [],
      name: "repayBorrow",
      outputs: [],
      payable: true,
      stateMutability: "payable",
      type: "function",
    },
    {
      constant: false,
      inputs: [{ internalType: "address", name: "borrower", type: "address" }],
      name: "repayBorrowBehalf",
      outputs: [],
      payable: true,
      stateMutability: "payable",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "reserveFactorMantissa",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        { internalType: "address", name: "liquidator", type: "address" },
        { internalType: "address", name: "borrower", type: "address" },
        { internalType: "uint256", name: "seizeTokens", type: "uint256" },
      ],
      name: "seize",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "supplyRatePerBlock",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "symbol",
      outputs: [{ internalType: "string", name: "", type: "string" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "totalBorrows",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: false,
      inputs: [],
      name: "totalBorrowsCurrent",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "totalReserves",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "totalSupply",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        { internalType: "address", name: "dst", type: "address" },
        { internalType: "uint256", name: "amount", type: "uint256" },
      ],
      name: "transfer",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        { internalType: "address", name: "src", type: "address" },
        { internalType: "address", name: "dst", type: "address" },
        { internalType: "uint256", name: "amount", type: "uint256" },
      ],
      name: "transferFrom",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
  ],

  CTOKEN_ABI: [
    {
      inputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint256",
          name: "cashPrior",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "interestAccumulated",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "borrowIndex",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "totalBorrows",
          type: "uint256",
        },
      ],
      name: "AccrueInterest",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "owner",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "spender",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "Approval",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "borrower",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "borrowAmount",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "accountBorrows",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "totalBorrows",
          type: "uint256",
        },
      ],
      name: "Borrow",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint256",
          name: "error",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "info",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "detail",
          type: "uint256",
        },
      ],
      name: "Failure",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "liquidator",
          type: "address",
        },
        {
          indexed: false,
          internalType: "address",
          name: "borrower",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "repayAmount",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "address",
          name: "cTokenCollateral",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "seizeTokens",
          type: "uint256",
        },
      ],
      name: "LiquidateBorrow",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "minter",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "mintAmount",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "mintTokens",
          type: "uint256",
        },
      ],
      name: "Mint",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "oldAdmin",
          type: "address",
        },
        {
          indexed: false,
          internalType: "address",
          name: "newAdmin",
          type: "address",
        },
      ],
      name: "NewAdmin",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "contract ComptrollerInterface",
          name: "oldComptroller",
          type: "address",
        },
        {
          indexed: false,
          internalType: "contract ComptrollerInterface",
          name: "newComptroller",
          type: "address",
        },
      ],
      name: "NewComptroller",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "contract InterestRateModel",
          name: "oldInterestRateModel",
          type: "address",
        },
        {
          indexed: false,
          internalType: "contract InterestRateModel",
          name: "newInterestRateModel",
          type: "address",
        },
      ],
      name: "NewMarketInterestRateModel",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "oldPendingAdmin",
          type: "address",
        },
        {
          indexed: false,
          internalType: "address",
          name: "newPendingAdmin",
          type: "address",
        },
      ],
      name: "NewPendingAdmin",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint256",
          name: "oldReserveFactorMantissa",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "newReserveFactorMantissa",
          type: "uint256",
        },
      ],
      name: "NewReserveFactor",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "redeemer",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "redeemAmount",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "redeemTokens",
          type: "uint256",
        },
      ],
      name: "Redeem",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "payer",
          type: "address",
        },
        {
          indexed: false,
          internalType: "address",
          name: "borrower",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "repayAmount",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "accountBorrows",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "totalBorrows",
          type: "uint256",
        },
      ],
      name: "RepayBorrow",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "benefactor",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "addAmount",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "newTotalReserves",
          type: "uint256",
        },
      ],
      name: "ReservesAdded",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "admin",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "reduceAmount",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "newTotalReserves",
          type: "uint256",
        },
      ],
      name: "ReservesReduced",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "from",
          type: "address",
        },
        { indexed: true, internalType: "address", name: "to", type: "address" },
        {
          indexed: false,
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "Transfer",
      type: "event",
    },
    {
      constant: false,
      inputs: [],
      name: "_acceptAdmin",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [{ internalType: "uint256", name: "addAmount", type: "uint256" }],
      name: "_addReserves",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [{ internalType: "bytes", name: "data", type: "bytes" }],
      name: "_becomeImplementation",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        { internalType: "uint256", name: "reduceAmount", type: "uint256" },
      ],
      name: "_reduceReserves",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [],
      name: "_resignImplementation",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        {
          internalType: "contract ComptrollerInterface",
          name: "newComptroller",
          type: "address",
        },
      ],
      name: "_setComptroller",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        {
          internalType: "contract InterestRateModel",
          name: "newInterestRateModel",
          type: "address",
        },
      ],
      name: "_setInterestRateModel",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        {
          internalType: "address payable",
          name: "newPendingAdmin",
          type: "address",
        },
      ],
      name: "_setPendingAdmin",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        {
          internalType: "uint256",
          name: "newReserveFactorMantissa",
          type: "uint256",
        },
      ],
      name: "_setReserveFactor",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "accrualBlockNumber",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: false,
      inputs: [],
      name: "accrueInterest",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "admin",
      outputs: [{ internalType: "address payable", name: "", type: "address" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [
        { internalType: "address", name: "owner", type: "address" },
        { internalType: "address", name: "spender", type: "address" },
      ],
      name: "allowance",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        { internalType: "address", name: "spender", type: "address" },
        { internalType: "uint256", name: "amount", type: "uint256" },
      ],
      name: "approve",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: true,
      inputs: [{ internalType: "address", name: "owner", type: "address" }],
      name: "balanceOf",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: false,
      inputs: [{ internalType: "address", name: "owner", type: "address" }],
      name: "balanceOfUnderlying",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        { internalType: "uint256", name: "borrowAmount", type: "uint256" },
      ],
      name: "borrow",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [{ internalType: "address", name: "account", type: "address" }],
      name: "borrowBalanceCurrent",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: true,
      inputs: [{ internalType: "address", name: "account", type: "address" }],
      name: "borrowBalanceStored",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "borrowIndex",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "borrowRatePerBlock",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "comptroller",
      outputs: [
        {
          internalType: "contract ComptrollerInterface",
          name: "",
          type: "address",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "decimals",
      outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: false,
      inputs: [],
      name: "exchangeRateCurrent",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "exchangeRateStored",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [{ internalType: "address", name: "account", type: "address" }],
      name: "getAccountSnapshot",
      outputs: [
        { internalType: "uint256", name: "", type: "uint256" },
        { internalType: "uint256", name: "", type: "uint256" },
        { internalType: "uint256", name: "", type: "uint256" },
        { internalType: "uint256", name: "", type: "uint256" },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "getCash",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "implementation",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        { internalType: "address", name: "underlying_", type: "address" },
        {
          internalType: "contract ComptrollerInterface",
          name: "comptroller_",
          type: "address",
        },
        {
          internalType: "contract InterestRateModel",
          name: "interestRateModel_",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "initialExchangeRateMantissa_",
          type: "uint256",
        },
        { internalType: "string", name: "name_", type: "string" },
        { internalType: "string", name: "symbol_", type: "string" },
        { internalType: "uint8", name: "decimals_", type: "uint8" },
      ],
      name: "initialize",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        {
          internalType: "contract ComptrollerInterface",
          name: "comptroller_",
          type: "address",
        },
        {
          internalType: "contract InterestRateModel",
          name: "interestRateModel_",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "initialExchangeRateMantissa_",
          type: "uint256",
        },
        { internalType: "string", name: "name_", type: "string" },
        { internalType: "string", name: "symbol_", type: "string" },
        { internalType: "uint8", name: "decimals_", type: "uint8" },
      ],
      name: "initialize",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "interestRateModel",
      outputs: [
        {
          internalType: "contract InterestRateModel",
          name: "",
          type: "address",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "isCToken",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        { internalType: "address", name: "borrower", type: "address" },
        { internalType: "uint256", name: "repayAmount", type: "uint256" },
        {
          internalType: "contract CTokenInterface",
          name: "cTokenCollateral",
          type: "address",
        },
      ],
      name: "liquidateBorrow",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        { internalType: "uint256", name: "mintAmount", type: "uint256" },
      ],
      name: "mint",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "name",
      outputs: [{ internalType: "string", name: "", type: "string" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "pendingAdmin",
      outputs: [{ internalType: "address payable", name: "", type: "address" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        { internalType: "uint256", name: "redeemTokens", type: "uint256" },
      ],
      name: "redeem",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        { internalType: "uint256", name: "redeemAmount", type: "uint256" },
      ],
      name: "redeemUnderlying",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        { internalType: "uint256", name: "repayAmount", type: "uint256" },
      ],
      name: "repayBorrow",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        { internalType: "address", name: "borrower", type: "address" },
        { internalType: "uint256", name: "repayAmount", type: "uint256" },
      ],
      name: "repayBorrowBehalf",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "reserveFactorMantissa",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        { internalType: "address", name: "liquidator", type: "address" },
        { internalType: "address", name: "borrower", type: "address" },
        { internalType: "uint256", name: "seizeTokens", type: "uint256" },
      ],
      name: "seize",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "supplyRatePerBlock",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "symbol",
      outputs: [{ internalType: "string", name: "", type: "string" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "totalBorrows",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: false,
      inputs: [],
      name: "totalBorrowsCurrent",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "totalReserves",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "totalSupply",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        { internalType: "address", name: "dst", type: "address" },
        { internalType: "uint256", name: "amount", type: "uint256" },
      ],
      name: "transfer",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        { internalType: "address", name: "src", type: "address" },
        { internalType: "address", name: "dst", type: "address" },
        { internalType: "uint256", name: "amount", type: "uint256" },
      ],
      name: "transferFrom",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "underlying",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
  ],

  INTEREST_MODEL_ABI: [
    {
      inputs: [
        { internalType: "uint256", name: "baseRatePerYear", type: "uint256" },
        { internalType: "uint256", name: "multiplierPerYear", type: "uint256" },
        {
          internalType: "uint256",
          name: "jumpMultiplierPerYear",
          type: "uint256",
        },
        { internalType: "uint256", name: "kink_", type: "uint256" },
      ],
      payable: false,
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint256",
          name: "baseRatePerBlock",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "multiplierPerBlock",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "jumpMultiplierPerBlock",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "kink",
          type: "uint256",
        },
      ],
      name: "NewInterestParams",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "previousOwner",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "newOwner",
          type: "address",
        },
      ],
      name: "OwnershipTransferred",
      type: "event",
    },
    {
      constant: true,
      inputs: [],
      name: "baseRatePerBlock",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "blocksPerYear",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [
        { internalType: "uint256", name: "cash", type: "uint256" },
        { internalType: "uint256", name: "borrows", type: "uint256" },
        { internalType: "uint256", name: "reserves", type: "uint256" },
      ],
      name: "getBorrowRate",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [
        { internalType: "uint256", name: "cash", type: "uint256" },
        { internalType: "uint256", name: "borrows", type: "uint256" },
        { internalType: "uint256", name: "reserves", type: "uint256" },
        {
          internalType: "uint256",
          name: "reserveFactorMantissa",
          type: "uint256",
        },
      ],
      name: "getSupplyRate",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "isInterestRateModel",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "isOwner",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "jumpMultiplierPerBlock",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "kink",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "multiplierPerBlock",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "owner",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: false,
      inputs: [],
      name: "renounceOwnership",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
      name: "transferOwnership",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        { internalType: "uint256", name: "blocksPerYear_", type: "uint256" },
      ],
      name: "updateBlocksPerYear",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        { internalType: "uint256", name: "baseRatePerYear", type: "uint256" },
        { internalType: "uint256", name: "multiplierPerYear", type: "uint256" },
        {
          internalType: "uint256",
          name: "jumpMultiplierPerYear",
          type: "uint256",
        },
        { internalType: "uint256", name: "kink_", type: "uint256" },
      ],
      name: "updateJumpRateModel",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: true,
      inputs: [
        { internalType: "uint256", name: "cash", type: "uint256" },
        { internalType: "uint256", name: "borrows", type: "uint256" },
        { internalType: "uint256", name: "reserves", type: "uint256" },
      ],
      name: "utilizationRate",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "pure",
      type: "function",
    },
  ],

  INTEREST_MODEL_V5_ABI: [
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "baseRatePerYear",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "multiplierPerYear",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "jumpMultiplierPerYear",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "kink_",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "owner_",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "name_",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "baseRatePerSecond",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "multiplierPerSecond",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "jumpMultiplierPerSecond",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "kink",
          "type": "uint256"
        }
      ],
      "name": "NewInterestParams",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "baseRatePerSecond",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "cash",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "borrows",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "reserves",
          "type": "uint256"
        }
      ],
      "name": "getBorrowRate",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "cash",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "borrows",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "reserves",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "reserveFactorMantissa",
          "type": "uint256"
        }
      ],
      "name": "getSupplyRate",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "isInterestRateModel",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "isOwner",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "jumpMultiplierPerSecond",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "kink",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "multiplierPerSecond",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "secondsPerYear",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "baseRatePerYear",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "multiplierPerYear",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "jumpMultiplierPerYear",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "kink_",
          "type": "uint256"
        }
      ],
      "name": "updateJumpRateModel",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "cash",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "borrows",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "reserves",
          "type": "uint256"
        }
      ],
      "name": "utilizationRate",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "pure",
      "type": "function"
    }
  ],

  NO_KINK_MODEL_ABI: [
    {
      inputs: [
        { internalType: "uint256", name: "baseRatePerYear", type: "uint256" },
        { internalType: "uint256", name: "multiplierPerYear", type: "uint256" },
      ],
      payable: false,
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint256",
          name: "baseRatePerBlock",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "multiplierPerBlock",
          type: "uint256",
        },
      ],
      name: "NewInterestParams",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "previousOwner",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "newOwner",
          type: "address",
        },
      ],
      name: "OwnershipTransferred",
      type: "event",
    },
    {
      constant: true,
      inputs: [],
      name: "baseRatePerBlock",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "blocksPerYear",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [
        { internalType: "uint256", name: "cash", type: "uint256" },
        { internalType: "uint256", name: "borrows", type: "uint256" },
        { internalType: "uint256", name: "reserves", type: "uint256" },
      ],
      name: "getBorrowRate",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [
        { internalType: "uint256", name: "cash", type: "uint256" },
        { internalType: "uint256", name: "borrows", type: "uint256" },
        { internalType: "uint256", name: "reserves", type: "uint256" },
        {
          internalType: "uint256",
          name: "reserveFactorMantissa",
          type: "uint256",
        },
      ],
      name: "getSupplyRate",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "isInterestRateModel",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "isOwner",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "multiplierPerBlock",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "owner",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: false,
      inputs: [],
      name: "renounceOwnership",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
      name: "transferOwnership",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        { internalType: "uint256", name: "blocksPerYear_", type: "uint256" },
      ],
      name: "updateBlocksPerYear",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        { internalType: "uint256", name: "baseRatePerYear", type: "uint256" },
        { internalType: "uint256", name: "multiplierPerYear", type: "uint256" },
      ],
      name: "updateRateModel",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: true,
      inputs: [
        { internalType: "uint256", name: "cash", type: "uint256" },
        { internalType: "uint256", name: "borrows", type: "uint256" },
        { internalType: "uint256", name: "reserves", type: "uint256" },
      ],
      name: "utilizationRate",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "pure",
      type: "function",
    },
  ],

  ORACLE_ABI: [
    {
      inputs: [
        {
          internalType: "address",
          name: "ethUsdChainlinkAggregatorAddress_",
          type: "address",
        },
      ],
      payable: false,
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "previousOwner",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "newOwner",
          type: "address",
        },
      ],
      name: "OwnershipTransferred",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "cTokenAddress",
          type: "address",
        },
        {
          indexed: false,
          internalType: "address",
          name: "chainlinkAggregatorAddress",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "chainlinkPriceBase",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "underlyingTokenDecimals",
          type: "uint256",
        },
      ],
      name: "TokenConfigUpdated",
      type: "event",
    },
    {
      constant: true,
      inputs: [],
      name: "ethUsdChainlinkAggregatorAddress",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [
        {
          internalType: "contract CTokenInterface",
          name: "cToken",
          type: "address",
        },
      ],
      name: "getUnderlyingPrice",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "isPriceOracle",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "owner",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: false,
      inputs: [],
      name: "renounceOwnership",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [{ internalType: "address", name: "addr", type: "address" }],
      name: "setEthUsdChainlinkAggregatorAddress",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        { internalType: "address[]", name: "cTokenAddress", type: "address[]" },
        {
          internalType: "address[]",
          name: "chainlinkAggregatorAddress",
          type: "address[]",
        },
        {
          internalType: "uint256[]",
          name: "chainlinkPriceBase",
          type: "uint256[]",
        },
        {
          internalType: "uint256[]",
          name: "underlyingTokenDecimals",
          type: "uint256[]",
        },
      ],
      name: "setTokenConfigs",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: true,
      inputs: [{ internalType: "address", name: "", type: "address" }],
      name: "tokenConfig",
      outputs: [
        {
          internalType: "address",
          name: "chainlinkAggregatorAddress",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "chainlinkPriceBase",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "underlyingTokenDecimals",
          type: "uint256",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: false,
      inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
      name: "transferOwnership",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
  ],

  MKR_TOKEN_ABI: [
    {
      constant: true,
      inputs: [],
      name: "name",
      outputs: [{ name: "", type: "bytes32" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: false,
      inputs: [],
      name: "stop",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        { name: "guy", type: "address" },
        { name: "wad", type: "uint256" },
      ],
      name: "approve",
      outputs: [{ name: "", type: "bool" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [{ name: "owner_", type: "address" }],
      name: "setOwner",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "totalSupply",
      outputs: [{ name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        { name: "src", type: "address" },
        { name: "dst", type: "address" },
        { name: "wad", type: "uint256" },
      ],
      name: "transferFrom",
      outputs: [{ name: "", type: "bool" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "decimals",
      outputs: [{ name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        { name: "guy", type: "address" },
        { name: "wad", type: "uint256" },
      ],
      name: "mint",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [{ name: "wad", type: "uint256" }],
      name: "burn",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [{ name: "name_", type: "bytes32" }],
      name: "setName",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: true,
      inputs: [{ name: "src", type: "address" }],
      name: "balanceOf",
      outputs: [{ name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "stopped",
      outputs: [{ name: "", type: "bool" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: false,
      inputs: [{ name: "authority_", type: "address" }],
      name: "setAuthority",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "owner",
      outputs: [{ name: "", type: "address" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "symbol",
      outputs: [{ name: "", type: "bytes32" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        { name: "guy", type: "address" },
        { name: "wad", type: "uint256" },
      ],
      name: "burn",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [{ name: "wad", type: "uint256" }],
      name: "mint",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        { name: "dst", type: "address" },
        { name: "wad", type: "uint256" },
      ],
      name: "transfer",
      outputs: [{ name: "", type: "bool" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        { name: "dst", type: "address" },
        { name: "wad", type: "uint256" },
      ],
      name: "push",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        { name: "src", type: "address" },
        { name: "dst", type: "address" },
        { name: "wad", type: "uint256" },
      ],
      name: "move",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [],
      name: "start",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "authority",
      outputs: [{ name: "", type: "address" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: false,
      inputs: [{ name: "guy", type: "address" }],
      name: "approve",
      outputs: [{ name: "", type: "bool" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: true,
      inputs: [
        { name: "src", type: "address" },
        { name: "guy", type: "address" },
      ],
      name: "allowance",
      outputs: [{ name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        { name: "src", type: "address" },
        { name: "wad", type: "uint256" },
      ],
      name: "pull",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{ name: "symbol_", type: "bytes32" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      anonymous: false,
      inputs: [
        { indexed: true, name: "guy", type: "address" },
        { indexed: false, name: "wad", type: "uint256" },
      ],
      name: "Mint",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        { indexed: true, name: "guy", type: "address" },
        { indexed: false, name: "wad", type: "uint256" },
      ],
      name: "Burn",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [{ indexed: true, name: "authority", type: "address" }],
      name: "LogSetAuthority",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [{ indexed: true, name: "owner", type: "address" }],
      name: "LogSetOwner",
      type: "event",
    },
    {
      anonymous: true,
      inputs: [
        { indexed: true, name: "sig", type: "bytes4" },
        { indexed: true, name: "guy", type: "address" },
        { indexed: true, name: "foo", type: "bytes32" },
        { indexed: true, name: "bar", type: "bytes32" },
        { indexed: false, name: "wad", type: "uint256" },
        { indexed: false, name: "fax", type: "bytes" },
      ],
      name: "LogNote",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        { indexed: true, name: "from", type: "address" },
        { indexed: true, name: "to", type: "address" },
        { indexed: false, name: "value", type: "uint256" },
      ],
      name: "Transfer",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        { indexed: true, name: "owner", type: "address" },
        { indexed: true, name: "spender", type: "address" },
        { indexed: false, name: "value", type: "uint256" },
      ],
      name: "Approval",
      type: "event",
    },
  ],

  HUNDRED_ABI: [
    {
      inputs: [
        { internalType: "address", name: "ownerAddress", type: "address" },
      ],
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "owner",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "spender",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "value",
          type: "uint256",
        },
      ],
      name: "Approval",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "auth",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "timestamp",
          type: "uint256",
        },
      ],
      name: "LogAddAuth",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "oldOwner",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "newOwner",
          type: "address",
        },
        {
          indexed: true,
          internalType: "uint256",
          name: "effectiveHeight",
          type: "uint256",
        },
      ],
      name: "LogChangeMPCOwner",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "oldVault",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "newVault",
          type: "address",
        },
        {
          indexed: true,
          internalType: "uint256",
          name: "effectiveTime",
          type: "uint256",
        },
      ],
      name: "LogChangeVault",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "bytes32",
          name: "txhash",
          type: "bytes32",
        },
        {
          indexed: true,
          internalType: "address",
          name: "account",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "LogSwapin",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "account",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "bindaddr",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "LogSwapout",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "from",
          type: "address",
        },
        { indexed: true, internalType: "address", name: "to", type: "address" },
        {
          indexed: false,
          internalType: "uint256",
          name: "value",
          type: "uint256",
        },
      ],
      name: "Transfer",
      type: "event",
    },
    {
      inputs: [],
      name: "DOMAIN_SEPARATOR",
      outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "PERMIT_TYPEHASH",
      outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "bytes32", name: "txhash", type: "bytes32" },
        { internalType: "address", name: "account", type: "address" },
        { internalType: "uint256", name: "amount", type: "uint256" },
      ],
      name: "Swapin",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "uint256", name: "amount", type: "uint256" },
        { internalType: "address", name: "bindaddr", type: "address" },
      ],
      name: "Swapout",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "TRANSFER_TYPEHASH",
      outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "", type: "address" },
        { internalType: "address", name: "", type: "address" },
      ],
      name: "allowance",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "applyMinter",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "applyVault",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "spender", type: "address" },
        { internalType: "uint256", name: "value", type: "uint256" },
      ],
      name: "approve",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "spender", type: "address" },
        { internalType: "uint256", name: "value", type: "uint256" },
        { internalType: "bytes", name: "data", type: "bytes" },
      ],
      name: "approveAndCall",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{ internalType: "address", name: "", type: "address" }],
      name: "balanceOf",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "from", type: "address" },
        { internalType: "uint256", name: "amount", type: "uint256" },
      ],
      name: "burn",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{ internalType: "address", name: "newVault", type: "address" }],
      name: "changeMPCOwner",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{ internalType: "address", name: "newVault", type: "address" }],
      name: "changeVault",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "decimals",
      outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "delay",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "delayDelay",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "delayMinter",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "delayVault",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "uint256", name: "amount", type: "uint256" },
        { internalType: "address", name: "to", type: "address" },
      ],
      name: "deposit",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{ internalType: "uint256", name: "amount", type: "uint256" }],
      name: "deposit",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "deposit",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "uint256", name: "amount", type: "uint256" },
        { internalType: "address", name: "to", type: "address" },
      ],
      name: "depositVault",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "target", type: "address" },
        { internalType: "uint256", name: "value", type: "uint256" },
        { internalType: "uint256", name: "deadline", type: "uint256" },
        { internalType: "uint8", name: "v", type: "uint8" },
        { internalType: "bytes32", name: "r", type: "bytes32" },
        { internalType: "bytes32", name: "s", type: "bytes32" },
        { internalType: "address", name: "to", type: "address" },
      ],
      name: "depositWithPermit",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "target", type: "address" },
        { internalType: "uint256", name: "value", type: "uint256" },
        { internalType: "uint256", name: "deadline", type: "uint256" },
        { internalType: "uint8", name: "v", type: "uint8" },
        { internalType: "bytes32", name: "r", type: "bytes32" },
        { internalType: "bytes32", name: "s", type: "bytes32" },
        { internalType: "address", name: "to", type: "address" },
      ],
      name: "depositWithTransferPermit",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "getAllMinters",
      outputs: [{ internalType: "address[]", name: "", type: "address[]" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "address", name: "_vault", type: "address" }],
      name: "initVault",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{ internalType: "address", name: "", type: "address" }],
      name: "isMinter",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "to", type: "address" },
        { internalType: "uint256", name: "amount", type: "uint256" },
      ],
      name: "mint",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      name: "minters",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "mpc",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "name",
      outputs: [{ internalType: "string", name: "", type: "string" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "address", name: "", type: "address" }],
      name: "nonces",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "owner",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "pendingDelay",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "pendingMinter",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "pendingVault",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "target", type: "address" },
        { internalType: "address", name: "spender", type: "address" },
        { internalType: "uint256", name: "value", type: "uint256" },
        { internalType: "uint256", name: "deadline", type: "uint256" },
        { internalType: "uint8", name: "v", type: "uint8" },
        { internalType: "bytes32", name: "r", type: "bytes32" },
        { internalType: "bytes32", name: "s", type: "bytes32" },
      ],
      name: "permit",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{ internalType: "address", name: "_auth", type: "address" }],
      name: "revokeMinter",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{ internalType: "address", name: "_auth", type: "address" }],
      name: "setMinter",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{ internalType: "address", name: "_vault", type: "address" }],
      name: "setVault",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{ internalType: "bool", name: "enabled", type: "bool" }],
      name: "setVaultOnly",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "symbol",
      outputs: [{ internalType: "string", name: "", type: "string" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "totalSupply",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "to", type: "address" },
        { internalType: "uint256", name: "value", type: "uint256" },
      ],
      name: "transfer",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "to", type: "address" },
        { internalType: "uint256", name: "value", type: "uint256" },
        { internalType: "bytes", name: "data", type: "bytes" },
      ],
      name: "transferAndCall",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "from", type: "address" },
        { internalType: "address", name: "to", type: "address" },
        { internalType: "uint256", name: "value", type: "uint256" },
      ],
      name: "transferFrom",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "target", type: "address" },
        { internalType: "address", name: "to", type: "address" },
        { internalType: "uint256", name: "value", type: "uint256" },
        { internalType: "uint256", name: "deadline", type: "uint256" },
        { internalType: "uint8", name: "v", type: "uint8" },
        { internalType: "bytes32", name: "r", type: "bytes32" },
        { internalType: "bytes32", name: "s", type: "bytes32" },
      ],
      name: "transferWithPermit",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "underlying",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "vault",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "uint256", name: "amount", type: "uint256" },
        { internalType: "address", name: "to", type: "address" },
      ],
      name: "withdraw",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{ internalType: "uint256", name: "amount", type: "uint256" }],
      name: "withdraw",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "withdraw",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "from", type: "address" },
        { internalType: "uint256", name: "amount", type: "uint256" },
        { internalType: "address", name: "to", type: "address" },
      ],
      name: "withdrawVault",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "nonpayable",
      type: "function",
    },
  ],

  GUARDIAN_ABI: [
    {
      inputs: [
        {
          internalType: "contract IComptroller",
          name: "comptroller",
          type: "address",
        },
      ],
      payable: false,
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "previousOwner",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "newOwner",
          type: "address",
        },
      ],
      name: "OwnershipTransferred",
      type: "event",
    },
    {
      constant: true,
      inputs: [],
      name: "Comptroller",
      outputs: [
        { internalType: "contract IComptroller", name: "", type: "address" },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "isOwner",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "owner",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: false,
      inputs: [],
      name: "pauseAll",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [],
      name: "pauseAllBorrows",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [],
      name: "pauseAllMints",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [],
      name: "renounceOwnership",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [{ internalType: "address", name: "cToken", type: "address" }],
      name: "setBorrowPaused",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        {
          internalType: "contract IComptroller",
          name: "comptroller",
          type: "address",
        },
      ],
      name: "setComptroller",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [{ internalType: "address", name: "cToken", type: "address" }],
      name: "setMintPaused",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [],
      name: "setSeizePaused",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [],
      name: "setTransferPaused",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
      name: "transferOwnership",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
  ],

  GAUGE_V4_ABI: [
    {
      name: "Deposit",
      inputs: [
        { name: "provider", type: "address", indexed: true },
        { name: "value", type: "uint256", indexed: false },
      ],
      anonymous: false,
      type: "event",
    },
    {
      name: "Withdraw",
      inputs: [
        { name: "provider", type: "address", indexed: true },
        { name: "value", type: "uint256", indexed: false },
      ],
      anonymous: false,
      type: "event",
    },
    {
      name: "UpdateLiquidityLimit",
      inputs: [
        { name: "user", type: "address", indexed: false },
        { name: "original_balance", type: "uint256", indexed: false },
        { name: "original_supply", type: "uint256", indexed: false },
        { name: "working_balance", type: "uint256", indexed: false },
        { name: "working_supply", type: "uint256", indexed: false },
      ],
      anonymous: false,
      type: "event",
    },
    {
      name: "CommitOwnership",
      inputs: [{ name: "admin", type: "address", indexed: false }],
      anonymous: false,
      type: "event",
    },
    {
      name: "ApplyOwnership",
      inputs: [{ name: "admin", type: "address", indexed: false }],
      anonymous: false,
      type: "event",
    },
    {
      name: "Transfer",
      inputs: [
        { name: "_from", type: "address", indexed: true },
        { name: "_to", type: "address", indexed: true },
        { name: "_value", type: "uint256", indexed: false },
      ],
      anonymous: false,
      type: "event",
    },
    {
      name: "Approval",
      inputs: [
        { name: "_owner", type: "address", indexed: true },
        { name: "_spender", type: "address", indexed: true },
        { name: "_value", type: "uint256", indexed: false },
      ],
      anonymous: false,
      type: "event",
    },
    {
      stateMutability: "nonpayable",
      type: "constructor",
      inputs: [
        { name: "_lp_token", type: "address" },
        { name: "_minter", type: "address" },
        { name: "_admin", type: "address" },
        { name: "_reward_policy_maker", type: "address" },
      ],
      outputs: [],
    },
    {
      stateMutability: "view",
      type: "function",
      name: "decimals",
      inputs: [],
      outputs: [{ name: "", type: "uint256" }],
    },
    {
      stateMutability: "view",
      type: "function",
      name: "integrate_checkpoint",
      inputs: [],
      outputs: [{ name: "", type: "uint256" }],
    },
    {
      stateMutability: "nonpayable",
      type: "function",
      name: "user_checkpoint",
      inputs: [{ name: "addr", type: "address" }],
      outputs: [{ name: "", type: "bool" }],
    },
    {
      stateMutability: "view",
      type: "function",
      name: "claimable_tokens",
      inputs: [{ name: "addr", type: "address" }],
      outputs: [{ name: "", type: "uint256" }],
    },
    {
      stateMutability: "view",
      type: "function",
      name: "reward_contract",
      inputs: [],
      outputs: [{ name: "", type: "address" }],
    },
    {
      stateMutability: "view",
      type: "function",
      name: "last_claim",
      inputs: [],
      outputs: [{ name: "", type: "uint256" }],
    },
    {
      stateMutability: "view",
      type: "function",
      name: "claimed_reward",
      inputs: [
        { name: "_addr", type: "address" },
        { name: "_token", type: "address" },
      ],
      outputs: [{ name: "", type: "uint256" }],
    },
    {
      stateMutability: "view",
      type: "function",
      name: "claimable_reward",
      inputs: [
        { name: "_addr", type: "address" },
        { name: "_token", type: "address" },
      ],
      outputs: [{ name: "", type: "uint256" }],
    },
    {
      stateMutability: "nonpayable",
      type: "function",
      name: "claimable_reward_write",
      inputs: [
        { name: "_addr", type: "address" },
        { name: "_token", type: "address" },
      ],
      outputs: [{ name: "", type: "uint256" }],
    },
    {
      stateMutability: "nonpayable",
      type: "function",
      name: "set_rewards_receiver",
      inputs: [{ name: "_receiver", type: "address" }],
      outputs: [],
    },
    {
      stateMutability: "nonpayable",
      type: "function",
      name: "claim_rewards",
      inputs: [],
      outputs: [],
    },
    {
      stateMutability: "nonpayable",
      type: "function",
      name: "claim_rewards",
      inputs: [{ name: "_addr", type: "address" }],
      outputs: [],
    },
    {
      stateMutability: "nonpayable",
      type: "function",
      name: "claim_rewards",
      inputs: [
        { name: "_addr", type: "address" },
        { name: "_receiver", type: "address" },
      ],
      outputs: [],
    },
    {
      stateMutability: "nonpayable",
      type: "function",
      name: "kick",
      inputs: [{ name: "addr", type: "address" }],
      outputs: [],
    },
    {
      stateMutability: "nonpayable",
      type: "function",
      name: "deposit",
      inputs: [{ name: "_value", type: "uint256" }],
      outputs: [],
    },
    {
      stateMutability: "nonpayable",
      type: "function",
      name: "withdraw",
      inputs: [{ name: "_value", type: "uint256" }],
      outputs: [],
    },
    {
      stateMutability: "nonpayable",
      type: "function",
      name: "transfer",
      inputs: [
        { name: "_to", type: "address" },
        { name: "_value", type: "uint256" },
      ],
      outputs: [{ name: "", type: "bool" }],
    },
    {
      stateMutability: "nonpayable",
      type: "function",
      name: "transferFrom",
      inputs: [
        { name: "_from", type: "address" },
        { name: "_to", type: "address" },
        { name: "_value", type: "uint256" },
      ],
      outputs: [{ name: "", type: "bool" }],
    },
    {
      stateMutability: "nonpayable",
      type: "function",
      name: "approve",
      inputs: [
        { name: "_spender", type: "address" },
        { name: "_value", type: "uint256" },
      ],
      outputs: [{ name: "", type: "bool" }],
    },
    {
      stateMutability: "nonpayable",
      type: "function",
      name: "increaseAllowance",
      inputs: [
        { name: "_spender", type: "address" },
        { name: "_added_value", type: "uint256" },
      ],
      outputs: [{ name: "", type: "bool" }],
    },
    {
      stateMutability: "nonpayable",
      type: "function",
      name: "decreaseAllowance",
      inputs: [
        { name: "_spender", type: "address" },
        { name: "_subtracted_value", type: "uint256" },
      ],
      outputs: [{ name: "", type: "bool" }],
    },
    {
      stateMutability: "nonpayable",
      type: "function",
      name: "set_rewards",
      inputs: [
        { name: "_reward_contract", type: "address" },
        { name: "_sigs", type: "bytes32" },
        { name: "_reward_tokens", type: "address[8]" },
      ],
      outputs: [],
    },
    {
      stateMutability: "nonpayable",
      type: "function",
      name: "set_killed",
      inputs: [{ name: "_is_killed", type: "bool" }],
      outputs: [],
    },
    {
      stateMutability: "nonpayable",
      type: "function",
      name: "commit_transfer_ownership",
      inputs: [{ name: "addr", type: "address" }],
      outputs: [],
    },
    {
      stateMutability: "nonpayable",
      type: "function",
      name: "accept_transfer_ownership",
      inputs: [],
      outputs: [],
    },
    {
      stateMutability: "view",
      type: "function",
      name: "minter",
      inputs: [],
      outputs: [{ name: "", type: "address" }],
    },
    {
      stateMutability: "view",
      type: "function",
      name: "reward_policy_maker",
      inputs: [],
      outputs: [{ name: "", type: "address" }],
    },
    {
      stateMutability: "view",
      type: "function",
      name: "lp_token",
      inputs: [],
      outputs: [{ name: "", type: "address" }],
    },
    {
      stateMutability: "view",
      type: "function",
      name: "controller",
      inputs: [],
      outputs: [{ name: "", type: "address" }],
    },
    {
      stateMutability: "view",
      type: "function",
      name: "voting_escrow",
      inputs: [],
      outputs: [{ name: "", type: "address" }],
    },
    {
      stateMutability: "view",
      type: "function",
      name: "balanceOf",
      inputs: [{ name: "arg0", type: "address" }],
      outputs: [{ name: "", type: "uint256" }],
    },
    {
      stateMutability: "view",
      type: "function",
      name: "totalSupply",
      inputs: [],
      outputs: [{ name: "", type: "uint256" }],
    },
    {
      stateMutability: "view",
      type: "function",
      name: "allowance",
      inputs: [
        { name: "arg0", type: "address" },
        { name: "arg1", type: "address" },
      ],
      outputs: [{ name: "", type: "uint256" }],
    },
    {
      stateMutability: "view",
      type: "function",
      name: "name",
      inputs: [],
      outputs: [{ name: "", type: "string" }],
    },
    {
      stateMutability: "view",
      type: "function",
      name: "symbol",
      inputs: [],
      outputs: [{ name: "", type: "string" }],
    },
    {
      stateMutability: "view",
      type: "function",
      name: "working_balances",
      inputs: [{ name: "arg0", type: "address" }],
      outputs: [{ name: "", type: "uint256" }],
    },
    {
      stateMutability: "view",
      type: "function",
      name: "working_supply",
      inputs: [],
      outputs: [{ name: "", type: "uint256" }],
    },
    {
      stateMutability: "view",
      type: "function",
      name: "period",
      inputs: [],
      outputs: [{ name: "", type: "int128" }],
    },
    {
      stateMutability: "view",
      type: "function",
      name: "period_timestamp",
      inputs: [{ name: "arg0", type: "uint256" }],
      outputs: [{ name: "", type: "uint256" }],
    },
    {
      stateMutability: "view",
      type: "function",
      name: "integrate_inv_supply",
      inputs: [{ name: "arg0", type: "uint256" }],
      outputs: [{ name: "", type: "uint256" }],
    },
    {
      stateMutability: "view",
      type: "function",
      name: "integrate_inv_supply_of",
      inputs: [{ name: "arg0", type: "address" }],
      outputs: [{ name: "", type: "uint256" }],
    },
    {
      stateMutability: "view",
      type: "function",
      name: "integrate_checkpoint_of",
      inputs: [{ name: "arg0", type: "address" }],
      outputs: [{ name: "", type: "uint256" }],
    },
    {
      stateMutability: "view",
      type: "function",
      name: "integrate_fraction",
      inputs: [{ name: "arg0", type: "address" }],
      outputs: [{ name: "", type: "uint256" }],
    },
    {
      stateMutability: "view",
      type: "function",
      name: "reward_tokens",
      inputs: [{ name: "arg0", type: "uint256" }],
      outputs: [{ name: "", type: "address" }],
    },
    {
      stateMutability: "view",
      type: "function",
      name: "rewards_receiver",
      inputs: [{ name: "arg0", type: "address" }],
      outputs: [{ name: "", type: "address" }],
    },
    {
      stateMutability: "view",
      type: "function",
      name: "reward_integral",
      inputs: [{ name: "arg0", type: "address" }],
      outputs: [{ name: "", type: "uint256" }],
    },
    {
      stateMutability: "view",
      type: "function",
      name: "reward_integral_for",
      inputs: [
        { name: "arg0", type: "address" },
        { name: "arg1", type: "address" },
      ],
      outputs: [{ name: "", type: "uint256" }],
    },
    {
      stateMutability: "view",
      type: "function",
      name: "admin",
      inputs: [],
      outputs: [{ name: "", type: "address" }],
    },
    {
      stateMutability: "view",
      type: "function",
      name: "future_admin",
      inputs: [],
      outputs: [{ name: "", type: "address" }],
    },
    {
      stateMutability: "view",
      type: "function",
      name: "is_killed",
      inputs: [],
      outputs: [{ name: "", type: "bool" }],
    },
  ],

  GAUGE_CONTROLLER_ABI: [
    {
      anonymous: false,
      inputs: [{ indexed: false, name: "admin", type: "address" }],
      name: "CommitOwnership",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [{ indexed: false, name: "admin", type: "address" }],
      name: "ApplyOwnership",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        { indexed: false, name: "name", type: "string" },
        { indexed: false, name: "type_id", type: "int128" },
      ],
      name: "AddType",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        { indexed: false, name: "type_id", type: "int128" },
        { indexed: false, name: "time", type: "uint256" },
        { indexed: false, name: "weight", type: "uint256" },
        { indexed: false, name: "total_weight", type: "uint256" },
      ],
      name: "NewTypeWeight",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        { indexed: false, name: "gauge_address", type: "address" },
        { indexed: false, name: "time", type: "uint256" },
        { indexed: false, name: "weight", type: "uint256" },
        { indexed: false, name: "total_weight", type: "uint256" },
      ],
      name: "NewGaugeWeight",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        { indexed: false, name: "time", type: "uint256" },
        { indexed: false, name: "user", type: "address" },
        { indexed: false, name: "gauge_addr", type: "address" },
        { indexed: false, name: "weight", type: "uint256" },
      ],
      name: "VoteForGauge",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        { indexed: false, name: "addr", type: "address" },
        { indexed: false, name: "gauge_type", type: "int128" },
        { indexed: false, name: "weight", type: "uint256" },
      ],
      name: "NewGauge",
      type: "event",
    },
    {
      inputs: [
        { name: "_token", type: "address" },
        { name: "_voting_escrow", type: "address" },
      ],
      outputs: [],
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      inputs: [{ name: "addr", type: "address" }],
      name: "commit_transfer_ownership",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "apply_transfer_ownership",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{ name: "_addr", type: "address" }],
      name: "gauge_types",
      outputs: [{ name: "", type: "int128" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { name: "addr", type: "address" },
        { name: "gauge_type", type: "int128" },
      ],
      name: "add_gauge",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        { name: "addr", type: "address" },
        { name: "gauge_type", type: "int128" },
        { name: "weight", type: "uint256" },
      ],
      name: "add_gauge",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "checkpoint",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{ name: "addr", type: "address" }],
      name: "checkpoint_gauge",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{ name: "addr", type: "address" }],
      name: "gauge_relative_weight",
      outputs: [{ name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { name: "addr", type: "address" },
        { name: "time", type: "uint256" },
      ],
      name: "gauge_relative_weight",
      outputs: [{ name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ name: "addr", type: "address" }],
      name: "gauge_relative_weight_write",
      outputs: [{ name: "", type: "uint256" }],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        { name: "addr", type: "address" },
        { name: "time", type: "uint256" },
      ],
      name: "gauge_relative_weight_write",
      outputs: [{ name: "", type: "uint256" }],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{ name: "_name", type: "string" }],
      name: "add_type",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        { name: "_name", type: "string" },
        { name: "weight", type: "uint256" },
      ],
      name: "add_type",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        { name: "type_id", type: "int128" },
        { name: "weight", type: "uint256" },
      ],
      name: "change_type_weight",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        { name: "addr", type: "address" },
        { name: "weight", type: "uint256" },
      ],
      name: "change_gauge_weight",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        { name: "_gauge_addr", type: "address" },
        { name: "_user_weight", type: "uint256" },
      ],
      name: "vote_for_gauge_weights",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{ name: "addr", type: "address" }],
      name: "get_gauge_weight",
      outputs: [{ name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ name: "type_id", type: "int128" }],
      name: "get_type_weight",
      outputs: [{ name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "get_total_weight",
      outputs: [{ name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ name: "type_id", type: "int128" }],
      name: "get_weights_sum_per_type",
      outputs: [{ name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "admin",
      outputs: [{ name: "", type: "address" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "future_admin",
      outputs: [{ name: "", type: "address" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "token",
      outputs: [{ name: "", type: "address" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "voting_escrow",
      outputs: [{ name: "", type: "address" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "n_gauge_types",
      outputs: [{ name: "", type: "int128" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "n_gauges",
      outputs: [{ name: "", type: "int128" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ name: "arg0", type: "int128" }],
      name: "gauge_type_names",
      outputs: [{ name: "", type: "string" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ name: "arg0", type: "uint256" }],
      name: "gauges",
      outputs: [{ name: "", type: "address" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { name: "arg0", type: "address" },
        { name: "arg1", type: "address" },
      ],
      name: "vote_user_slopes",
      outputs: [
        { name: "slope", type: "uint256" },
        { name: "power", type: "uint256" },
        { name: "end", type: "uint256" },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ name: "arg0", type: "address" }],
      name: "vote_user_power",
      outputs: [{ name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { name: "arg0", type: "address" },
        { name: "arg1", type: "address" },
      ],
      name: "last_user_vote",
      outputs: [{ name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { name: "arg0", type: "address" },
        { name: "arg1", type: "uint256" },
      ],
      name: "points_weight",
      outputs: [
        { name: "bias", type: "uint256" },
        { name: "slope", type: "uint256" },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ name: "arg0", type: "address" }],
      name: "time_weight",
      outputs: [{ name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { name: "arg0", type: "int128" },
        { name: "arg1", type: "uint256" },
      ],
      name: "points_sum",
      outputs: [
        { name: "bias", type: "uint256" },
        { name: "slope", type: "uint256" },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ name: "arg0", type: "uint256" }],
      name: "time_sum",
      outputs: [{ name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ name: "arg0", type: "uint256" }],
      name: "points_total",
      outputs: [{ name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "time_total",
      outputs: [{ name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { name: "arg0", type: "int128" },
        { name: "arg1", type: "uint256" },
      ],
      name: "points_type_weight",
      outputs: [{ name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ name: "arg0", type: "uint256" }],
      name: "time_type_weight",
      outputs: [{ name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
  ],
  REWARD_POLICY_MAKER_ABI: [
    {
      name: "SetAdmin",
      inputs: [{ name: "admin", type: "address", indexed: false }],
      anonymous: false,
      type: "event",
    },
    {
      stateMutability: "nonpayable",
      type: "constructor",
      inputs: [{ name: "_epoch_length", type: "uint256" }],
      outputs: [],
    },
    {
      stateMutability: "view",
      type: "function",
      name: "epoch_at",
      inputs: [{ name: "_timestamp", type: "uint256" }],
      outputs: [{ name: "", type: "uint256" }],
    },
    {
      stateMutability: "view",
      type: "function",
      name: "epoch_start_time",
      inputs: [{ name: "_epoch", type: "uint256" }],
      outputs: [{ name: "", type: "uint256" }],
    },
    {
      stateMutability: "view",
      type: "function",
      name: "rate_at",
      inputs: [{ name: "_timestamp", type: "uint256" }],
      outputs: [{ name: "", type: "uint256" }],
    },
    {
      stateMutability: "view",
      type: "function",
      name: "current_epoch",
      inputs: [],
      outputs: [{ name: "", type: "uint256" }],
    },
    {
      stateMutability: "view",
      type: "function",
      name: "future_epoch_time",
      inputs: [],
      outputs: [{ name: "", type: "uint256" }],
    },
    {
      stateMutability: "view",
      type: "function",
      name: "future_epoch_rate",
      inputs: [],
      outputs: [{ name: "", type: "uint256" }],
    },
    {
      stateMutability: "nonpayable",
      type: "function",
      name: "set_admin",
      inputs: [{ name: "_admin", type: "address" }],
      outputs: [],
    },
    {
      stateMutability: "nonpayable",
      type: "function",
      name: "set_rewards_at",
      inputs: [
        { name: "_epoch", type: "uint256" },
        { name: "_reward", type: "uint256" },
      ],
      outputs: [],
    },
    {
      stateMutability: "nonpayable",
      type: "function",
      name: "set_rewards_starting_at",
      inputs: [
        { name: "_epoch", type: "uint256" },
        { name: "_rewards", type: "uint256[10]" },
      ],
      outputs: [],
    },
    {
      stateMutability: "view",
      type: "function",
      name: "admin",
      inputs: [],
      outputs: [{ name: "", type: "address" }],
    },
    {
      stateMutability: "view",
      type: "function",
      name: "first_epoch_time",
      inputs: [],
      outputs: [{ name: "", type: "uint256" }],
    },
    {
      stateMutability: "view",
      type: "function",
      name: "epoch_length",
      inputs: [],
      outputs: [{ name: "", type: "uint256" }],
    },
    {
      stateMutability: "view",
      type: "function",
      name: "rewards",
      inputs: [{ name: "arg0", type: "uint256" }],
      outputs: [{ name: "", type: "uint256" }],
    },
  ],
  REWARD_POLICY_MAKER_V2_ABI: [
    {
      "name": "SetAdmin",
      "inputs": [
        {
          "name": "admin",
          "type": "address",
          "indexed": false
        }
      ],
      "anonymous": false,
      "type": "event"
    },
    {
      "stateMutability": "nonpayable",
      "type": "constructor",
      "inputs": [
        {
          "name": "_epoch_length",
          "type": "uint256"
        },
        {
          "name": "_admin",
          "type": "address"
        }
      ],
      "outputs": []
    },
    {
      "stateMutability": "view",
      "type": "function",
      "name": "epoch_at",
      "inputs": [
        {
          "name": "_timestamp",
          "type": "uint256"
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ]
    },
    {
      "stateMutability": "view",
      "type": "function",
      "name": "epoch_start_time",
      "inputs": [
        {
          "name": "_epoch",
          "type": "uint256"
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ]
    },
    {
      "stateMutability": "view",
      "type": "function",
      "name": "rate_at",
      "inputs": [
        {
          "name": "_timestamp",
          "type": "uint256"
        },
        {
          "name": "_token",
          "type": "address"
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ]
    },
    {
      "stateMutability": "view",
      "type": "function",
      "name": "current_epoch",
      "inputs": [],
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ]
    },
    {
      "stateMutability": "view",
      "type": "function",
      "name": "future_epoch_time",
      "inputs": [],
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ]
    },
    {
      "stateMutability": "view",
      "type": "function",
      "name": "future_epoch_rate",
      "inputs": [
        {
          "name": "_token",
          "type": "address"
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ]
    },
    {
      "stateMutability": "nonpayable",
      "type": "function",
      "name": "set_admin",
      "inputs": [
        {
          "name": "_admin",
          "type": "address"
        }
      ],
      "outputs": []
    },
    {
      "stateMutability": "nonpayable",
      "type": "function",
      "name": "set_rewards_at",
      "inputs": [
        {
          "name": "_epoch",
          "type": "uint256"
        },
        {
          "name": "_token",
          "type": "address"
        },
        {
          "name": "_reward",
          "type": "uint256"
        }
      ],
      "outputs": []
    },
    {
      "stateMutability": "nonpayable",
      "type": "function",
      "name": "set_rewards_starting_at",
      "inputs": [
        {
          "name": "_epoch",
          "type": "uint256"
        },
        {
          "name": "_token",
          "type": "address"
        },
        {
          "name": "_rewards",
          "type": "uint256[10]"
        }
      ],
      "outputs": []
    },
    {
      "stateMutability": "view",
      "type": "function",
      "name": "admin",
      "inputs": [],
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ]
    },
    {
      "stateMutability": "view",
      "type": "function",
      "name": "first_epoch_time",
      "inputs": [],
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ]
    },
    {
      "stateMutability": "view",
      "type": "function",
      "name": "epoch_length",
      "inputs": [],
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ]
    },
    {
      "stateMutability": "view",
      "type": "function",
      "name": "rewards",
      "inputs": [
        {
          "name": "arg0",
          "type": "address"
        },
        {
          "name": "arg1",
          "type": "uint256"
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ]
    }
  ],
  BPRO_ABI: [
    {
      inputs: [
        { internalType: "address", name: "_priceAggregator", type: "address" },
        { internalType: "address", name: "_LUSD", type: "address" },
        { internalType: "address", name: "_cETH", type: "address" },
        { internalType: "address", name: "_cBorrow", type: "address" },
        { internalType: "uint256", name: "_maxDiscount", type: "uint256" },
        { internalType: "address payable", name: "_feePool", type: "address" },
      ],
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "tokenOwner",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "spender",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "tokens",
          type: "uint256",
        },
      ],
      name: "Approval",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "previousOwner",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "newOwner",
          type: "address",
        },
      ],
      name: "OwnershipTransferred",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        { indexed: false, internalType: "uint256", name: "A", type: "uint256" },
        {
          indexed: false,
          internalType: "uint256",
          name: "fee",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "callerFee",
          type: "uint256",
        },
      ],
      name: "ParamsSet",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "user",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "lusdAmount",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "ethAmount",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "timestamp",
          type: "uint256",
        },
      ],
      name: "RebalanceSwap",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "from",
          type: "address",
        },
        { indexed: true, internalType: "address", name: "to", type: "address" },
        {
          indexed: false,
          internalType: "uint256",
          name: "tokens",
          type: "uint256",
        },
      ],
      name: "Transfer",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "user",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "lusdAmount",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "numShares",
          type: "uint256",
        },
      ],
      name: "UserDeposit",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "user",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "lusdAmount",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "ethAmount",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "numShares",
          type: "uint256",
        },
      ],
      name: "UserWithdraw",
      type: "event",
    },
    {
      inputs: [],
      name: "A",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "LUSD",
      outputs: [{ internalType: "contract IERC20", name: "", type: "address" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "MAX_A",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "MAX_CALLER_FEE",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "MAX_FEE",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "MIN_A",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "PRECISION",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "", type: "address" },
        { internalType: "address", name: "", type: "address" },
      ],
      name: "allowance",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "spender", type: "address" },
        { internalType: "uint256", name: "tokens", type: "uint256" },
      ],
      name: "approve",
      outputs: [{ internalType: "bool", name: "success", type: "bool" }],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{ internalType: "address", name: "", type: "address" }],
      name: "balanceOf",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "cBorrow",
      outputs: [
        { internalType: "contract ICToken", name: "", type: "address" },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "cETH",
      outputs: [
        { internalType: "contract ICToken", name: "", type: "address" },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "callerFee",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "cTokenBorrowed", type: "address" },
        { internalType: "address", name: "cTokenCollateral", type: "address" },
        { internalType: "uint256", name: "repayAmount", type: "uint256" },
      ],
      name: "canLiquidate",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "decimals",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "uint256", name: "lusdAmount", type: "uint256" },
      ],
      name: "deposit",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "fee",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "feePool",
      outputs: [{ internalType: "address payable", name: "", type: "address" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "fetchPrice",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "uint256", name: "xQty", type: "uint256" },
        { internalType: "uint256", name: "xBalance", type: "uint256" },
        { internalType: "uint256", name: "yBalance", type: "uint256" },
        { internalType: "uint256", name: "A", type: "uint256" },
      ],
      name: "getReturn",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "pure",
      type: "function",
    },
    {
      inputs: [
        { internalType: "uint256", name: "x", type: "uint256" },
        { internalType: "uint256", name: "y", type: "uint256" },
        { internalType: "uint256", name: "A", type: "uint256" },
      ],
      name: "getSumFixedPoint",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "pure",
      type: "function",
    },
    {
      inputs: [{ internalType: "uint256", name: "lusdQty", type: "uint256" }],
      name: "getSwapEthAmount",
      outputs: [
        { internalType: "uint256", name: "ethAmount", type: "uint256" },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "isOwner",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "borrower", type: "address" },
        { internalType: "uint256", name: "amount", type: "uint256" },
        { internalType: "address", name: "collateral", type: "address" },
      ],
      name: "liquidateBorrow",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "lusdDecimals",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "maxDiscount",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "name",
      outputs: [{ internalType: "string", name: "", type: "string" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "owner",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "priceAggregator",
      outputs: [
        {
          internalType: "contract AggregatorV3Interface",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "uint256", name: "_A", type: "uint256" },
        { internalType: "uint256", name: "_fee", type: "uint256" },
        { internalType: "uint256", name: "_callerFee", type: "uint256" },
      ],
      name: "setParams",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "uint256", name: "lusdAmount", type: "uint256" },
        { internalType: "uint256", name: "minEthReturn", type: "uint256" },
        { internalType: "address payable", name: "dest", type: "address" },
      ],
      name: "swap",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "symbol",
      outputs: [{ internalType: "string", name: "", type: "string" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "totalSupply",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "to", type: "address" },
        { internalType: "uint256", name: "tokens", type: "uint256" },
      ],
      name: "transfer",
      outputs: [{ internalType: "bool", name: "success", type: "bool" }],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "from", type: "address" },
        { internalType: "address", name: "to", type: "address" },
        { internalType: "uint256", name: "tokens", type: "uint256" },
      ],
      name: "transferFrom",
      outputs: [{ internalType: "bool", name: "success", type: "bool" }],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
      name: "transferOwnership",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{ internalType: "uint256", name: "numShares", type: "uint256" }],
      name: "withdraw",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    { stateMutability: "payable", type: "receive" },
  ],

  DELEGATION_PROXY_ABI: [
    {
      name: "CommitAdmins",
      inputs: [
        { name: "ownership_admin", type: "address", indexed: false },
        { name: "emergency_admin", type: "address", indexed: false },
      ],
      anonymous: false,
      type: "event",
    },
    {
      name: "ApplyAdmins",
      inputs: [
        { name: "ownership_admin", type: "address", indexed: false },
        { name: "emergency_admin", type: "address", indexed: false },
      ],
      anonymous: false,
      type: "event",
    },
    {
      name: "DelegationSet",
      inputs: [{ name: "delegation", type: "address", indexed: false }],
      anonymous: false,
      type: "event",
    },
    {
      stateMutability: "nonpayable",
      type: "constructor",
      inputs: [
        { name: "_delegation", type: "address" },
        { name: "_o_admin", type: "address" },
        { name: "_e_admin", type: "address" },
        { name: "_voting_escrow", type: "address" },
      ],
      outputs: [],
    },
    {
      stateMutability: "view",
      type: "function",
      name: "adjusted_balance_of",
      inputs: [{ name: "_account", type: "address" }],
      outputs: [{ name: "", type: "uint256" }]
    },
    {
      stateMutability: "nonpayable",
      type: "function",
      name: "kill_delegation",
      inputs: [],
      outputs: []
    },
    {
      stateMutability: "nonpayable",
      type: "function",
      name: "set_delegation",
      inputs: [{ name: "_delegation", type: "address" }],
      outputs: []
    },
    {
      stateMutability: "nonpayable",
      type: "function",
      name: "commit_set_admins",
      inputs: [
        { name: "_o_admin", type: "address" },
        { name: "_e_admin", type: "address" },
      ],
      outputs: []
    },
    {
      stateMutability: "nonpayable",
      type: "function",
      name: "apply_set_admins",
      inputs: [],
      outputs: []
    },
    {
      stateMutability: "view",
      type: "function",
      name: "voting_escrow",
      inputs: [],
      outputs: [{ name: "", type: "address" }]
    },
    {
      stateMutability: "view",
      type: "function",
      name: "delegation",
      inputs: [],
      outputs: [{ name: "", type: "address" }]
    },
    {
      stateMutability: "view",
      type: "function",
      name: "emergency_admin",
      inputs: [],
      outputs: [{ name: "", type: "address" }]
    },
    {
      stateMutability: "view",
      type: "function",
      name: "ownership_admin",
      inputs: [],
      outputs: [{ name: "", type: "address" }]
    },
    {
      stateMutability: "view",
      type: "function",
      name: "future_emergency_admin",
      inputs: [],
      outputs: [{ name: "", type: "address" }]
    },
    {
      stateMutability: "view",
      type: "function",
      name: "future_ownership_admin",
      inputs: [],
      outputs: [{ name: "", type: "address" }]
    },
  ],

  MIRRORED_VOTING_ESCROW_ABI: [
    {
      name: "MirrorLock",
      inputs: [
        { name: "provider", type: "address", indexed: true },
        { name: "chain_id", type: "uint256", indexed: false },
        { name: "escrow_id", type: "uint256", indexed: false },
        { name: "value", type: "uint256", indexed: false },
        { name: "locktime", type: "uint256", indexed: true },
      ],
      anonymous: false,
      type: "event",
    },
    {
      name: "CommitOwnership",
      inputs: [{ name: "admin", type: "address", indexed: false }],
      anonymous: false,
      type: "event",
    },
    {
      name: "ApplyOwnership",
      inputs: [{ name: "admin", type: "address", indexed: false }],
      anonymous: false,
      type: "event",
    },
    {
      name: "SetMirrorWhitelist",
      inputs: [
        { name: "addr", type: "address", indexed: false },
        { name: "is_whitelisted", type: "bool", indexed: false },
      ],
      anonymous: false,
      type: "event",
    },
    {
      name: "AddVotingEscrow",
      inputs: [{ name: "addr", type: "address", indexed: false }],
      anonymous: false,
      type: "event",
    },
    {
      stateMutability: "nonpayable",
      type: "constructor",
      inputs: [
        { name: "_admin", type: "address" },
        { name: "_voting_escrow", type: "address" },
        { name: "_name", type: "string" },
        { name: "_symbol", type: "string" },
        { name: "_version", type: "string" },
      ],
      outputs: [],
    },
    {
      stateMutability: "nonpayable",
      type: "function",
      name: "mirror_lock",
      inputs: [
        { name: "_user", type: "address" },
        { name: "_chain", type: "uint256" },
        { name: "_escrow_id", type: "uint256" },
        { name: "_value", type: "uint256" },
        { name: "_unlock_time", type: "uint256" },
      ],
      outputs: []
    },
    {
      stateMutability: "nonpayable",
      type: "function",
      name: "checkpoint",
      inputs: [],
      outputs: []
    },
    {
      stateMutability: "view",
      type: "function",
      name: "user_point_epoch",
      inputs: [{ name: "_user", type: "address" }],
      outputs: [{ name: "", type: "uint256" }],
    },
    {
      stateMutability: "view",
      type: "function",
      name: "user_point_epoch",
      inputs: [
        { name: "_user", type: "address" },
        { name: "_chain", type: "uint256" },
      ],
      outputs: [{ name: "", type: "uint256" }],
    },
    {
      stateMutability: "view",
      type: "function",
      name: "user_point_epoch",
      inputs: [
        { name: "_user", type: "address" },
        { name: "_chain", type: "uint256" },
        { name: "_escrow_id", type: "uint256" },
      ],
      outputs: [{ name: "", type: "uint256" }],
    },
    {
      stateMutability: "view",
      type: "function",
      name: "user_point_history__ts",
      inputs: [
        { name: "_addr", type: "address" },
        { name: "_idx", type: "uint256" },
      ],
      outputs: [{ name: "", type: "uint256" }],
    },
    {
      stateMutability: "view",
      type: "function",
      name: "user_point_history__ts",
      inputs: [
        { name: "_addr", type: "address" },
        { name: "_idx", type: "uint256" },
        { name: "_chain", type: "uint256" },
      ],
      outputs: [{ name: "", type: "uint256" }],
    },
    {
      stateMutability: "view",
      type: "function",
      name: "user_point_history__ts",
      inputs: [
        { name: "_addr", type: "address" },
        { name: "_idx", type: "uint256" },
        { name: "_chain", type: "uint256" },
        { name: "_escrow_id", type: "uint256" },
      ],
      outputs: [{ name: "", type: "uint256" }],
    },
    {
      stateMutability: "view",
      type: "function",
      name: "user_last_checkpoint_ts",
      inputs: [{ name: "_user", type: "address" }],
      outputs: [{ name: "", type: "uint256" }]
    },
    {
      stateMutability: "view",
      type: "function",
      name: "total_mirrored_supply",
      inputs: [],
      outputs: [{ name: "", type: "uint256" }],
    },
    {
      stateMutability: "view",
      type: "function",
      name: "total_mirrored_supply",
      inputs: [{ name: "t", type: "uint256" }],
      outputs: [{ name: "", type: "uint256" }],
    },
    {
      stateMutability: "view",
      type: "function",
      name: "totalSupply",
      inputs: [],
      outputs: [{ name: "", type: "uint256" }],
    },
    {
      stateMutability: "view",
      type: "function",
      name: "totalSupply",
      inputs: [{ name: "_t", type: "uint256" }],
      outputs: [{ name: "", type: "uint256" }],
    },
    {
      stateMutability: "view",
      type: "function",
      name: "balanceOf",
      inputs: [{ name: "_addr", type: "address" }],
      outputs: [{ name: "", type: "uint256" }],
    },
    {
      stateMutability: "view",
      type: "function",
      name: "balanceOf",
      inputs: [
        { name: "_addr", type: "address" },
        { name: "_t", type: "uint256" },
      ],
      outputs: [{ name: "", type: "uint256" }],
    },
    {
      stateMutability: "view",
      type: "function",
      name: "mirrored_balance_of",
      inputs: [
        { name: "addr", type: "address" },
        { name: "_t", type: "uint256" },
      ],
      outputs: [{ name: "", type: "uint256" }]
    },
    {
      stateMutability: "view",
      type: "function",
      name: "locked__end",
      inputs: [{ name: "_addr", type: "address" }],
      outputs: [{ name: "", type: "uint256" }],
    },
    {
      stateMutability: "view",
      type: "function",
      name: "locked__end",
      inputs: [
        { name: "_addr", type: "address" },
        { name: "_chain", type: "uint256" },
      ],
      outputs: [{ name: "", type: "uint256" }],
    },
    {
      stateMutability: "view",
      type: "function",
      name: "locked__end",
      inputs: [
        { name: "_addr", type: "address" },
        { name: "_chain", type: "uint256" },
        { name: "_escrow_id", type: "uint256" },
      ],
      outputs: [{ name: "", type: "uint256" }],
    },
    {
      stateMutability: "view",
      type: "function",
      name: "nearest_locked__end",
      inputs: [{ name: "_addr", type: "address" }],
      outputs: [{ name: "", type: "uint256" }]
    },
    {
      stateMutability: "view",
      type: "function",
      name: "get_last_user_slope",
      inputs: [{ name: "_addr", type: "address" }],
      outputs: [{ name: "", type: "int128" }],
    },
    {
      stateMutability: "view",
      type: "function",
      name: "get_last_user_slope",
      inputs: [
        { name: "_addr", type: "address" },
        { name: "_chain", type: "uint256" },
      ],
      outputs: [{ name: "", type: "int128" }],
    },
    {
      stateMutability: "view",
      type: "function",
      name: "get_last_user_slope",
      inputs: [
        { name: "_addr", type: "address" },
        { name: "_chain", type: "uint256" },
        { name: "_escrow_id", type: "uint256" },
      ],
      outputs: [{ name: "", type: "int128" }],
    },
    {
      stateMutability: "nonpayable",
      type: "function",
      name: "commit_transfer_ownership",
      inputs: [{ name: "addr", type: "address" }],
      outputs: []
    },
    {
      stateMutability: "nonpayable",
      type: "function",
      name: "apply_transfer_ownership",
      inputs: [],
      outputs: []
    },
    {
      stateMutability: "nonpayable",
      type: "function",
      name: "set_mirror_whitelist",
      inputs: [
        { name: "_addr", type: "address" },
        { name: "_is_whitelisted", type: "bool" },
      ],
      outputs: []
    },
    {
      stateMutability: "nonpayable",
      type: "function",
      name: "add_voting_escrow",
      inputs: [{ name: "_addr", type: "address" }],
      outputs: []
    },
    {
      stateMutability: "view",
      type: "function",
      name: "admin",
      inputs: [],
      outputs: [{ name: "", type: "address" }]
    },
    {
      stateMutability: "view",
      type: "function",
      name: "future_admin",
      inputs: [],
      outputs: [{ name: "", type: "address" }]
    },
    {
      stateMutability: "view",
      type: "function",
      name: "whitelisted_mirrors",
      inputs: [{ name: "arg0", type: "address" }],
      outputs: [{ name: "", type: "bool" }]
    },
    {
      stateMutability: "view",
      type: "function",
      name: "voting_escrow_count",
      inputs: [],
      outputs: [{ name: "", type: "uint256" }]
    },
    {
      stateMutability: "view",
      type: "function",
      name: "voting_escrows",
      inputs: [{ name: "arg0", type: "uint256" }],
      outputs: [{ name: "", type: "address" }]
    },
    {
      stateMutability: "view",
      type: "function",
      name: "mirrored_chains_count",
      inputs: [],
      outputs: [{ name: "", type: "uint256" }]
    },
    {
      stateMutability: "view",
      type: "function",
      name: "mirrored_chains",
      inputs: [{ name: "arg0", type: "uint256" }],
      outputs: [
        { name: "chain_id", type: "uint256" },
        { name: "escrow_count", type: "uint256" },
      ]
    },
    {
      stateMutability: "view",
      type: "function",
      name: "mirrored_locks",
      inputs: [
        { name: "arg0", type: "address" },
        { name: "arg1", type: "uint256" },
        { name: "arg2", type: "uint256" },
      ],
      outputs: [
        { name: "amount", type: "int128" },
        { name: "end", type: "uint256" },
      ]
    },
    {
      stateMutability: "view",
      type: "function",
      name: "mirrored_user_point_history",
      inputs: [
        { name: "arg0", type: "address" },
        { name: "arg1", type: "uint256" },
        { name: "arg2", type: "uint256" },
        { name: "arg3", type: "uint256" },
      ],
      outputs: [
        { name: "bias", type: "int128" },
        { name: "slope", type: "int128" },
        { name: "ts", type: "uint256" },
        { name: "blk", type: "uint256" },
      ]
    },
    {
      stateMutability: "view",
      type: "function",
      name: "mirrored_user_point_epoch",
      inputs: [
        { name: "arg0", type: "address" },
        { name: "arg1", type: "uint256" },
        { name: "arg2", type: "uint256" },
      ],
      outputs: [{ name: "", type: "uint256" }]
    },
    {
      stateMutability: "view",
      type: "function",
      name: "mirrored_epoch",
      inputs: [],
      outputs: [{ name: "", type: "uint256" }]
    },
    {
      stateMutability: "view",
      type: "function",
      name: "mirrored_point_history",
      inputs: [{ name: "arg0", type: "uint256" }],
      outputs: [
        { name: "bias", type: "int128" },
        { name: "slope", type: "int128" },
        { name: "ts", type: "uint256" },
        { name: "blk", type: "uint256" },
      ]
    },
    {
      stateMutability: "view",
      type: "function",
      name: "mirrored_slope_changes",
      inputs: [{ name: "arg0", type: "uint256" }],
      outputs: [{ name: "", type: "int128" }]
    },
    {
      stateMutability: "view",
      type: "function",
      name: "name",
      inputs: [],
      outputs: [{ name: "", type: "string" }]
    },
    {
      stateMutability: "view",
      type: "function",
      name: "symbol",
      inputs: [],
      outputs: [{ name: "", type: "string" }]
    },
    {
      stateMutability: "view",
      type: "function",
      name: "version",
      inputs: [],
      outputs: [{ name: "", type: "string" }]
    },
    {
      stateMutability: "view",
      type: "function",
      name: "decimals",
      inputs: [],
      outputs: [{ name: "", type: "uint256" }]
    },
  ],

  SMART_WALLET_CHECKER_ABI: [
    {
      stateMutability: "nonpayable",
      type: "constructor",
      inputs: [{ name: "admin", type: "address" }],
      outputs: [],
    },
    {
      stateMutability: "view",
      type: "function",
      name: "check",
      inputs: [{ name: "addr", type: "address" }],
      outputs: [{ name: "", type: "bool" }]
    },
    {
      stateMutability: "nonpayable",
      type: "function",
      name: "add_to_whitelist",
      inputs: [{ name: "addr", type: "address" }],
      outputs: []
    },
    {
      stateMutability: "nonpayable",
      type: "function",
      name: "revoke_from_whitelist",
      inputs: [{ name: "addr", type: "address" }],
      outputs: []
    },
    {
      stateMutability: "nonpayable",
      type: "function",
      name: "set_admin",
      inputs: [{ name: "new_admin", type: "address" }],
      outputs: []
    },
    {
      stateMutability: "view",
      type: "function",
      name: "admin",
      inputs: [],
      outputs: [{ name: "", type: "address" }]
    },
    {
      stateMutability: "view",
      type: "function",
      name: "whitelisted",
      inputs: [{ name: "arg0", type: "address" }],
      outputs: [{ name: "", type: "bool" }]
    },
  ],

  TREASURY_ABI: [
    {
      stateMutability: "nonpayable",
      type: "constructor",
      inputs: [
        { name: "_token", type: "address" },
        { name: "_admin", type: "address" },
      ],
      outputs: [],
    },
    {
      stateMutability: "nonpayable",
      type: "function",
      name: "set_minter",
      inputs: [{ name: "_minter", type: "address" }],
      outputs: []
    },
    {
      stateMutability: "nonpayable",
      type: "function",
      name: "set_admin",
      inputs: [{ name: "_admin", type: "address" }],
      outputs: []
    },
    {
      stateMutability: "nonpayable",
      type: "function",
      name: "mint",
      inputs: [
        { name: "_to", type: "address" },
        { name: "_amount", type: "uint256" },
      ],
      outputs: [{ name: "", type: "bool" }]
    },
    {
      stateMutability: "view",
      type: "function",
      name: "token",
      inputs: [],
      outputs: [{ name: "", type: "address" }]
    },
    {
      stateMutability: "view",
      type: "function",
      name: "minter",
      inputs: [],
      outputs: [{ name: "", type: "address" }]
    },
    {
      stateMutability: "view",
      type: "function",
      name: "admin",
      inputs: [],
      outputs: [{ name: "", type: "address" }]
    },
  ],

  VBOOST_DELEGATION_ABI: [
    {
      name: "Approval",
      inputs: [
        { name: "_owner", type: "address", indexed: true },
        { name: "_approved", type: "address", indexed: true },
        { name: "_token_id", type: "uint256", indexed: true },
      ],
      anonymous: false,
      type: "event",
    },
    {
      name: "ApprovalForAll",
      inputs: [
        { name: "_owner", type: "address", indexed: true },
        { name: "_operator", type: "address", indexed: true },
        { name: "_approved", type: "bool", indexed: false },
      ],
      anonymous: false,
      type: "event",
    },
    {
      name: "Transfer",
      inputs: [
        { name: "_from", type: "address", indexed: true },
        { name: "_to", type: "address", indexed: true },
        { name: "_token_id", type: "uint256", indexed: true },
      ],
      anonymous: false,
      type: "event",
    },
    {
      name: "BurnBoost",
      inputs: [
        { name: "_delegator", type: "address", indexed: true },
        { name: "_receiver", type: "address", indexed: true },
        { name: "_token_id", type: "uint256", indexed: true },
      ],
      anonymous: false,
      type: "event",
    },
    {
      name: "DelegateBoost",
      inputs: [
        { name: "_delegator", type: "address", indexed: true },
        { name: "_receiver", type: "address", indexed: true },
        { name: "_token_id", type: "uint256", indexed: true },
        { name: "_amount", type: "uint256", indexed: false },
        { name: "_cancel_time", type: "uint256", indexed: false },
        { name: "_expire_time", type: "uint256", indexed: false },
      ],
      anonymous: false,
      type: "event",
    },
    {
      name: "ExtendBoost",
      inputs: [
        { name: "_delegator", type: "address", indexed: true },
        { name: "_receiver", type: "address", indexed: true },
        { name: "_token_id", type: "uint256", indexed: true },
        { name: "_amount", type: "uint256", indexed: false },
        { name: "_expire_time", type: "uint256", indexed: false },
        { name: "_cancel_time", type: "uint256", indexed: false },
      ],
      anonymous: false,
      type: "event",
    },
    {
      name: "TransferBoost",
      inputs: [
        { name: "_from", type: "address", indexed: true },
        { name: "_to", type: "address", indexed: true },
        { name: "_token_id", type: "uint256", indexed: true },
        { name: "_amount", type: "uint256", indexed: false },
        { name: "_expire_time", type: "uint256", indexed: false },
      ],
      anonymous: false,
      type: "event",
    },
    {
      name: "GreyListUpdated",
      inputs: [
        { name: "_receiver", type: "address", indexed: true },
        { name: "_delegator", type: "address", indexed: true },
        { name: "_status", type: "bool", indexed: false },
      ],
      anonymous: false,
      type: "event",
    },
    {
      stateMutability: "nonpayable",
      type: "constructor",
      inputs: [
        { name: "_name", type: "string" },
        { name: "_symbol", type: "string" },
        { name: "_base_uri", type: "string" },
        { name: "_voting_escrow", type: "address" },
        { name: "_admin", type: "address" },
      ],
      outputs: [],
    },
    {
      stateMutability: "nonpayable",
      type: "function",
      name: "approve",
      inputs: [
        { name: "_approved", type: "address" },
        { name: "_token_id", type: "uint256" },
      ],
      outputs: []
    },
    {
      stateMutability: "nonpayable",
      type: "function",
      name: "safeTransferFrom",
      inputs: [
        { name: "_from", type: "address" },
        { name: "_to", type: "address" },
        { name: "_token_id", type: "uint256" },
      ],
      outputs: [],
    },
    {
      stateMutability: "nonpayable",
      type: "function",
      name: "safeTransferFrom",
      inputs: [
        { name: "_from", type: "address" },
        { name: "_to", type: "address" },
        { name: "_token_id", type: "uint256" },
        { name: "_data", type: "bytes" },
      ],
      outputs: [],
    },
    {
      stateMutability: "nonpayable",
      type: "function",
      name: "setApprovalForAll",
      inputs: [
        { name: "_operator", type: "address" },
        { name: "_approved", type: "bool" },
      ],
      outputs: []
    },
    {
      stateMutability: "nonpayable",
      type: "function",
      name: "transferFrom",
      inputs: [
        { name: "_from", type: "address" },
        { name: "_to", type: "address" },
        { name: "_token_id", type: "uint256" },
      ],
      outputs: []
    },
    {
      stateMutability: "view",
      type: "function",
      name: "tokenURI",
      inputs: [{ name: "_token_id", type: "uint256" }],
      outputs: [{ name: "", type: "string" }]
    },
    {
      stateMutability: "nonpayable",
      type: "function",
      name: "burn",
      inputs: [{ name: "_token_id", type: "uint256" }],
      outputs: []
    },
    {
      stateMutability: "nonpayable",
      type: "function",
      name: "_mint_for_testing",
      inputs: [
        { name: "_to", type: "address" },
        { name: "_token_id", type: "uint256" },
      ],
      outputs: []
    },
    {
      stateMutability: "nonpayable",
      type: "function",
      name: "_burn_for_testing",
      inputs: [{ name: "_token_id", type: "uint256" }],
      outputs: []
    },
    {
      stateMutability: "nonpayable",
      type: "function",
      name: "create_boost",
      inputs: [
        { name: "_delegator", type: "address" },
        { name: "_receiver", type: "address" },
        { name: "_percentage", type: "int256" },
        { name: "_cancel_time", type: "uint256" },
        { name: "_expire_time", type: "uint256" },
        { name: "_id", type: "uint256" },
      ],
      outputs: []
    },
    {
      stateMutability: "nonpayable",
      type: "function",
      name: "extend_boost",
      inputs: [
        { name: "_token_id", type: "uint256" },
        { name: "_percentage", type: "int256" },
        { name: "_expire_time", type: "uint256" },
        { name: "_cancel_time", type: "uint256" },
      ],
      outputs: []
    },
    {
      stateMutability: "nonpayable",
      type: "function",
      name: "cancel_boost",
      inputs: [{ name: "_token_id", type: "uint256" }],
      outputs: []
    },
    {
      stateMutability: "nonpayable",
      type: "function",
      name: "batch_cancel_boosts",
      inputs: [{ name: "_token_ids", type: "uint256[256]" }],
      outputs: []
    },
    {
      stateMutability: "nonpayable",
      type: "function",
      name: "set_delegation_status",
      inputs: [
        { name: "_receiver", type: "address" },
        { name: "_delegator", type: "address" },
        { name: "_status", type: "bool" },
      ],
      outputs: []
    },
    {
      stateMutability: "nonpayable",
      type: "function",
      name: "batch_set_delegation_status",
      inputs: [
        { name: "_receiver", type: "address" },
        { name: "_delegators", type: "address[256]" },
        { name: "_status", type: "uint256[256]" },
      ],
      outputs: []
    },
    {
      stateMutability: "view",
      type: "function",
      name: "adjusted_balance_of",
      inputs: [{ name: "_account", type: "address" }],
      outputs: [{ name: "", type: "uint256" }]
    },
    {
      stateMutability: "view",
      type: "function",
      name: "delegated_boost",
      inputs: [{ name: "_account", type: "address" }],
      outputs: [{ name: "", type: "uint256" }]
    },
    {
      stateMutability: "view",
      type: "function",
      name: "received_boost",
      inputs: [{ name: "_account", type: "address" }],
      outputs: [{ name: "", type: "uint256" }]
    },
    {
      stateMutability: "view",
      type: "function",
      name: "token_boost",
      inputs: [{ name: "_token_id", type: "uint256" }],
      outputs: [{ name: "", type: "int256" }]
    },
    {
      stateMutability: "view",
      type: "function",
      name: "token_expiry",
      inputs: [{ name: "_token_id", type: "uint256" }],
      outputs: [{ name: "", type: "uint256" }]
    },
    {
      stateMutability: "view",
      type: "function",
      name: "token_cancel_time",
      inputs: [{ name: "_token_id", type: "uint256" }],
      outputs: [{ name: "", type: "uint256" }]
    },
    {
      stateMutability: "pure",
      type: "function",
      name: "get_token_id",
      inputs: [
        { name: "_delegator", type: "address" },
        { name: "_id", type: "uint256" },
      ],
      outputs: [{ name: "", type: "uint256" }]
    },
    {
      stateMutability: "nonpayable",
      type: "function",
      name: "commit_transfer_ownership",
      inputs: [{ name: "_addr", type: "address" }],
      outputs: []
    },
    {
      stateMutability: "nonpayable",
      type: "function",
      name: "accept_transfer_ownership",
      inputs: [],
      outputs: []
    },
    {
      stateMutability: "nonpayable",
      type: "function",
      name: "set_base_uri",
      inputs: [{ name: "_base_uri", type: "string" }],
      outputs: []
    },
    {
      stateMutability: "view",
      type: "function",
      name: "voting_escrow",
      inputs: [],
      outputs: [{ name: "", type: "address" }]
    },
    {
      stateMutability: "view",
      type: "function",
      name: "balanceOf",
      inputs: [{ name: "arg0", type: "address" }],
      outputs: [{ name: "", type: "uint256" }]
    },
    {
      stateMutability: "view",
      type: "function",
      name: "getApproved",
      inputs: [{ name: "arg0", type: "uint256" }],
      outputs: [{ name: "", type: "address" }]
    },
    {
      stateMutability: "view",
      type: "function",
      name: "isApprovedForAll",
      inputs: [
        { name: "arg0", type: "address" },
        { name: "arg1", type: "address" },
      ],
      outputs: [{ name: "", type: "bool" }]
    },
    {
      stateMutability: "view",
      type: "function",
      name: "ownerOf",
      inputs: [{ name: "arg0", type: "uint256" }],
      outputs: [{ name: "", type: "address" }]
    },
    {
      stateMutability: "view",
      type: "function",
      name: "name",
      inputs: [],
      outputs: [{ name: "", type: "string" }]
    },
    {
      stateMutability: "view",
      type: "function",
      name: "symbol",
      inputs: [],
      outputs: [{ name: "", type: "string" }]
    },
    {
      stateMutability: "view",
      type: "function",
      name: "base_uri",
      inputs: [],
      outputs: [{ name: "", type: "string" }]
    },
    {
      stateMutability: "view",
      type: "function",
      name: "totalSupply",
      inputs: [],
      outputs: [{ name: "", type: "uint256" }]
    },
    {
      stateMutability: "view",
      type: "function",
      name: "tokenByIndex",
      inputs: [{ name: "arg0", type: "uint256" }],
      outputs: [{ name: "", type: "uint256" }]
    },
    {
      stateMutability: "view",
      type: "function",
      name: "tokenOfOwnerByIndex",
      inputs: [
        { name: "arg0", type: "address" },
        { name: "arg1", type: "uint256" },
      ],
      outputs: [{ name: "", type: "uint256" }]
    },
    {
      stateMutability: "view",
      type: "function",
      name: "token_of_delegator_by_index",
      inputs: [
        { name: "arg0", type: "address" },
        { name: "arg1", type: "uint256" },
      ],
      outputs: [{ name: "", type: "uint256" }]
    },
    {
      stateMutability: "view",
      type: "function",
      name: "total_minted",
      inputs: [{ name: "arg0", type: "address" }],
      outputs: [{ name: "", type: "uint256" }]
    },
    {
      stateMutability: "view",
      type: "function",
      name: "account_expiries",
      inputs: [
        { name: "arg0", type: "address" },
        { name: "arg1", type: "uint256" },
      ],
      outputs: [{ name: "", type: "uint256" }]
    },
    {
      stateMutability: "view",
      type: "function",
      name: "admin",
      inputs: [],
      outputs: [{ name: "", type: "address" }]
    },
    {
      stateMutability: "view",
      type: "function",
      name: "future_admin",
      inputs: [],
      outputs: [{ name: "", type: "address" }]
    },
    {
      stateMutability: "view",
      type: "function",
      name: "grey_list",
      inputs: [
        { name: "arg0", type: "address" },
        { name: "arg1", type: "address" },
      ],
      outputs: [{ name: "", type: "bool" }]
    },
  ],

  VOTING_ESCROW_ABI: [
    {
      name: "CommitOwnership",
      inputs: [{ name: "admin", type: "address", indexed: false }],
      anonymous: false,
      type: "event",
    },
    {
      name: "ApplyOwnership",
      inputs: [{ name: "admin", type: "address", indexed: false }],
      anonymous: false,
      type: "event",
    },
    {
      name: "Deposit",
      inputs: [
        { name: "provider", type: "address", indexed: true },
        { name: "value", type: "uint256", indexed: false },
        { name: "locktime", type: "uint256", indexed: true },
        { name: "type", type: "int128", indexed: false },
        { name: "ts", type: "uint256", indexed: false },
      ],
      anonymous: false,
      type: "event",
    },
    {
      name: "Withdraw",
      inputs: [
        { name: "provider", type: "address", indexed: true },
        { name: "value", type: "uint256", indexed: false },
        { name: "ts", type: "uint256", indexed: false },
      ],
      anonymous: false,
      type: "event",
    },
    {
      name: "Supply",
      inputs: [
        { name: "prevSupply", type: "uint256", indexed: false },
        { name: "supply", type: "uint256", indexed: false },
      ],
      anonymous: false,
      type: "event",
    },
    {
      stateMutability: "nonpayable",
      type: "constructor",
      inputs: [
        { name: "token_addr", type: "address" },
        { name: "_name", type: "string" },
        { name: "_symbol", type: "string" },
        { name: "_version", type: "string" },
      ],
      outputs: [],
    },
    {
      stateMutability: "nonpayable",
      type: "function",
      name: "commit_transfer_ownership",
      inputs: [{ name: "addr", type: "address" }],
      outputs: []
    },
    {
      stateMutability: "nonpayable",
      type: "function",
      name: "apply_transfer_ownership",
      inputs: [],
      outputs: []
    },
    {
      stateMutability: "nonpayable",
      type: "function",
      name: "commit_smart_wallet_checker",
      inputs: [{ name: "addr", type: "address" }],
      outputs: []
    },
    {
      stateMutability: "nonpayable",
      type: "function",
      name: "apply_smart_wallet_checker",
      inputs: [],
      outputs: []
    },
    {
      stateMutability: "view",
      type: "function",
      name: "get_last_user_slope",
      inputs: [{ name: "addr", type: "address" }],
      outputs: [{ name: "", type: "int128" }]
    },
    {
      stateMutability: "view",
      type: "function",
      name: "user_point_history__ts",
      inputs: [
        { name: "_addr", type: "address" },
        { name: "_idx", type: "uint256" },
      ],
      outputs: [{ name: "", type: "uint256" }]
    },
    {
      stateMutability: "view",
      type: "function",
      name: "locked__end",
      inputs: [{ name: "_addr", type: "address" }],
      outputs: [{ name: "", type: "uint256" }]
    },
    {
      stateMutability: "nonpayable",
      type: "function",
      name: "checkpoint",
      inputs: [],
      outputs: []
    },
    {
      stateMutability: "nonpayable",
      type: "function",
      name: "deposit_for",
      inputs: [
        { name: "_addr", type: "address" },
        { name: "_value", type: "uint256" },
      ],
      outputs: []
    },
    {
      stateMutability: "nonpayable",
      type: "function",
      name: "create_lock",
      inputs: [
        { name: "_value", type: "uint256" },
        { name: "_unlock_time", type: "uint256" },
      ],
      outputs: []
    },
    {
      stateMutability: "nonpayable",
      type: "function",
      name: "increase_amount",
      inputs: [{ name: "_value", type: "uint256" }],
      outputs: []
    },
    {
      stateMutability: "nonpayable",
      type: "function",
      name: "increase_unlock_time",
      inputs: [{ name: "_unlock_time", type: "uint256" }],
      outputs: []
    },
    {
      stateMutability: "nonpayable",
      type: "function",
      name: "withdraw",
      inputs: [],
      outputs: []
    },
    {
      stateMutability: "view",
      type: "function",
      name: "balanceOf",
      inputs: [{ name: "addr", type: "address" }],
      outputs: [{ name: "", type: "uint256" }],
    },
    {
      stateMutability: "view",
      type: "function",
      name: "balanceOf",
      inputs: [
        { name: "addr", type: "address" },
        { name: "_t", type: "uint256" },
      ],
      outputs: [{ name: "", type: "uint256" }],
    },
    {
      stateMutability: "view",
      type: "function",
      name: "balanceOfAt",
      inputs: [
        { name: "addr", type: "address" },
        { name: "_block", type: "uint256" },
      ],
      outputs: [{ name: "", type: "uint256" }]
    },
    {
      stateMutability: "view",
      type: "function",
      name: "totalSupply",
      inputs: [],
      outputs: [{ name: "", type: "uint256" }],
    },
    {
      stateMutability: "view",
      type: "function",
      name: "totalSupply",
      inputs: [{ name: "t", type: "uint256" }],
      outputs: [{ name: "", type: "uint256" }],
    },
    {
      stateMutability: "view",
      type: "function",
      name: "totalSupplyAt",
      inputs: [{ name: "_block", type: "uint256" }],
      outputs: [{ name: "", type: "uint256" }]
    },
    {
      stateMutability: "nonpayable",
      type: "function",
      name: "changeController",
      inputs: [{ name: "_newController", type: "address" }],
      outputs: []
    },
    {
      stateMutability: "view",
      type: "function",
      name: "token",
      inputs: [],
      outputs: [{ name: "", type: "address" }]
    },
    {
      stateMutability: "view",
      type: "function",
      name: "supply",
      inputs: [],
      outputs: [{ name: "", type: "uint256" }]
    },
    {
      stateMutability: "view",
      type: "function",
      name: "locked",
      inputs: [{ name: "arg0", type: "address" }],
      outputs: [
        { name: "amount", type: "int128" },
        { name: "end", type: "uint256" },
      ]
    },
    {
      stateMutability: "view",
      type: "function",
      name: "epoch",
      inputs: [],
      outputs: [{ name: "", type: "uint256" }]
    },
    {
      stateMutability: "view",
      type: "function",
      name: "point_history",
      inputs: [{ name: "arg0", type: "uint256" }],
      outputs: [
        { name: "bias", type: "int128" },
        { name: "slope", type: "int128" },
        { name: "ts", type: "uint256" },
        { name: "blk", type: "uint256" },
      ]
    },
    {
      stateMutability: "view",
      type: "function",
      name: "user_point_history",
      inputs: [
        { name: "arg0", type: "address" },
        { name: "arg1", type: "uint256" },
      ],
      outputs: [
        { name: "bias", type: "int128" },
        { name: "slope", type: "int128" },
        { name: "ts", type: "uint256" },
        { name: "blk", type: "uint256" },
      ]
    },
    {
      stateMutability: "view",
      type: "function",
      name: "user_point_epoch",
      inputs: [{ name: "arg0", type: "address" }],
      outputs: [{ name: "", type: "uint256" }]
    },
    {
      stateMutability: "view",
      type: "function",
      name: "slope_changes",
      inputs: [{ name: "arg0", type: "uint256" }],
      outputs: [{ name: "", type: "int128" }]
    },
    {
      stateMutability: "view",
      type: "function",
      name: "controller",
      inputs: [],
      outputs: [{ name: "", type: "address" }]
    },
    {
      stateMutability: "view",
      type: "function",
      name: "transfersEnabled",
      inputs: [],
      outputs: [{ name: "", type: "bool" }]
    },
    {
      stateMutability: "view",
      type: "function",
      name: "name",
      inputs: [],
      outputs: [{ name: "", type: "string" }]
    },
    {
      stateMutability: "view",
      type: "function",
      name: "symbol",
      inputs: [],
      outputs: [{ name: "", type: "string" }]
    },
    {
      stateMutability: "view",
      type: "function",
      name: "version",
      inputs: [],
      outputs: [{ name: "", type: "string" }]
    },
    {
      stateMutability: "view",
      type: "function",
      name: "decimals",
      inputs: [],
      outputs: [{ name: "", type: "uint256" }]
    },
    {
      stateMutability: "view",
      type: "function",
      name: "future_smart_wallet_checker",
      inputs: [],
      outputs: [{ name: "", type: "address" }]
    },
    {
      stateMutability: "view",
      type: "function",
      name: "smart_wallet_checker",
      inputs: [],
      outputs: [{ name: "", type: "address" }]
    },
    {
      stateMutability: "view",
      type: "function",
      name: "admin",
      inputs: [],
      outputs: [{ name: "", type: "address" }]
    },
    {
      stateMutability: "view",
      type: "function",
      name: "future_admin",
      inputs: [],
      outputs: [{ name: "", type: "address" }]
    },
  ],
};
export default ABI;
