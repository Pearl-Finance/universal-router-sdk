import { UNIVERSAL_ROUTER_ADDRESS, PERMIT2_ADDRESS as MAINNET_PERMIT2_ADDRESS } from '../../src/utils/constants'

export const MAINNET_ROUTER_ADDRESS = UNIVERSAL_ROUTER_ADDRESS(1)
export const FORGE_ROUTER_ADDRESS = '0xf21A8aaE61c704219B00A20B2D882B180584E02b'
export const FORGE_PERMIT2_ADDRESS = '0x000000000022D473030F116dDEE9F6B43aC78BA3'

export const FORGE_SENDER_ADDRESS = '0xcf03dd0a894ef79cb5b601a43c4b25e3ae4c67ed'

export const TEST_RECIPIENT_ADDRESS = '0xaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
export const TEST_FEE_RECIPIENT_ADDRESS = '0xbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb'

export const PERMIT2_ADDRESS =
  process.env.USE_MAINNET_DEPLOYMENT === 'true' ? MAINNET_PERMIT2_ADDRESS : FORGE_PERMIT2_ADDRESS
// Universal Router address in tests
export const ROUTER_ADDRESS =
  process.env.USE_MAINNET_DEPLOYMENT === 'true' ? MAINNET_ROUTER_ADDRESS : FORGE_ROUTER_ADDRESS
