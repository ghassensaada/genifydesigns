# GenifyDesigns - AI-Powered Print-on-Demand Platform

Turn your ideas into unique, wearable, giftable, or display-worthy designs instantly. Just describe your vision, and Genify turns it into real products like shirts, mugs, posters, and more.

## 🎯 Business Overview

GenifyDesigns is a creative commerce platform where customers generate personalized designs using AI — and instantly preview them on real products. From shirts and hoodies to mugs, posters, and wall art, GenifyDesigns turns imagination into physical items in seconds.

**Mission**: Make self-expression and gift-giving effortless, personalized, and tech-powered — without needing design skills or inventory.

## 🚀 Features

### Core Functionality
- **AI Design Generation**: Natural language prompts to unique designs
- **Product Customization**: Choose from 8+ product types
- **Live Preview**: See designs on products instantly
- **Secure Checkout**: Stripe-powered payment processing
- **Order Management**: Admin dashboard for business oversight
- **Responsive Design**: Works on all devices

### Products Available
- T-Shirts ($24.95)
- Hoodies ($39.95)
- Mugs ($14.95)
- Posters ($19.95)
- Canvas Prints ($29.95)
- Stickers ($4.95)
- Tote Bags ($19.95)
- Phone Cases ($24.95)

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS, Framer Motion
- **AI Generation**: FAL.AI API (or DALL·E)
- **Payments**: Stripe Checkout
- **Database**: Firebase Firestore
- **Storage**: Firebase Storage
- **Hosting**: Vercel (recommended)
- **Fulfillment**: Printify API
- **Automation**: n8n (optional)

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Firebase account
- Stripe account
- FAL.AI account (or similar AI service)

### Setup Steps

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd genifydesigns
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Configuration**
   ```bash
   cp env.example .env.local
   ```
   
   Fill in your API keys in `.env.local`:
   - FAL.AI API key for image generation
   - Stripe keys for payments
   - Firebase configuration
   - Printify API key (optional)

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔧 Configuration

### Required Services Setup

#### 1. FAL.AI (AI Image Generation)
1. Sign up at [fal.ai](https://fal.ai)
2. Get your API key
3. Add to `.env.local`: `FAL_AI_KEY=your_key_here`

#### 2. Stripe (Payments)
1. Create account at [stripe.com](https://stripe.com)
2. Get test keys from dashboard
3. Add to `.env.local`:
   ```
   STRIPE_SECRET_KEY=sk_test_...
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
   ```

#### 3. Firebase (Database)
1. Create project at [firebase.google.com](https://firebase.google.com)
2. Enable Firestore Database
3. Get configuration from project settings
4. Add to `.env.local`:
   ```
   NEXT_PUBLIC_FIREBASE_API_KEY=...
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=...
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=...
   # ... other Firebase config
   ```

#### 4. Printify (Fulfillment) - Optional
1. Sign up at [printify.com](https://printify.com)
2. Get API key and shop ID
3. Add to `.env.local`:
   ```
   PRINTIFY_API_KEY=your_key_here
   PRINTIFY_SHOP_ID=your_shop_id_here
   ```

## 📋 **Complete API Setup Guide**

### 1. **Environment Variables** (`.env.local`)

You now have a `.env.local` file in your genifydesigns directory. Here's what you need to fill in:

```bash
<code_block_to_apply_changes_from>
```

### 2. **Step-by-Step API Setup**

#### **A. FAL.AI (AI Image Generation)**

1. **Sign up**: Go to [fal.ai](https://fal.ai)
2. **Get API key**: 
   - Dashboard → API Keys → Create New Key
   - Copy the key
3. **Add to `.env.local`**:
   ```bash
   FAL_AI_KEY=your_actual_fal_ai_key
   ```

#### **B. Stripe (Payments)**

1. **Create account**: Go to [stripe.com](https://stripe.com)
2. **Get test keys**:
   - Dashboard → Developers → API Keys
   - Copy `Publishable key` and `Secret key`
3. **Set up webhook**:
   - Dashboard → Developers → Webhooks
   - Add endpoint: `https://yourdomain.com/api/webhooks/stripe`
   - Select events: `checkout.session.completed`
   - Copy webhook secret
4. **Add to `.env.local`**:
   ```bash
   STRIPE_SECRET_KEY=sk_test_...
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
   STRIPE_WEBHOOK_SECRET=whsec_...
   ```

#### **C. Firebase (Database)**

1. **Create project**: Go to [firebase.google.com](https://firebase.google.com)
2. **Enable services**:
   - Firestore Database → Create Database
   - Storage → Get Started
3. **Get config**:
   - Project Settings → General → Your Apps → Web App
   - Copy configuration
4. **Add to `.env.local`**:
   ```bash
   NEXT_PUBLIC_FIREBASE_API_KEY=...
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=...
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=...
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=...
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=...
   NEXT_PUBLIC_FIREBASE_APP_ID=...
   ```

#### **D. Printify (Fulfillment) - Optional**

1. **Sign up**: Go to [printify.com](https://printify.com)
2. **Create shop**:
   - Create a new shop
   - Get Shop ID from URL
3. **Get API key**:
   - Account → API Keys → Generate New Key
4. **Add to `.env.local`**:
   ```bash
   PRINTIFY_API_KEY=your_printify_key
   PRINTIFY_SHOP_ID=your_shop_id
   ```

### 3. **Update API Code for Real Integration**

Let me update the generate API to use real FAL.AI:

```bash
# AI Image Generation (FAL.AI)
FAL_AI_KEY=your_fal_ai_key_here

# Stripe Payment Processing
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key_here
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_publishable_key_here
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret_here

# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key_here
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=123456789
NEXT_PUBLIC_FIREBASE_APP_ID=your_firebase_app_id

# Printify API (for fulfillment)
PRINTIFY_API_KEY=your_printify_api_key_here
PRINTIFY_SHOP_ID=your_printify_shop_id_here

# App Configuration
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_APP_NAME=GenifyDesigns
```

## 🏗️ Project Structure

```
genifydesigns/
├── app/                    # Next.js 14 app directory
│   ├── api/               # API routes
│   │   ├── generate/      # AI image generation
│   │   └── checkout/      # Stripe checkout
│   ├── admin/             # Admin dashboard
│   ├── create/            # Design creation page
│   ├── success/           # Order success page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── lib/                   # Utility functions
│   ├── firebase.ts        # Firebase configuration
│   └── orders.ts          # Order management
├── components/            # Reusable components
├── public/                # Static assets
└── package.json           # Dependencies
```

## 💰 Revenue Model

| Product | Price | Profit Estimate |
|---------|-------|-----------------|
| T-Shirt | $24.95 | $10–$12 |
| Hoodie | $39.95 | $15+ |
| Poster | $19.95–$29.95 | $8–$12 |
| Mug | $14.95 | $5–$7 |
| Premium AI | +$5–$10 | High margin |
| Digital Download | $4.99 | 100% profit |

## 📈 Marketing Strategy

### Channels
- **TikTok/Instagram Reels**: Show prompt → AI → live preview → real product
- **Reddit**: Post fun creations in hobby/gift subs
- **Pinterest**: Share aesthetic product mockups
- **Email**: Collect email during generation, offer discount
- **SEO**: "AI t-shirt generator," "custom AI poster," "create gifts with AI" blog posts

### Content Ideas
- Before/after design transformations
- Customer testimonials with real products
- Behind-the-scenes AI generation process
- Gift-giving guides and inspiration

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Other Platforms
- Netlify
- Railway
- DigitalOcean App Platform

## 🔒 Legal Considerations

### Required
- Business registration (LLC or Sole Proprietor)
- Terms of Service
- Privacy Policy
- Copyright notice
- AI image usage disclaimer

### Recommended
- Shipping policy
- Return policy
- Customer service contact
- Data protection compliance (GDPR, CCPA)

## 🛡️ Security Features

- Secure API key management
- Stripe webhook verification
- Input sanitization
- Rate limiting on AI generation
- HTTPS enforcement
- Data encryption

## 📊 Analytics & Monitoring

### Recommended Tools
- Google Analytics 4
- Stripe Dashboard
- Firebase Analytics
- Vercel Analytics
- Error tracking (Sentry)

## 🔄 Automation Workflow

### Order Processing
1. Customer completes purchase
2. Stripe webhook triggers
3. Order saved to Firebase
4. Admin notification
5. Printify order created (optional)
6. Customer receives confirmation email

### Tools for Automation
- n8n.io for workflow automation
- Zapier for simple integrations
- Custom webhooks for specific needs

## 🎨 Customization

### Design System
- Primary colors: Blue (#0ea5e9) and Purple (#d946ef)
- Typography: Inter (body), Poppins (headings)
- Components: Tailwind CSS classes
- Animations: Framer Motion

### Adding New Products
1. Update product list in `app/create/page.tsx`
2. Add product mockups
3. Update pricing in checkout API
4. Configure Printify integration

## 🤝 Contributing

1. Fork the repository
2. Create feature branch
3. Make changes
4. Test thoroughly
5. Submit pull request

## 📞 Support

- **Email**: support@genifydesigns.store
- **Documentation**: [docs.genifydesigns.store](https://docs.genifydesigns.store)
- **Issues**: GitHub Issues

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- FAL.AI for AI image generation
- Stripe for payment processing
- Firebase for backend services
- Printify for fulfillment
- Next.js team for the amazing framework

---

**Ready to turn imagination into reality?** 🚀

Start your AI-powered print-on-demand business today with GenifyDesigns! 