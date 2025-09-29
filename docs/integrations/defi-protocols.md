---
id: defi-protocols
title: DeFi Protocol Integration
sidebar_position: 2
---

# DeFi Protocol Integration

## Supported Protocols

### Uniswap V4
- **Hook-based Strategies**: Custom trading logic via hooks
- **Liquidity Management**: Automated LP position management
- **MEV Protection**: Advanced protection against front-running

### Lending Protocols
- **Aave**: Automated lending and borrowing strategies
- **Compound**: Yield optimization and leverage management
- **Morpho**: Enhanced lending efficiency

### Yield Farming
- **Curve**: Stablecoin strategies and gauge farming
- **Convex**: Boosted CRV rewards
- **Yearn**: Vault strategy integration

## Integration Features

### Universal Router
Single interface for all protocol interactions:

```typescript
const router = shogun.getUniversalRouter();

// Execute complex multi-protocol strategy
await router.execute([
  { protocol: 'uniswap', action: 'swap', params: {...} },
  { protocol: 'aave', action: 'supply', params: {...} },
  { protocol: 'curve', action: 'stake', params: {...} }
]);
```

### Risk-Aware Execution
All protocol interactions include built-in risk management and monitoring integration with Shogun's reactive protection systems.