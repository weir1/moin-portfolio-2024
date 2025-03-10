# Deployment Guide

## Domain Setup (moindigital.in)
1. **Domain Registration**
   - Register through preferred registrar
   - Point nameservers to Cloudflare
   - Update A/CNAME records

2. **Cloudflare Configuration**
   - Enable HTTPS/SSL
   - Setup page rules
   - Configure caching
   - Enable security features

## Cloudflare Pages Setup
1. **Initial Setup**
   - Connect GitHub repository
   - Configure build settings:
     ```bash
     Build command: npm run build
     Build output directory: .next
     Node.js version: 18.x
     ```

2. **Environment Variables**
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key
   NEXT_PUBLIC_GA_ID=your_ga_id
   ```

3. **Custom Domain Setup**
   - Add custom domain
   - Verify DNS configuration
   - Enable HTTPS

## Build & Deploy Process
1. **Production Build**
   ```bash
   npm run build
   ```

2. **Automatic Deployments**
   - Main branch -> Production
   - Development branch -> Preview
   - PR branches -> Preview URLs

3. **Manual Deployments**
   ```bash
   npm run deploy
   ```

## Performance Monitoring
1. **Analytics Setup**
   - Vercel Analytics
   - Google Analytics 4
   - Core Web Vitals

2. **Error Monitoring**
   - Sentry integration
   - Error reporting
   - Performance monitoring

## Security Checklist
1. **Pre-deployment**
   - Environment variables
   - Security headers
   - CSP configuration
   - Rate limiting

2. **Post-deployment**
   - SSL verification
   - Security scanning
   - Performance testing
   - Accessibility check

## Rollback Procedure
1. **Quick Rollback**
   - Use Cloudflare Pages dashboard
   - Select previous deployment
   - Instant rollback

2. **Manual Rollback**
   ```bash
   git revert HEAD
   git push origin main
   ```

## Maintenance Mode
1. **Enable**
   ```typescript
   // pages/_middleware.ts
   export function middleware() {
     return new Response('Site under maintenance')
   }
   ```

2. **Disable**
   - Remove middleware
   - Deploy changes 