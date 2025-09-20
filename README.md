# Croponchain - Blockchain Crop Traceability System

A decentralized application (DApp) for tracking and trading agricultural crops on the blockchain, enabling transparent supply chain management and fair pricing for farmers.

## 🌾 Features

- **Crop Registration**: Register crops with unique batch numbers and pricing
- **Blockchain Traceability**: Immutable crop records on the blockchain
- **Marketplace**: Browse and compare prices from different farmers
- **Ownership Transfer**: Transfer crop ownership through the supply chain
- **Standardized Crop Database**: 110+ major Indian crops with unique IDs
- **Location-based Batch Numbers**: Unique identifiers using state, district, and wallet address

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- MetaMask browser extension
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Shansh0324/CropChain-Web3.0.git
   cd CropChain-Web3.0
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Edit the `.env` file with your configuration:
   ```env
   # Required for deployment
   PRIVATE_KEY=your_private_key_here
   VOLTA_RPC=https://volta-rpc.energyweb.org
   
   # Optional
   INFURA_PROJECT_ID=your_infura_project_id
   ```

4. **Deploy smart contract** (optional)
   ```bash
   npx hardhat run scripts/deploy.cjs --network volta
   ```

5. **Open the application**
   ```bash
   # Simply open index.html in your browser
   # Or use a local server:
   python -m http.server 8000
   ```

## 🔧 Configuration

### Environment Variables

Copy `.env.example` to `.env` and configure the following:

#### Required Variables
- `PRIVATE_KEY`: Your wallet private key (for deployment)
- `VOLTA_RPC`: Volta network RPC URL

#### Optional Variables
- `INFURA_PROJECT_ID`: For enhanced RPC access
- `CONTRACT_ADDRESS`: Deployed contract address
- `GAS_LIMIT`: Gas limit for transactions
- `GAS_PRICE`: Gas price in wei

### Network Configuration

The application supports multiple networks:

- **Volta (Energy Web Chain)**: Primary testnet
- **Sepolia**: Ethereum testnet
- **Mainnet**: Production network (use with caution)

## 📱 Usage

### For Farmers

1. **Connect MetaMask** to the application
2. **Select your crop** from the standardized database
3. **Enter location details** (state, district, post office)
4. **Generate batch number** automatically
5. **Set your price** per unit
6. **Register your crop** on the blockchain

### For Buyers

1. **Browse marketplace** by crop type
2. **Compare prices** from different farmers
3. **View farmer details** and batch information
4. **Contact farmers** using wallet addresses
5. **Verify authenticity** through blockchain records

## 🏗️ Project Structure

```
Croponchain/
├── contracts/
│   └── DrugTraceability.sol    # Smart contract
├── scripts/
│   └── deploy.cjs              # Deployment script
├── index.html                  # Main application
├── marketplace.html            # Marketplace page
├── hardhat.config.js           # Hardhat configuration
├── package.json                # Dependencies
├── .env.example               # Environment template
├── .gitignore                 # Git ignore rules
└── README.md                  # This file
```

## 🔒 Security

### Best Practices

- **Never commit private keys** to version control
- **Use testnet** for development and testing
- **Verify contracts** before mainnet deployment
- **Keep mnemonics secure** and offline
- **Use hardware wallets** for production

### Environment Security

- `.env` file is gitignored
- Use `.env.example` as a template
- Rotate keys regularly
- Use environment-specific configurations

## 🌐 Supported Networks

### Volta (Energy Web Chain)
- **Chain ID**: 73799
- **RPC**: https://volta-rpc.energyweb.org
- **Purpose**: Primary testnet for development

### Sepolia
- **Chain ID**: 11155111
- **RPC**: https://sepolia.infura.io/v3/YOUR_PROJECT_ID
- **Purpose**: Ethereum testnet alternative

## 📊 Crop Database

The system includes 110+ standardized crops:

- **Cereals** (C001-C015): Rice, Wheat, Maize, etc.
- **Pulses** (C016-C030): Chickpea, Pigeon Pea, etc.
- **Oilseeds** (C031-C045): Groundnut, Mustard, etc.
- **Commercial Crops** (C046-C060): Sugarcane, Cotton, etc.
- **Fruits** (C061-C080): Mango, Banana, etc.
- **Vegetables** (C081-C110): Potato, Onion, etc.

## 🔄 Batch Number Format

Unique batch numbers follow this format:
```
[StateCode]-[DistrictCode]-[PostOfficeNumber]-[Date]-[Last4Wallet]
```

Example: `OD-14-102-190925-A3F9`

## 🛠️ Development

### Smart Contract Development

```bash
# Compile contracts
npx hardhat compile

# Run tests
npx hardhat test

# Deploy to testnet
npx hardhat run scripts/deploy.cjs --network volta
```

### Frontend Development

The application is built with vanilla JavaScript and Web3.js:

- **Web3 Integration**: MetaMask wallet connection
- **Responsive Design**: Mobile-friendly interface
- **Real-time Updates**: Blockchain data synchronization

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions:

- Create an issue on GitHub
- Check the documentation
- Review the smart contract code

## 🔮 Future Enhancements

- [ ] Mobile app development
- [ ] Advanced analytics dashboard
- [ ] Integration with IoT sensors
- [ ] Multi-language support
- [ ] Advanced search and filtering
- [ ] Rating and review system
- [ ] Automated price discovery
- [ ] Supply chain analytics

---

**Built with ❤️ for the agricultural community**
