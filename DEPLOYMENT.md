# 🚀 Deployment Guide for GenifyDesigns

This guide will help you deploy your GenifyDesigns platform to GitHub and Vercel.

## 📋 Prerequisites

- GitHub account
- Vercel account (free tier available)
- All API keys configured (see README.md for setup)

## 🔧 Step 1: Create GitHub Repository

### Option A: Using GitHub CLI (Recommended)

1. **Install GitHub CLI** (if not already installed):
   ```bash
   # macOS
   brew install gh
   
   # Ubuntu/Debian
   sudo apt install gh
   
   # Windows
   winget install GitHub.cli
   ```

2. **Login to GitHub**:
   ```bash
   gh auth login
   ```

3. **Create repository**:
   ```bash
   gh repo create genifydesigns --public --description "AI-powered print-on-demand platform" --source=. --remote=origin --push
   ```

### Option B: Manual GitHub Setup

1. **Go to GitHub.com** and create a new repository
2. **Repository name**: `genifydesigns`
3. **Description**: "AI-powered print-on-demand platform"
4. **Visibility**: Public (recommended for open source)
5. **Don't initialize** with README, .gitignore, or license (we already have these)

2. **Add remote and push**:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/genifydesigns.git
   git branch -M main
   git push -u origin main
   ```

## 🌐 Step 2: Deploy to Vercel

### Option A: Connect GitHub Repository (Recommended)

1. **Go to [vercel.com](https://vercel.com)**
2. **Sign up/Login** with GitHub
3. **Click "New Project"**
4. **Import your GitHub repository**:
   - Select `genifydesigns` repository
   - Vercel will auto-detect Next.js settings
5. **Configure environment variables**:
   ```
   FAL_AI_KEY=your_fal_ai_key
   STRIPE_SECRET_KEY=your_stripe_secret_key
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
   STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
   NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_firebase_project_id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
   NEXT_PUBLIC_FIREBASE_APP_ID=your_firebase_app_id
   PRINTIFY_API_KEY=your_printify_api_key
   PRINTIFY_SHOP_ID=your_printify_shop_id
   ```
6. **Click "Deploy"**

### Option B: Using Vercel CLI

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   ```bash
   vercel --prod
   ```

4. **Follow prompts** to configure environment variables

## 🔑 Step 3: Configure Environment Variables

### In Vercel Dashboard:

1. **Go to your project** in Vercel dashboard
2. **Settings → Environment Variables**
3. **Add each variable**:

   | Variable | Value | Environment |
   |----------|-------|-------------|
   | `FAL_AI_KEY` | Your FAL.AI key | Production, Preview, Development |
   | `STRIPE_SECRET_KEY` | Your Stripe secret key | Production, Preview, Development |
   | `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | Your Stripe publishable key | Production, Preview, Development |
   | `STRIPE_WEBHOOK_SECRET` | Your Stripe webhook secret | Production, Preview, Development |
   | `NEXT_PUBLIC_FIREBASE_API_KEY` | Your Firebase API key | Production, Preview, Development |
   | `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN` | Your Firebase auth domain | Production, Preview, Development |
   | `NEXT_PUBLIC_FIREBASE_PROJECT_ID` | Your Firebase project ID | Production, Preview, Development |
   | `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET` | Your Firebase storage bucket | Production, Preview, Development |
   | `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID` | Your Firebase messaging sender ID | Production, Preview, Development |
   | `NEXT_PUBLIC_FIREBASE_APP_ID` | Your Firebase app ID | Production, Preview, Development |
   | `PRINTIFY_API_KEY` | Your Printify API key | Production, Preview, Development |
   | `PRINTIFY_SHOP_ID` | Your Printify shop ID | Production, Preview, Development |

## 🔄 Step 4: Configure Webhooks

### Stripe Webhook:

1. **Go to Stripe Dashboard → Developers → Webhooks**
2. **Add endpoint**: `https://your-vercel-domain.vercel.app/api/webhooks/stripe`
3. **Select events**:
   - `checkout.session.completed`
   - `payment_intent.succeeded`
   - `payment_intent.payment_failed`
4. **Copy webhook secret** and add to Vercel environment variables

### Printify Webhook (Optional):

1. **Go to Printify Dashboard → Settings → Webhooks**
2. **Add webhook URL**: `https://your-vercel-domain.vercel.app/api/webhooks/printify`
3. **Select events**: Order status changes

## 🌍 Step 5: Custom Domain (Optional)

1. **In Vercel Dashboard** → Settings → Domains
2. **Add your domain** (e.g., `genifydesigns.store`)
3. **Configure DNS** as instructed by Vercel
4. **Update environment variables**:
   ```
   NEXT_PUBLIC_APP_URL=https://yourdomain.com
   ```

## ✅ Step 6: Verify Deployment

1. **Test your live site**:
   - Homepage: `https://your-vercel-domain.vercel.app`
   - Create page: `https://your-vercel-domain.vercel.app/create`
   - Admin: `https://your-vercel-domain.vercel.app/admin`

2. **Test API endpoints**:
   ```bash
   # Test AI generation
   curl -X POST https://your-vercel-domain.vercel.app/api/generate \
     -H "Content-Type: application/json" \
     -d '{"prompt":"test design"}'
   
   # Test checkout
   curl -X POST https://your-vercel-domain.vercel.app/api/checkout \
     -H "Content-Type: application/json" \
     -d '{"productId":"tshirt","productName":"T-Shirt","price":"$24.95","imageUrl":"test.jpg","prompt":"test","customerEmail":"test@example.com"}'
   ```

## 🔄 Step 7: Continuous Deployment

Your site will automatically redeploy when you push to the `main` branch:

```bash
# Make changes locally
git add .
git commit -m "Update feature"
git push origin main

# Vercel will automatically deploy
```

## 📊 Step 8: Monitoring

### Vercel Analytics:
- **Go to Vercel Dashboard** → Analytics
- **Monitor performance** and user behavior

### Error Tracking:
- **Set up Sentry** (optional) for error tracking
- **Monitor Vercel function logs** for API issues

## 🛡️ Step 9: Security Checklist

- [ ] Environment variables are set in Vercel
- [ ] Stripe webhook is configured
- [ ] Firebase security rules are set
- [ ] HTTPS is enabled (automatic with Vercel)
- [ ] API rate limiting is configured
- [ ] Error handling is in place

## 🚀 Step 10: Go Live!

Your GenifyDesigns platform is now live and ready to:

- ✅ Accept customer orders
- ✅ Generate AI designs
- ✅ Process payments
- ✅ Manage inventory
- ✅ Track business metrics

## 📞 Support

If you encounter issues:

1. **Check Vercel deployment logs**
2. **Verify environment variables**
3. **Test API endpoints individually**
4. **Check browser console for errors**

## 🎉 Congratulations!

Your AI-powered print-on-demand business is now live! Start marketing and accepting orders.

---

**Next Steps:**
- Set up Google Analytics
- Configure email marketing
- Create social media accounts
- Start content marketing
- Monitor and optimize performance 