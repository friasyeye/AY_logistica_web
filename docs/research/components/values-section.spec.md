# ValuesSection Specification

## Overview
- **Target file:** `src/components/ValuesSection.tsx`
- **Interaction model:** static

## DOM Structure
SECTION (white bg) > DIV (flex row, 4 columns) > [VALUE CARD x4]
Each VALUE CARD: icon square + title + description

## Computed Styles

### Section
- backgroundColor: rgb(255, 255, 255)
- paddingTop: 80px
- paddingBottom: 100px
- paddingLeft: 40px, paddingRight: 40px
- display: flex
- justifyContent: center

### Values container
- display: flex
- flexDirection: row
- justifyContent: center
- gap: 60px
- maxWidth: 1200px
- width: 100%

### Value card
- display: flex
- flexDirection: column
- alignItems: center
- textAlign: center
- gap: 16px
- maxWidth: 220px

### Icon container (rounded square)
- width: 64px
- height: 64px
- borderRadius: 16px
- backgroundColor: rgb(246, 246, 243)
- display: flex
- alignItems: center
- justifyContent: center
- marginBottom: 8px
- boxShadow: rgba(0, 0, 0, 0.06) 0px 2px 8px

### Icon itself
- width: 28px
- height: 28px
- color: rgb(9, 4, 13)

### Value title
- fontFamily: Inter, sans-serif
- fontWeight: 700
- fontSize: 18px
- color: rgb(9, 4, 13)
- lineHeight: 1.3

### Value description
- fontFamily: Inter, sans-serif
- fontWeight: 400
- fontSize: 14px
- color: rgba(0, 0, 0, 0.5)
- lineHeight: 1.5
- textAlign: center

## Text Content
Values:
1. Icon: Flame/fire icon | "Transparency First" | "Energy data should be clear and accessible"
2. Icon: Compass/arrow icon | "Customer Success" | "Every decision prioritizes long-term client results"
3. Icon: Clock icon | "Continuous Innovation" | "We constantly improve our platform"
4. Icon: Prism/triangle icon | "Data Security" | "Your operational data is 100% safe"

Use icons from `src/components/icons.tsx`: FlameIcon, CompassIcon, ClockIcon, PrismIcon

## Responsive
- Desktop: 4 columns in a row with gap 60px
- Mobile: 2x2 grid
