import { setupBitgetWallet } from "@near-wallet-selector/bitget-wallet";
import { setupCoin98Wallet } from "@near-wallet-selector/coin98-wallet";
import { setupHereWallet } from "@near-wallet-selector/here-wallet";
import { setupLedger } from "@near-wallet-selector/ledger";
import { setupMathWallet } from "@near-wallet-selector/math-wallet";
import { setupMeteorWallet } from "@near-wallet-selector/meteor-wallet";
import { setupMintbaseWallet } from "@near-wallet-selector/mintbase-wallet";
import { setupMyNearWallet } from "@near-wallet-selector/my-near-wallet";
import { setupNarwallets } from "@near-wallet-selector/narwallets";
import { setupNearMobileWallet } from "@near-wallet-selector/near-mobile-wallet";
// import { setupNearSnap } from "@near-wallet-selector/near-snap";
import { setupNearFi } from "@near-wallet-selector/nearfi";
import { setupNeth } from "@near-wallet-selector/neth";
import { setupNightly } from "@near-wallet-selector/nightly";
import { setupRamperWallet } from "@near-wallet-selector/ramper-wallet";
import { setupSender } from "@near-wallet-selector/sender";
import { setupWelldoneWallet } from "@near-wallet-selector/welldone-wallet";
import { setupXDEFI } from "@near-wallet-selector/xdefi";
import naxios from "@wpdas/naxios";

import { FULL_TGAS, NETWORK, SOCIAL_DB_CONTRACT_ID } from "@app/constants";

// Naxios (Contract/Wallet) Instance
export const naxiosInstance = new naxios({
  rpcNodeUrl: "https://free.rpc.fastnear.com",
  contractId: SOCIAL_DB_CONTRACT_ID,
  network: NETWORK,
  walletSelectorModules: [
    setupMyNearWallet(),
    setupSender(),
    setupHereWallet(),
    setupMeteorWallet(),
    setupLedger(),
    setupNearMobileWallet(),
    setupNightly(),
    setupBitgetWallet(),
    setupCoin98Wallet(),
    setupMathWallet(),
    setupMintbaseWallet(),
    setupNearFi(),
    setupWelldoneWallet(),
    setupXDEFI(),
    // INFO: This is breaking the app because it needs to access 'fs' module which is not present on the client side
    // setupNearSnap(),
    setupNarwallets(),
    setupRamperWallet(),
    setupNeth({
      gas: FULL_TGAS,
      bundle: false,
    }),
  ],
});

/**
 * NEAR Wallet API
 */
export const walletApi = naxiosInstance.walletApi();
