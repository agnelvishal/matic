<script src="https://cdn.jsdelivr.net/npm/maticjs/dist/matic.js"></script>

const from = config.FROM_ADDRESS // from address
const recipient = '0x796011dD134abe45775f103168C50521370a3d7F' // receipent address

const token = config.MATIC_TEST_TOKEN // test token address
const amount = '100000000000000000' // amount in wei

// Create object of Matic
const matic = new Matic({
    maticProvider: "https://testnet2.matic.network",
    parentProvider: "https://ropsten.infura.io/v3/70645f042c3a409599c60f96f6dd9fbc",
    rootChainAddress: '0x60e2b19b9a87a3f37827f2c8c8306be718a5f9b4',
    syncerUrl: 'https://matic-syncer2.api.matic.network/api/v1',
    watcherUrl: 'https://ropsten-watcher2.api.matic.network/api/v1',
})

matic.wallet = '0x70CEAE48F7548B4E9B109FF73E03640AFA550187B38698FA2CAF0B0FE2D5ACAD' // prefix with `0x`


function sendToken() {
    // Send Tokens
    matic.transferTokens(token, recipient, amount, {
        from,
        // parent: true, // For token transfer on Main network (false for Matic Network)
        onTransactionHash: (hash) => {
            // action on Transaction success
            console.log(hash) // eslint-disable-line
        },
    })
}