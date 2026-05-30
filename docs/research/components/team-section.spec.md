# TeamSection Specification

## Overview
- **Target file:** `src/components/TeamSection.tsx`
- **Interaction model:** static

## DOM Structure
SECTION (white bg) > DIV (rounded gray container) > 
- Header: italic "Our heroes" + bold "Meet the team"
- 3-column grid (row 1: Sarah, Maria, Eskil) + (row 2: David, Jennifer, Alex)
- Bottom banner: "Want to join our team?" + "See open roles" button

## Computed Styles

### Section
- backgroundColor: rgb(255, 255, 255)
- padding: 0 40px 80px

### Gray rounded container
- backgroundColor: rgb(246, 246, 243)
- borderRadius: 32px
- padding: 60px 60px 48px
- maxWidth: 1200px
- margin: 0 auto

### Section header container
- textAlign: center
- marginBottom: 48px

### Italic subtitle "Our heroes"
- fontFamily: Instrument Serif, serif
- fontStyle: italic
- fontSize: 36px
- fontWeight: 400
- color: rgba(0, 0, 0, 0.4)
- lineHeight: 1.2

### "Meet the team" heading
- fontFamily: Inter, sans-serif
- fontWeight: 800
- fontSize: 48px
- color: rgb(9, 4, 13)
- lineHeight: 1.1

### Team grid
- display: grid
- gridTemplateColumns: repeat(3, 1fr)
- gap: 16px
- marginBottom: 40px

### Team card
- backgroundColor: rgb(255, 255, 255)
- borderRadius: 24px
- padding: 40px 32px 32px
- display: flex
- flexDirection: column
- alignItems: center
- gap: 16px
- textAlign: center

### Avatar circle
- width: 100px
- height: 100px
- borderRadius: 50%
- overflow: hidden
- objectFit: cover
- marginBottom: 8px
- Each team member has a distinct colored gradient background as placeholder:
  Sarah Kim: linear-gradient(135deg, #c8e6a0, #8bc34a)
  Maria Rodriguez: linear-gradient(135deg, #4a4060, #2d2040)
  Eskil Fogelström: linear-gradient(135deg, #d4a574, #c49060)
  David Thompson: linear-gradient(135deg, #3a3040, #1a1030)
  Jennifer Park: linear-gradient(135deg, #f5d060, #f0b040)
  Alex Chen: linear-gradient(135deg, #90d060, #60b020)

### Member name
- fontFamily: Inter, sans-serif
- fontWeight: 600
- fontSize: 18px
- color: rgb(9, 4, 13)

### Member title
- fontFamily: Inter, sans-serif
- fontWeight: 400
- fontSize: 14px
- color: rgba(0, 0, 0, 0.5)

### LinkedIn icon
- width: 28px, height: 28px
- borderRadius: 6px
- backgroundColor: rgb(9, 4, 13)
- color: white
- cursor: pointer

### Bottom banner "Want to join our team?"
- display: flex
- justifyContent: center
- alignItems: center
- gap: 16px
- marginTop: 16px

### "Want to join our team?" text
- fontFamily: Inter, sans-serif
- fontWeight: 600
- fontSize: 20px
- color: rgb(9, 4, 13)

### "See open roles" button
- backgroundColor: rgb(9, 4, 13)
- color: white
- borderRadius: 50px
- padding: 12px 24px
- fontSize: 15px
- fontWeight: 500
- cursor: pointer
- border: none

## Text Content
Team members:
1. Sarah Kim - Co-founder & CEO
2. Maria Rodriguez - CTO & Co-founder
3. Eskil Fogelström - VP of Engineering
4. David Thompson - Head of Product
5. Jennifer Park - Lead Data Scientist
6. Alex Chen - Customer Success Manager

Banner: "Want to join our team?" + "See open roles"

## Responsive
- Desktop: 3-column grid
- Mobile: 1-column, cards full width
