# CTASection Specification

## Overview
- **Target file:** `src/components/CTASection.tsx`
- **Interaction model:** static

## DOM Structure
SECTION (outer padding) > DIV (black rounded card with dot pattern) >
- Heading text
- Supporting paragraph
- "Get Free Demo" button

## Computed Styles

### Section wrapper
- backgroundColor: rgb(255, 255, 255)
- paddingLeft: 40px
- paddingRight: 40px
- paddingBottom: 0

### Dark card
- backgroundColor: rgb(9, 4, 13)
- borderRadius: 32px
- padding: 100px 60px
- maxWidth: 1200px
- margin: 0 auto
- display: flex
- flexDirection: column
- alignItems: center
- textAlign: center
- gap: 24px
- position: relative
- overflow: hidden
- backgroundImage: radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)
- backgroundSize: 16px 16px

### Heading "Start generating revenue in days, not months"
- fontFamily: Inter, sans-serif (or use Instrument Sans)
- fontWeight: 800
- fontSize: 56px
- color: rgb(255, 255, 255)
- lineHeight: 1.1
- letterSpacing: -1px
- maxWidth: 700px
- textAlign: center

### Supporting text
- fontFamily: Inter, sans-serif
- fontSize: 18px
- fontWeight: 400
- color: rgba(255, 255, 255, 0.6)
- lineHeight: 1.5
- maxWidth: 560px

### "Get Free Demo" button
- backgroundColor: rgb(255, 255, 255)
- color: rgb(9, 4, 13)
- borderRadius: 50px
- padding: 16px 36px
- fontSize: 16px
- fontWeight: 600
- border: none
- cursor: pointer
- transition: opacity 0.2s

## Text Content
- Heading: "Start generating revenue in days, not months"
- Supporting: "Launch your professional website today and start converting visitors into paying customers immediately."
- Button: "Get Free Demo"

## Responsive
- Desktop: large heading 56px
- Mobile: heading 32px, reduced padding
