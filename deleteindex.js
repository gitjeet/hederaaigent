import { HederaAgentKit, createHederaTools } from 'hedera-agent-kit';
import { ToolNode } from '@langchain/langgraph/prebuilt';
import { AccountId, PendingAirdropId, TokenId } from "@hashgraph/sdk";
const hederaAgentKit = new HederaAgentKit(
  '0.0.3930068', // Replace with your account ID
  '0x5bcbbdd3ec24dba674208722ea01c83592433a97ac67e6d19c78f6b34f4a83fc',
  '302a300506032b6570032100f50fb944d27f28bd436a0a7b0c2e457c431622581723052ac9a4dd7ef4f9c504',
  'testnet',   // Replace with your selected network

);
const options = {
    name: "Geodude FT",                    // Token name (string, required)
    symbol: "Ge",                    // Token symbol (string, required)
    maxSupply: 100000,                     // Maximum token supply (optional, in this case, the supply is 1, as it's a unique NFT)
    isMetadataKey: true,              // Metadata key flag (optional, defaults to false)
    tokenMetadata: new TextEncoder().encode("Unique NFT Metadata"), // Token metadata (optional, can be omitted if not needed)
    memo: "Initial NFT Creation"      // Memo (optional,  can be omitted if not needed)
};

const createNFTResult = await hederaAgentKit.createFT(options);
console.log(JSON.stringify(createNFTResult, null, 2));

const transferResult = await hederaAgentKit.transferToken(TokenId.fromString("0.0.5925306"),  '0.0.3777785', 1);
console.log(JSON.stringify(transferResult, null, 2));
// const recipients = [{ accountId: "0.0.3777785", amount: 100 }];
// const airdropResult = await kit.airdropToken(TokenId.fromString("0.0.9009"), recipients);
// console.log(JSON.stringify(airdropResult, null, 2));
// const mintResult = await hederaAgentKit.mintNFTToken(TokenId.fromString("0.0.5922592"));
// console.log(JSON.stringify(mintResult, null, 2));
// const transferResult = await hederaAgentKit.transferToken(TokenId.fromString("0.0.5922592"), '0.0.3930068', 1);
// console.log(JSON.stringify(transferResult, null, 2));

// const recipients = [{ accountId: "0.0.808", amount: 100 }];
// const airdropResult = await hederaAgentKit.airdropToken(TokenId.fromString("0.0.5925236"), recipients);
// console.log(JSON.stringify(airdropResult, null, 2));