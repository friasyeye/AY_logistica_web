# Footer Specification

## Overview
- **Target file:** `src/components/Footer.tsx`
- **Interaction model:** static

## DOM Structure
FOOTER (yellow gradient bg) > DIV (content, max-width) with 2-column layout:
- LEFT: logo icon + "Consumo" wordmark + tagline
- RIGHT: 3 link columns (Product, Company, Connect)
- BOTTOM: copyright row

## Computed Styles

### Footer outer
- background: linear-gradient(rgb(246, 246, 243) 0%, rgb(246, 246, 243) 22%, color(display-p3 0.959 0.958 0.854) 58%, color(display-p3 0.975 0.905 0.103) 100%)
- Simplified safe CSS: linear-gradient(to bottom, #f6f6f3 0%, #f6f6f3 22%, #f5f4da 58%, #f9f500 100%)
- padding: 80px 60px 60px
- minHeight: 500px

### Content layout
- display: grid
- gridTemplateColumns: 1fr 1fr
- gap: 60px
- maxWidth: 1200px
- margin: 0 auto
- alignItems: start

### Logo icon (top left)
- width: 44px, height: 44px
- Uses FooterLogoIcon from icons.tsx

### "Consumo" wordmark
- fontFamily: Inter, sans-serif
- fontWeight: 800
- fontSize: 72px (desktop) — very large
- color: rgb(9, 4, 13)
- lineHeight: 1
- letterSpacing: -2px
- marginTop: 8px

### Tagline
- fontFamily: Inter, sans-serif
- fontWeight: 400
- fontSize: 16px
- color: rgba(9, 4, 13, 0.5)
- lineHeight: 1.5
- maxWidth: 320px
- marginTop: 12px

### Right column (nav links)
- display: flex
- flexDirection: row
- justifyContent: flex-end
- gap: 80px
- alignItems: flex-start

### Column heading (Product, Company, Connect)
- fontFamily: Inter, sans-serif
- fontWeight: 400
- fontSize: 16px
- color: rgba(9, 4, 13, 0.5)
- marginBottom: 20px

### Link items
- fontFamily: Inter, sans-serif
- fontWeight: 500
- fontSize: 16px
- color: rgb(9, 4, 13)
- textDecoration: none
- display: block
- marginBottom: 12px
- cursor: pointer

### Social icons row (Connect column)
- display: flex
- flexDirection: row
- gap: 12px
- marginTop: 4px

### Social icon
- width: 32px, height: 32px
- backgroundColor: rgb(9, 4, 13)
- borderRadius: 6px
- display: flex, alignItems: center, justifyContent: center
- color: white
- Inner SVG: 16x16

### Copyright row
- display: flex
- justifyContent: flex-end
- marginTop: 60px
- paddingTop: 24px
- borderTop: 1px solid rgba(9, 4, 13, 0.1)

### Copyright text
- fontFamily: Inter, sans-serif
- fontSize: 14px
- fontWeight: 400
- color: rgba(9, 4, 13, 0.4)

## Text Content
- Wordmark: "Consumo"
- Tagline: "Turn visitors into customers from day one. Built for founders who ship fast and grow faster."
- Product: Features, Pricing
- Company: Our Mission, Contact, Blog
- Connect: (Discord icon, LinkedIn icon, Instagram icon)
- Copyright: "Copyright ©2025 All rights reserved • Terms & Condition"

## Assets
- Use FooterLogoIcon, DiscordIcon, LinkedInIcon, InstagramIcon from icons.tsx

## Responsive
- Desktop: 2-column grid (left: logo+wordmark, right: links)
- Mobile: single column stacked
