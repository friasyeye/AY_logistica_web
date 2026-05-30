# MissionSection Specification

## Overview
- **Target file:** `src/components/MissionSection.tsx`
- **Interaction model:** static

## DOM Structure
SECTION (white bg) > DIV (centered, max-width) > 
- Small label: "• Mission" (italic, with bullet dot)
- Large paragraph text (mixed weight: gray intro + bold black statement)

## Computed Styles

### Section
- backgroundColor: rgb(255, 255, 255)
- paddingTop: 120px
- paddingBottom: 80px
- paddingLeft: 40px, paddingRight: 40px
- display: flex
- justifyContent: center

### Content container
- maxWidth: 860px
- width: 100%
- display: flex
- flexDirection: column
- alignItems: center
- gap: 32px

### Label "• Mission"
- fontFamily: Instrument Serif, serif
- fontStyle: italic
- fontSize: 18px
- fontWeight: 400
- color: rgba(0, 0, 0, 0.5)
- display: flex
- alignItems: center
- gap: 6px
- The "•" is a filled black dot, approximately 8px

### Mission paragraph text
- fontFamily: Inter, sans-serif
- fontSize: 40px (desktop)
- lineHeight: 1.3
- textAlign: center
- fontWeight: 400

### Gray/muted part of text
- color: rgba(0, 0, 0, 0.3) — very light gray

### Bold black part of text
- fontWeight: 800
- color: rgb(9, 4, 13)

## Text Content
Full paragraph (two-toned):
Gray: "Ask people about managing energy costs and you'll see them stress. "
Bold black: "Ask people about optimizing energy performance and you'll hear how it's overwhelming. Our mission is to change that."

## Responsive
- Desktop: fontSize 40px
- Mobile: fontSize 24px
