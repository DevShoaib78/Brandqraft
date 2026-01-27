UI Refinement Request – Interaction, Animation & Icon Placement Fixes

Please apply the following refinements carefully. These are polish-level but critical UX and visual quality improvements. Address each item methodically and test across desktop and mobile.

────────────────────────────────
1. SPLASH SCREEN BEHAVIOR
────────────────────────────────

Issue:
- The splash screen only appears on the first visit and does not show again on refresh or revisit.

Required change:
- Ensure the splash screen appears **every time the website loads**, including:
  - Page refresh
  - Revisiting the site
  - Direct navigation

The splash screen must consistently play on every new page load.

────────────────────────────────
2. PAPER FOLD EFFECT – VISIBILITY ENHANCEMENT
────────────────────────────────

Issue:
- The paper fold effect on the top-right corner of:
  - Navbar
  - Buttons
  - Cards  
is currently too subtle and blends into the background.

Required change:
- Increase the visibility of the fold so it clearly looks like a **real folded paper corner**.
- Improve contrast using:
  - Slight shadow
  - Highlight edge
  - Better separation from the base color

The fold should:
- Be clearly readable as a fold
- Still feel premium and subtle
- Never blend into the background

────────────────────────────────
3. PROCESS SECTION – SHINE ANIMATION FIX
────────────────────────────────

Section:
“A Process Built for Business Excellence”

Issue:
- The shine effect on the connecting line (01 → 05) is not visible or not moving.

Required change:
- Implement a subtle, continuous shine animation that:
  - Moves smoothly from left to right
  - Loops infinitely
  - Runs at a calm, elegant speed
- The effect must always be visible and reinforce progression through the steps.

────────────────────────────────
4. PROJECT NAVIGATION – SCROLL POSITION RESTORATION
────────────────────────────────

Issue:
- When opening a project detail page and navigating back, the user is returned to the hero section.
- The user then has to scroll manually back to the Projects section.

Required change:
- Preserve scroll position when navigating back from a project detail page.
- After returning, the user must land **directly back in the Projects / Our Work section**.
- This should work smoothly without page flicker or reload jumps.

────────────────────────────────
5. ORIGAMI ICON REPOSITIONING (MOBILE & DESKTOP SAFETY)
────────────────────────────────

Overall note:
Current placement is mostly good. Only the following icons need repositioning to avoid overlap and improve spacing. Maintain organic, asymmetrical placement and keep mobile readability as top priority.

────────────────
Hero Section
────────────────
- The icon in the lower right (butterfly icon) overlaps main content in mobile view.
- Move it slightly lower so it does NOT interfere with text.

────────────────
About Us Section
────────────────
- Icon “022-origami” is touching the heading in mobile view.
- Move it slightly upward to create clear spacing from the heading.

────────────────
Our Services Section
────────────────
- Icon “029-trophy” is overlapping / inside one of the service cards.
- Move it completely outside the cards.
- Preferred position: lower left area of the Our Services section.

────────────────
Our Approach Section
────────────────
- Icon “041-origami” overlaps with text.
- Move it to the lower left corner / lower left side of this section.

────────────────
Why BrandQraft? Section
────────────────
- Icon “042-origami” appears directly above the text.
- Move it further away from the text to avoid visual collision.

────────────────
Ready to Start? Section
────────────────
- Icon “046-origami” overlaps with the title in mobile view.
- Move it slightly toward the upper left corner of the section so it sits farther from the heading.

All icons must:
- Never overlap text
- Never disturb reading flow
- Remain visible but subtle
- Behave safely on mobile screens

────────────────────────────────
6. NAVBAR BACKGROUND APPEARANCE ANIMATION
────────────────────────────────

Current behavior:
- Navbar background appears only after scrolling, which is good.
- However, the background appears suddenly and feels static.

Required change:
- Add a **smooth transition animation** when the navbar background appears on scroll.
- The background should:
  - Fade in gently
  - Or slide in subtly
  - Or use a soft blur transition

The effect should feel:
- Premium
- Fluid
- Natural
- Non-distracting

────────────────────────────────
GENERAL NOTES
────────────────────────────────

- Maintain BrandQraft’s premium, crafted, and intentional design language.
- All fixes must be:
  - Fully responsive
  - Mobile-safe
  - Performance-friendly
- Test all changes on:
  - Desktop
  - Tablet
  - Mobile

Final Goal:
Polish interactions, remove friction, and ensure the experience feels seamless, refined, and production-grade.