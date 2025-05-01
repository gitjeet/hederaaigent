import "web-streams-polyfill/polyfill";
import express from 'express';
import { HederaAgentKit } from 'hedera-agent-kit';
import { TokenId } from "@hashgraph/sdk";

const app = express();
const PORT = 3000;


const hederaAgentKit = new HederaAgentKit(
  '0.0.3930068',
  '0x5bcbbdd3ec24dba674208722ea01c83592433a97ac67e6d19c78f6b34f4a83fc',
  '302a300506032b6570032100f50fb944d27f28bd436a0a7b0c2e457c431622581723052ac9a4dd7ef4f9c504',
  'testnet'
);

app.get('/create/:name', async (req, res) => {
  const { name } = req.params;
  const { symbol, tokenMetadata } = req.query;

  if (!symbol || !tokenMetadata) {
    return res.status(400).json({ error: "Missing required query parameters: symbol and tokenMetadata" });
  }

  const options = {
    name,
    symbol: symbol.toString(),
    maxSupply: 100000,
    isMetadataKey: true,
    tokenMetadata: new TextEncoder().encode(tokenMetadata.toString()),
    memo: "Initial NFT Creation"
  };

  try {
    const result = await hederaAgentKit.createFT(options);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
});


app.get('/tokentransfer/:contract/:recipient', async (req, res) => {
  const { contract, recipient } = req.params;

  try {
    const result = await hederaAgentKit.transferToken(
      TokenId.fromString(contract),
      recipient,
      1,
      true
    );
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
});

app.get('/airdrop/:contract/:recipient', async (req, res) => {
  const { contract, recipient } = req.params;

  const recipients = [{ accountId: recipient, amount: 100 }];

  try {
    const result = await hederaAgentKit.airdropToken(
      TokenId.fromString(contract),
      recipients,
      true
    );

    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
