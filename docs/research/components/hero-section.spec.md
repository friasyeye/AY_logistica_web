# HeroSection Specification

## Overview
- **Target file:** `src/components/HeroSection.tsx`
- **Interaction model:** static

## DOM Structure
SECTION > DIV container (centered text) with:
1. Italic serif text "What drives us" (decorative overlay, light gray)
2. Bold heading "Helping you moving from idea to launch – fast"
3. Pill button "Get to know us"

## Computed Styles

### Section
- background: linear-gradient(rgb(246, 246, 243) 0%, rgb(235, 233, 230) 100%)
- minHeight: 100vh
- display: flex
- alignItems: center
- justifyContent: center
- padding: 120px 40px 60px (accounting for fixed nav)
- position: relative

### Text container
- textAlign: center
- maxWidth: 900px
- display: flex
- flexDirection: column
- alignItems: center
- gap: 24px

### Italic subtitle "What drives us"
- fontFamily: Instrument Serif, serif
- fontStyle: italic
- fontSize: 48px (desktop)
- fontWeight: 400
- color: rgba(0, 0, 0, 0.3) — very light gray
- lineHeight: 1.2
- letterSpacing: -0.5px

### Main heading "Helping you moving from idea to launch – fast"
- fontFamily: Inter, sans-serif
- fontWeight: 800
- fontSize: 64px (desktop)
- color: rgb(9, 4, 13)
- lineHeight: 1.1
- letterSpacing: -1.5px
- textAlign: center
- maxWidth: 800px

### "Get to know us" button
- backgroundColor: rgba(0, 0, 0, 0.8)
- color: rgb(255, 255, 255)
- borderRadius: 50px
- padding: 14px 32px
- fontSize: 16px
- fontWeight: 500
- fontFamily: Inter
- border: none
- cursor: pointer
- transition: opacity 0.2s ease

## Text Content
- Italic text: "What drives us"
- Heading: "Helping you moving from idea to launch – fast"
- Button: "Get to know us"

## Responsive Behavior
- Desktop (1440px): fontSize heading 64px, italic 48px
- Mobile (390px): fontSize heading ~36px, italic ~28px, padding reduced
