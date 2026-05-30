# Navbar Specification

## Overview
- **Target file:** `src/components/Navbar.tsx`
- **Interaction model:** static (fixed position, scroll-driven behavior: center CTA appears when scrolled past hero)

## DOM Structure
Fixed HEADER > DIV (Navigation, full width, flex row space-between) > [NAV pill (logo+links), A button "Get Free Demo"]

## Computed Styles

### Header container
- position: fixed
- top: 0, left: 0, right: 0
- padding: 20px
- display: flex
- justifyContent: space-between
- alignItems: center
- zIndex: 100
- backgroundColor: transparent
- width: 100%

### Nav pill (Desktop)
- backgroundColor: rgb(255, 255, 255)
- borderRadius: 50px
- padding: 15px 30px 15px 20px
- display: flex
- alignItems: center
- gap: 20px
- height: 60px
- boxShadow: rgba(0, 0, 0, 0.13) -0.12px 0.48px 0.70px -1.25px, rgba(0, 0, 0, 0.13) -1px 4px 5.77px -2.5px

### Logo link (inside pill)
- width: 32px, height: 32px
- borderRadius: 8px
- backgroundColor: rgb(9, 4, 13)
- display: flex, alignItems: center, justifyContent: center

### Nav menu links
- fontSize: 16px
- fontWeight: 500
- fontFamily: Inter
- color: rgba(0, 0, 0, 0.5) for inactive links
- color: rgb(9, 4, 13) for active link ("About")
- No underline
- display: flex, gap: 8px between items

### "Get Free Demo" primary button (top right)
- backgroundColor: rgb(9, 4, 13)
- color: rgb(255, 255, 255)
- borderRadius: 50px
- padding: 14px 28px
- fontSize: 16px
- fontWeight: 500
- fontFamily: Inter
- cursor: pointer
- border: none
- transition: opacity 0.2s

## Text Content
- Nav links: Product, About, Blog, Pricing
- "About" is the active link (bold weight, full opacity)
- Button: "Get Free Demo"

## Responsive Behavior
- Desktop: full pill nav + right button
- Mobile: simpler layout (mobile menu items exist separately)
