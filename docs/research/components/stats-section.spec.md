# StatsSection Specification

## Overview
- **Target file:** `src/components/StatsSection.tsx`
- **Interaction model:** static

## DOM Structure
SECTION (white bg) > DIV (flex row, 4 columns) > [STAT ITEM x4]
Each STAT ITEM: large number + label text below

## Computed Styles

### Section
- backgroundColor: rgb(255, 255, 255)
- paddingTop: 80px
- paddingBottom: 100px
- paddingLeft: 40px, paddingRight: 40px
- display: flex
- justifyContent: center

### Stats container
- display: flex
- flexDirection: row
- justifyContent: space-around
- alignItems: flex-start
- maxWidth: 1200px
- width: 100%
- gap: 40px

### Stat number
- fontFamily: Inter, sans-serif
- fontSize: 80px (desktop)
- fontWeight: 800
- color: rgb(9, 4, 13)
- lineHeight: 1
- letterSpacing: -2px
- textAlign: center

### Stat label
- fontFamily: Inter, sans-serif
- fontSize: 16px
- fontWeight: 400
- color: rgba(0, 0, 0, 0.5)
- textAlign: center
- maxWidth: 140px
- lineHeight: 1.4

## Text Content
Stats:
1. "12" / "Energy management experts"
2. "5" / "Countries served"
3. "$2.5M" / "Client savings generated"
4. "850" / "Facilities optimized"

## Responsive
- Desktop: 4 columns in a row
- Mobile: 2x2 grid
