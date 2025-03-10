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

# Cloudflare Pages Deployment Configuration for Next.js Portfolio

## Overview
Create a deployment pipeline for a Next.js 14 portfolio website using Cloudflare Pages. The workflow should follow this pattern:
- Local development
- Push to GitHub repository
- Automatic deployment to Cloudflare Pages

## Requirements
1. Configure automatic deployments from GitHub to Cloudflare Pages
2. Ensure Next.js Image Optimization works correctly with Cloudflare
3. Set up proper environment variables management
4. Implement caching strategies for optimal performance
5. Configure build settings for Next.js 14 (App Router)
6. Set up proper error handling and monitoring

## Specific Configuration Tasks

### GitHub Repository Setup
- Configure the repository for automatic deployments
- Set up a main branch for production deployments
- Document the workflow for developers

### Cloudflare Pages Configuration
- Connect Cloudflare Pages to the GitHub repository
- Configure build settings:
  * Build command: `npm run build`
  * Output directory: `.next` (or appropriate directory for Next.js 14)
  * Node.js version: 18.x
- Set up environment variables in Cloudflare dashboard
- Configure custom domain and DNS settings

### Next.js Image Optimization
- Ensure Next.js built-in image optimization works with Cloudflare
- Document any necessary configuration in `next.config.js`
- Verify there are no conflicts between Next.js optimization and Cloudflare's CDN

### Caching Strategy
- Configure appropriate cache headers for static assets
- Set up stale-while-revalidate patterns for dynamic content
- Leverage Cloudflare's CDN for global performance

### Security Configuration
- Set up appropriate security headers
- Configure Content Security Policy
- Implement other security best practices

### Monitoring and Error Handling
- Set up notifications for build failures
- Document rollback procedures
- Configure analytics for performance monitoring

## Deliverables
1. Step-by-step documentation for setting up the deployment pipeline
2. Configuration files (if any)
3. Troubleshooting guide for common issues
4. Performance optimization recommendations 