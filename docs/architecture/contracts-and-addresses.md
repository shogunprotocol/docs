---
id: contracts-and-addresses
title: Contracts and Addresses
sidebar_position: 3
---

# Contracts and Addresses

This page provides a comprehensive list of all contract addresses and network configurations for the Reactive Hook System deployment.

## Ethereum Mainnet (Chain ID: 1)

The Reactive Hook System is deployed on Ethereum mainnet with the following configuration:

### Core Contracts

#### Pool Manager
**Address**: `0x000000000004444c5dc75cB358380D2e3dE08A90`  
**Description**: Uniswap v4's core Pool Manager contract that handles all pool operations and hook integrations.

#### Position Manager
**Address**: `0xbD216513d74C8cf14cf4747E6AaA6420FF64ee9e`  
**Description**: Manages position operations and interfaces with the Pool Manager for position-related transactions.

#### LiquidityChange Hook
**Address**: `0xcf8518c0ee072a5a2ef8de0585030086c89c4ac0`  
**Description**: The main hook contract that monitors liquidity changes and emits cross-chain events when thresholds are met.

### Configuration Parameters

#### Tick Spacing
**Value**: `60`  
**Description**: The tick spacing configuration for the pool, determining the granularity of price points.

#### Hook Balance
**Value**: `1 ETH`  
**Description**: The current ETH balance maintained by the hook contract for operational purposes.

### Monitoring and Analytics

#### Event Explorer
**URL**: [https://etherscan.io/address/0x52c73a3EDC6E3D82ED675533144fd28886DccAC0](https://etherscan.io/address/0x52c73a3EDC6E3D82ED675533144fd28886DccAC0)  
**Description**: Etherscan link for monitoring events and transactions related to the hook system.

---

## Reactive Mainnet (Chain ID: 5318008)

The reactive components are deployed on Reactive Mainnet to enable cross-chain event processing:

### Core Contracts

#### LiquidityChangeReactive
**Address**: `0x6428fbef03c165f7f6b918364dd824d8ee1fd242`  
**Description**: The reactive contract that listens for liquidity events from Ethereum mainnet and triggers strategy callbacks.

### Event Configuration

#### Topic Hash
**Value**: `0xe4f4dfad1e4128943809bc23077ed765f12b98ec17ea4a5adc9657cc762d319c`  
**Description**: The keccak256 hash of the LargeLiquidityChange event signature used for event filtering and validation.

**Event Signature**: `LargeLiquidityChange(bytes32,int256,bool)`

---

## Network Information

### Ethereum Mainnet
- **Chain ID**: 1
- **Network Name**: Ethereum Mainnet
- **Currency**: ETH
- **Block Explorer**: https://etherscan.io
- **RPC URL**: https://ethereum.publicnode.com (or your preferred provider)

### Reactive Mainnet
- **Chain ID**: 5318008
- **Network Name**: Reactive Mainnet
- **Currency**: REACT
- **Block Explorer**: https://reactive.network/explorer (check official documentation)
- **RPC URL**: https://reactive.network/rpc (check official documentation)

---

## Contract Verification

All contracts are verified on their respective block explorers for transparency and security:

### Ethereum Mainnet Contracts
- Pool Manager: Verified on Etherscan
- Position Manager: Verified on Etherscan  
- LiquidityChange Hook: Verification pending/in progress

### Reactive Mainnet Contracts
- LiquidityChangeReactive: Verified on Reactive Explorer

---

## Integration Guidelines

### For Developers

When integrating with the Reactive Hook System, use the following contract addresses:

```javascript
// Ethereum Mainnet Configuration
const ETHEREUM_CONFIG = {
  chainId: 1,
  poolManager: "0x000000000004444c5dc75cB358380D2e3dE08A90",
  positionManager: "0xbD216513d74C8cf14cf4747E6AaA6420FF64ee9e",
  liquidityChangeHook: "0xcf8518c0ee072a5a2ef8de0585030086c89c4ac0",
  tickSpacing: 60
};

// Reactive Mainnet Configuration
const REACTIVE_CONFIG = {
  chainId: 5318008,
  liquidityChangeReactive: "0x6428fbef03c165f7f6b918364dd824d8ee1fd242",
  eventTopicHash: "0xe4f4dfad1e4128943809bc23077ed765f12b98ec17ea4a5adc9657cc762d319c"
};
```

### Event Filtering

To listen for liquidity change events, filter for the following topic:

```solidity
// Event signature
event LargeLiquidityChange(
    bytes32 indexed poolId,
    int256 amount,
    bool isAdd
);

// Topic 0 (event signature hash)
topic0 = 0xe4f4dfad1e4128943809bc23077ed765f12b98ec17ea4a5adc9657cc762d319c
```

---

## Security Considerations

### Address Verification
Always verify contract addresses through official channels before interacting:
- Check against this documentation
- Verify on block explorers
- Cross-reference with official announcements
- Use checksummed addresses

### Network Security
- Ensure you're connected to the correct networks
- Verify chain IDs before sending transactions
- Use reputable RPC providers
- Be aware of potential network congestion

### Smart Contract Risks
- Review contract source code when available
- Understand the risks of cross-chain operations
- Consider transaction finality differences between networks
- Monitor for contract upgrades or changes

---

## Support and Updates

For the latest contract addresses and network information:
- Check the official project repository
- Monitor project announcements
- Subscribe to network status updates
- Join the community channels for real-time updates

**Note**: Contract addresses and configurations may change during system upgrades. Always refer to the latest documentation before deploying or integrating.