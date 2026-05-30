# CarouselSection Specification

## Overview
- **Target file:** `src/components/CarouselSection.tsx`
- **Interaction model:** time-driven (auto-scrolling horizontal marquee)

## DOM Structure
DIV (overflow-hidden) > DIV.animate-marquee (flex row, auto-scrolling) with:
- CARD 1: Photo card (people in business meeting, rounded, ~534x356)
- CARD 2: "FACTS & NUMBERS" yellow gradient card with "73%" stat
- CARD 3: Photo card (team collaborating, ~350x365)
- CARD 4: "SUPPORTERS" purple gradient card with company logos
- CARD 5: "MOTTO" dark card with quote and avatar
- (Repeat same cards for infinite loop)

## Computed Styles

### Outer container
- width: 100%
- overflow: hidden
- paddingBottom: 40px
- backgroundColor: rgb(246, 246, 243)

### Marquee track
- display: flex
- flexDirection: row
- gap: 16px
- width: fit-content
- animation: marquee 30s linear infinite

### Photo cards (large)
- width: 534px (first) or 350px (others)
- height: 400px
- borderRadius: 24px
- overflow: hidden
- objectFit: cover
- flexShrink: 0

### FACTS & NUMBERS card (yellow gradient)
- width: 350px
- height: 400px
- borderRadius: 24px
- background: linear-gradient(rgb(244, 243, 241) 40%, rgb(249, 247, 0) 100%)
- padding: 32px
- display: flex
- flexDirection: column
- justifyContent: space-between
- flexShrink: 0

### FACTS & NUMBERS - label
- fontSize: 11px
- fontWeight: 600
- letterSpacing: 1.5px
- color: rgba(0,0,0,0.5)
- textTransform: uppercase

### FACTS & NUMBERS - stat "73%"
- fontSize: 80px
- fontWeight: 800
- color: rgb(9, 4, 13)
- lineHeight: 1
- fontFamily: Inter

### FACTS & NUMBERS - description
- fontSize: 18px
- fontWeight: 400
- color: rgba(0,0,0,0.7)
- lineHeight: 1.4

### SUPPORTERS card (purple gradient)
- width: 350px
- height: 400px
- borderRadius: 24px
- background: linear-gradient(rgb(244, 243, 241) 35%, rgb(120, 36, 237) 100%)
- padding: 32px
- display: flex
- flexDirection: column
- gap: 16px
- flexShrink: 0

### SUPPORTERS - label
- same as FACTS label style

### SUPPORTERS - company logo grid
- display: grid
- gridTemplateColumns: repeat(3, 1fr)
- gap: 8px
- Each logo: 100x54px or 100x100px, objectFit: contain

### MOTTO card (dark)
- width: 350px
- height: 400px
- borderRadius: 24px
- backgroundColor: rgb(9, 4, 13)
- padding: 32px
- display: flex
- flexDirection: column
- justifyContent: space-between
- flexShrink: 0

### MOTTO - label
- fontSize: 11px
- letterSpacing: 1.5px
- textTransform: uppercase
- color: rgba(255,255,255,0.5)

### MOTTO - quote text
- fontSize: 20px
- fontWeight: 500
- color: rgb(255, 255, 255)
- fontFamily: Instrument Serif or Inter
- fontStyle: italic
- lineHeight: 1.4

### MOTTO - avatar row
- display: flex
- alignItems: center
- gap: 12px

### MOTTO - avatar image
- width: 50px
- height: 50px (cropped from 50x75 portrait)
- borderRadius: 50%
- objectFit: cover

### MOTTO - person name/title
- name: fontSize 16px, fontWeight 600, color white
- title: fontSize 14px, color rgba(255,255,255,0.5)

## Assets
- Photo 1: `/images/carousel-team-1.jpeg` (534x356, business meeting)
- Photo 2: `/images/carousel-team-2.jpeg` (350x233, collaborative work)
- Photo 3: `/images/carousel-team-3.jpg` (350x365, office setting)
- Avatar: `/images/avatar-james-holloway.jpeg`
- Supporter logos: `/images/supporters-logo-1.png` through `/images/supporters-logo-6.png`

## Text Content
- FACTS & NUMBERS: "73%" / "of founders report increased customer inquiries within the first month"
- SUPPORTERS: "Companies that believes in our mission."
- MOTTO: "\"With us, our hiring teams can fully engage with candidates and gather meaningful insights.\"" / "James Holloway" / "Founder"

## Animation
- CSS keyframes marquee: from { transform: translateX(0) } to { transform: translateX(-50%) }
- Duration: 30s linear infinite
- The track contains all cards TWICE (original + clone) so total width = 2x card set
- Use class `animate-marquee` from globals.css

## Responsive
- Desktop: full carousel visible
- Mobile: same marquee, cards smaller via transform or overflow hidden
