# Gamified Habit Tracker – Project Overview

## Vision
A lightweight web app that turns daily habit tracking into a fun RPG‑style experience. Users create, edit, and complete habits, earn experience points (XP), level up, gain stats (HP, INT, DEX, etc.), and collect visual badges. The app runs entirely in the browser using **localStorage** for persistence, with a dark theme and responsive design.

## Core Features
- **Habit Management**: create, edit, delete, and daily check‑off of habits.
- **Categories & Plans**: habits belong to categories (e.g., **Health**, **Learning**, **Mindfulness**) and can have progressive targets (e.g., 5 push‑ups → 10).
- **Gamification**:
  - Fixed XP per habit completion.
  - Streak tracking that provides bonus XP.
  - Stats tied to categories (e.g., HP → Gym, INT → Reading).
  - Level system with a progress bar and animated level‑up effect.
  - Badge system displaying earned icons on a profile page.
- **Responsive UI**: desktop‑first design that gracefully adapts to mobile screens.
- **Theme**: dark theme with primary colors **light‑green** and **white** accent.
- **Persistence**: all data stored in `localStorage` (future‑proof for a backend).

## Future Roadmap (high level)
1. **Authentication** – support multiple users.
2. **Backend DB** – replace `localStorage` with a lightweight server.
3. **In‑app purchases** – premium badges, cosmetic themes.
4. **Light Theme** – toggleable UI theme.
5. **Export/Import** – backup habit data.

## Initial File Structure
```
habit-tracker/
│   index.html
│   style.css
│   app.js
│   PROJECT_OVERVIEW.md   ← this document
│   WIREFRAME.md          ← ASCII wireframes for screens
└───assets/
    │   badge‑star.png
    │   badge‑muscle.png
    └───... (icon assets)
```

## Next Steps
- Draft basic HTML layout (header, habit list, profile panel).
- Implement minimal CSS for dark theme + responsiveness.
- Set up JavaScript scaffolding: data models, `localStorage` helpers, UI rendering functions.
- Add **WIREFRAME.md** with ASCII sketches of the main screens (Home, Add/Edit Habit, Profile).

---
*All decisions are made to keep the MVP simple, fun, and addictive while leaving room for future expansion.*