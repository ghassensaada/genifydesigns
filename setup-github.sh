#!/bin/bash

# GenifyDesigns GitHub Setup Script
# This script helps you create a GitHub repository and push your code

echo "🚀 GenifyDesigns GitHub Setup"
echo "=============================="

# Check if gh CLI is installed
if ! command -v gh &> /dev/null; then
    echo "❌ GitHub CLI (gh) is not installed."
    echo "Please install it first:"
    echo "  macOS: brew install gh"
    echo "  Ubuntu: sudo apt install gh"
    echo "  Windows: winget install GitHub.cli"
    exit 1
fi

# Check if user is logged in
if ! gh auth status &> /dev/null; then
    echo "🔐 Please login to GitHub first:"
    gh auth login
fi

# Get repository name
read -p "Enter GitHub username: " GITHUB_USERNAME
read -p "Enter repository name (default: genifydesigns): " REPO_NAME
REPO_NAME=${REPO_NAME:-genifydesigns}

echo ""
echo "📋 Repository Details:"
echo "  Username: $GITHUB_USERNAME"
echo "  Repository: $REPO_NAME"
echo "  URL: https://github.com/$GITHUB_USERNAME/$REPO_NAME"
echo ""

read -p "Continue? (y/N): " -n 1 -r
echo ""
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "❌ Setup cancelled."
    exit 1
fi

# Create repository
echo "🔧 Creating GitHub repository..."
gh repo create "$GITHUB_USERNAME/$REPO_NAME" \
    --public \
    --description "AI-powered print-on-demand platform where anyone can turn their ideas into unique, wearable, giftable, or display-worthy designs instantly." \
    --source=. \
    --remote=origin \
    --push

if [ $? -eq 0 ]; then
    echo "✅ Repository created successfully!"
    echo ""
    echo "🌐 Your repository is now available at:"
    echo "   https://github.com/$GITHUB_USERNAME/$REPO_NAME"
    echo ""
    echo "🚀 Next steps:"
    echo "   1. Go to https://vercel.com"
    echo "   2. Import your GitHub repository"
    echo "   3. Configure environment variables"
    echo "   4. Deploy!"
    echo ""
    echo "📖 See DEPLOYMENT.md for detailed instructions."
else
    echo "❌ Failed to create repository."
    echo "Please check your GitHub CLI setup and try again."
    exit 1
fi 