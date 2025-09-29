---
id: system-architecture
title: System Architecture
sidebar_position: 1
---

# System Architecture

The Reactive Hook System is a cross-chain architecture that enables automated responses to liquidity events on Ethereum mainnet through the Reactive Network. This system demonstrates how decentralized applications can implement proactive risk management and automated strategies.

## Core Components

### Layer 1 Components (Ethereum Mainnet)

#### LiquidityChange Hook
The main hook contract deployed on Ethereum mainnet that integrates with Uniswap v4's Pool Manager. This hook:
- Monitors liquidity changes in designated pools
- Filters events based on configurable thresholds
- Emits cross-chain events when significant liquidity changes occur
- Maintains minimal state to reduce gas costs

#### Pool Manager
Uniswap v4's core contract that manages all pool operations. The hook integrates with this contract to:
- Receive callbacks on liquidity modifications
- Access pool state and parameters
- Execute within the established hook framework

#### Position Manager
Handles position management operations and interfaces with the Pool Manager for position-related transactions.

### Reactive Network Components

#### LiquidityChangeReactive Contract
The reactive contract deployed on Reactive Mainnet that:
- Listens for specific events from the L1 hook
- Validates event authenticity and origin
- Triggers callback functions to registered strategies
- Provides a secure bridge between networks

#### Strategy Contracts
User-defined contracts that implement automated responses to liquidity events:
- Receive callbacks from the reactive contract
- Execute risk management strategies
- Can interact with other DeFi protocols
- Implement custom business logic

## System Flow

### Event Detection
1. User performs liquidity operations on Ethereum mainnet
2. Hook contract receives callback from Pool Manager
3. Hook evaluates if the change meets threshold criteria
4. Significant events are emitted with relevant data

### Cross-Chain Communication
1. Reactive Network monitors Ethereum for specific event signatures
2. Events are validated against known contract addresses
3. Topic hashes are verified to ensure data integrity
4. Valid events trigger reactive contract execution

### Strategy Execution
1. Reactive contract processes the incoming event
2. Registered strategies receive callback notifications
3. Strategies execute their programmed responses
4. Results can trigger additional on-chain actions

## Key Design Principles

### Security
- Origin validation ensures events come from authorized contracts
- Topic hash verification prevents event spoofing
- Minimal trust assumptions between chains
- Secure callback mechanisms

### Efficiency
- Threshold-based filtering reduces unnecessary events
- Lightweight hook implementation minimizes gas costs
- Optimized event structures for cross-chain transmission
- Selective strategy activation

### Modularity
- Pluggable strategy architecture
- Configurable thresholds and parameters
- Extensible event types
- Protocol-agnostic design

### Reliability
- Robust event validation mechanisms
- Fallback strategies for network issues
- Comprehensive error handling
- State consistency checks

## Integration Points

### Uniswap v4 Integration
The system leverages Uniswap v4's hook architecture to:
- Seamlessly integrate with existing DEX infrastructure
- Access real-time liquidity data
- Minimize protocol overhead
- Maintain compatibility with standard operations

### Reactive Network Integration
Utilizes Reactive Network's capabilities for:
- Cross-chain event monitoring
- Decentralized execution environment
- Secure inter-chain communication
- Automated contract triggers

### DeFi Protocol Integration
Strategies can integrate with various DeFi protocols to:
- Execute complex financial operations
- Implement sophisticated risk management
- Access additional liquidity sources
- Provide enhanced user experiences