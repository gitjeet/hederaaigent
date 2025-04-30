# GeoLockedToken - Hedera-Based In-Game Asset System

A location-aware Hedera-powered fungible token system that simulates real game mechanics. AI agents dynamically create and mint tokens based on in-game events, allowing players to receive tokens without knowing internal logic, preserving realism.

## Overview

This project integrates Hedera's testnet with an AI-agent-driven API using `hedera-agent-kit`. Tokens are minted in-game based on context like location, behavior, or progress, decided by the AI rather than directly by the player. This ensures players cannot exploit or predict minting behavior.

## Features

- Fungible Token (FT) creation using `hedera-agent-kit`
- Token minting triggered by AI agents (ETW: Event Triggered Workflows)
- On-chain event logging and traceability
- Seamless Hedera Testnet integration
- Players do not manually mint tokens; actions and events control logic
- IPFS metadata or on-chain metadata support (optional)
- Developer-friendly REST API via Express.js

## Requirements

- Node.js (v18 or higher)
- Hedera Testnet account
- Private and public keys
- `.env` file with proper configuration

## Environment Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/your-repo/hedera-geo-token.git
   cd hedera-geo-token
