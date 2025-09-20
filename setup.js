#!/usr/bin/env node

/**
 * Croponchain Setup Script
 * Helps users set up the project quickly
 */

const fs = require('fs');
const path = require('path');

console.log('🌾 Croponchain Setup Script');
console.log('============================\n');

// Check if .env exists
const envPath = path.join(__dirname, '.env');
const envExamplePath = path.join(__dirname, '.env.example');

if (!fs.existsSync(envPath)) {
    if (fs.existsSync(envExamplePath)) {
        console.log('📋 Creating .env file from .env.example...');
        fs.copyFileSync(envExamplePath, envPath);
        console.log('✅ .env file created successfully!');
        console.log('⚠️  Please edit .env file with your actual values\n');
    } else {
        console.log('❌ .env.example file not found!');
        process.exit(1);
    }
} else {
    console.log('✅ .env file already exists\n');
}

// Check if node_modules exists
const nodeModulesPath = path.join(__dirname, 'node_modules');
if (!fs.existsSync(nodeModulesPath)) {
    console.log('📦 Installing dependencies...');
    const { execSync } = require('child_process');
    try {
        execSync('npm install', { stdio: 'inherit' });
        console.log('✅ Dependencies installed successfully!\n');
    } catch (error) {
        console.log('❌ Failed to install dependencies');
        console.log('Please run: npm install\n');
    }
} else {
    console.log('✅ Dependencies already installed\n');
}

// Display next steps
console.log('🚀 Setup Complete! Next Steps:');
console.log('===============================');
console.log('1. Edit .env file with your configuration');
console.log('2. Open index.html in your browser');
console.log('3. Connect MetaMask wallet');
console.log('4. Start registering crops!\n');

console.log('📚 For more information, see README.md');
console.log('🔗 GitHub: https://github.com/Shansh0324/CropChain-Web3.0.git\n');

console.log('Happy farming! 🌱');
