const FOODS = [
  { id: 1, name: 'Blanc de poulet', p: 31, l: 3, g: 0, f: 0, cat: 'protein', kcal: 165 },
  { id: 2, name: 'Bœuf maigre', p: 26, l: 7, g: 0, f: 0, cat: 'protein', kcal: 175 },
  { id: 3, name: 'Œuf (1 unité)', p: 6, l: 5, g: 0, f: 0, cat: 'protein', kcal: 78 },
  { id: 4, name: 'Saumon', p: 20, l: 13, g: 0, f: 0, cat: 'protein', kcal: 208 },
  { id: 5, name: 'Thon au naturel', p: 25, l: 1, g: 0, f: 0, cat: 'protein', kcal: 116 },
  { id: 6, name: 'Tofu', p: 8, l: 4, g: 2, f: 1, cat: 'protein', kcal: 76 },
  { id: 7, name: 'Lentilles cuites', p: 9, l: 0, g: 17, f: 5, cat: 'protein', kcal: 116 },
  { id: 8, name: 'Riz complet cuit', p: 3, l: 1, g: 23, f: 1, cat: 'carbs', kcal: 123 },
  { id: 9, name: 'Flocons d\'avoine', p: 13, l: 7, g: 56, f: 10, cat: 'carbs', kcal: 350 },
  { id: 10, name: 'Patate douce', p: 2, l: 0, g: 20, f: 3, cat: 'carbs', kcal: 90 },
  { id: 11, name: 'Quinoa cuit', p: 4, l: 2, g: 21, f: 3, cat: 'carbs', kcal: 120 },
  { id: 12, name: 'Pain complet (1 tranche)', p: 4, l: 1, g: 15, f: 2, cat: 'carbs', kcal: 85 },
  { id: 13, name: 'Pâtes complètes cuites', p: 5, l: 1, g: 25, f: 3, cat: 'carbs', kcal: 131 },
  { id: 14, name: 'Brocoli', p: 3, l: 0, g: 4, f: 3, cat: 'veg', kcal: 34 },
  { id: 15, name: 'Épinards', p: 3, l: 0, g: 1, f: 2, cat: 'veg', kcal: 23 },
  { id: 16, name: 'Tomate', p: 1, l: 0, g: 3, f: 1, cat: 'veg', kcal: 18 },
  { id: 17, name: 'Carotte', p: 1, l: 0, g: 7, f: 2, cat: 'veg', kcal: 41 },
  { id: 18, name: 'Poivron', p: 1, l: 0, g: 5, f: 2, cat: 'veg', kcal: 31 },
  { id: 19, name: 'Banane', p: 1, l: 0, g: 23, f: 3, cat: 'fruit', kcal: 105 },
  { id: 20, name: 'Pomme', p: 0, l: 0, g: 14, f: 2, cat: 'fruit', kcal: 52 },
  { id: 21, name: 'Myrtilles', p: 1, l: 0, g: 14, f: 2, cat: 'fruit', kcal: 57 },
  { id: 22, name: 'Orange', p: 1, l: 0, g: 12, f: 2, cat: 'fruit', kcal: 62 },
  { id: 23, name: 'Huile d\'olive (1c.s)', p: 0, l: 14, g: 0, f: 0, cat: 'fat', kcal: 119 },
  { id: 24, name: 'Avocat (1/2)', p: 2, l: 15, g: 2, f: 7, cat: 'fat', kcal: 161 },
  { id: 25, name: 'Amandes (30g)', p: 6, l: 15, g: 6, f: 4, cat: 'fat', kcal: 174 },
  { id: 26, name: 'Graines de chia (30g)', p: 5, l: 9, g: 12, f: 11, cat: 'fat', kcal: 150 },
  { id: 27, name: 'Yaourt grec', p: 9, l: 5, g: 4, f: 0, cat: 'dairy', kcal: 97 },
  { id: 28, name: 'Lait demi-écrémé (100ml)', p: 3, l: 2, g: 5, f: 0, cat: 'dairy', kcal: 46 },
  { id: 29, name: 'Fromage blanc', p: 8, l: 3, g: 4, f: 0, cat: 'dairy', kcal: 75 },
];

const RECIPES = [
  { id: 1, name: 'Poulet riz brocolis', foods: [{ id: 1, a: 150 }, { id: 8, a: 150 }, { id: 14, a: 100 }], p: 53, l: 7, g: 38, f: 7, kcal: 430 },
  { id: 2, name: 'Porridge aux myrtilles', foods: [{ id: 9, a: 50 }, { id: 27, a: 100 }, { id: 21, a: 50 }], p: 18, l: 9, g: 50, f: 7, kcal: 350 },
  { id: 3, name: 'Salade de lentilles', foods: [{ id: 7, a: 200 }, { id: 16, a: 100 }, { id: 15, a: 50 }, { id: 23, a: 10 }], p: 22, l: 5, g: 39, f: 14, kcal: 350 },
  { id: 4, name: 'Omelette légumes', foods: [{ id: 3, a: 150 }, { id: 17, a: 50 }, { id: 15, a: 30 }, { id: 23, a: 5 }], p: 24, l: 22, g: 4, f: 3, kcal: 330 },
  { id: 5, name: 'Bol de quinoa avocat', foods: [{ id: 11, a: 150 }, { id: 24, a: 75 }, { id: 16, a: 100 }, { id: 18, a: 50 }], p: 12, l: 16, g: 36, f: 10, kcal: 340 },
];

const GOALS = {
  lose:   { label: 'Perte de poids', calPerKg: 28, pPerKg: 2.0, lPct: 0.25, gPct: 0.45 },
  maintain: { label: 'Maintien', calPerKg: 33, pPerKg: 1.6, lPct: 0.25, gPct: 0.50 },
  gain:  { label: 'Prise de muscle', calPerKg: 38, pPerKg: 2.2, lPct: 0.25, gPct: 0.45 },
};

const DEFAULT_WEIGHT = 70;

function getNutState() {
  if (!state.nutrition) {
    state.nutrition = {
      goal: 'maintain',
      weight: DEFAULT_WEIGHT,
      favFoods: [],
      blacklist: [],
      favRecipes: [],
      mealLog: {},
    };
  }
  return state.nutrition;
}

function mealLogToday() {
  const nut = getNutState();
  const key = getTodayKey();
  if (!nut.mealLog[key]) nut.mealLog[key] = { breakfast: [], lunch: [], dinner: [], snack: [] };
  return nut.mealLog[key];
}

function getGoalDef() { return GOALS[getNutState().goal]; }

function dailyTargets() {
  const g = getGoalDef();
  const w = getNutState().weight;
  const cal = Math.round(g.calPerKg * w);
  const p = Math.round(g.pPerKg * w);
  const fatCal = cal * g.lPct;
  const carbCal = cal * g.gPct;
  const l = Math.round(fatCal / 9);
  const carbs = Math.round(carbCal / 4);
  const fiber = Math.round(w * 0.3);
  return { kcal: cal, p, l, g: carbs, f: fiber };
}

const MEAL_LABELS = {
  breakfast: 'Petit-déjeuner',
  lunch: 'Déjeuner',
  dinner: 'Dîner',
  snack: 'Collation',
};
const MEAL_ICONS = { breakfast: '🌅', lunch: '☀️', dinner: '🌙', snack: '🍿' };

function foodById(id) { return FOODS.find(f => f.id === id); }
function recipeById(id) { return RECIPES.find(r => r.id === id); }
function isFav(id) { return getNutState().favFoods.includes(id); }
function isBlacklisted(id) { return getNutState().blacklist.includes(id); }

function calcMealTotal(entries) {
  let kcal = 0, p = 0, l = 0, g = 0, f = 0;
  entries.forEach(e => {
    if (e.recipeId) {
      const r = recipeById(e.recipeId);
      if (r) { kcal += r.kcal; p += r.p; l += r.l; g += r.g; f += r.f; }
    } else if (e.foodId) {
      const food = foodById(e.foodId);
      if (food) {
        const ratio = (e.a || 100) / 100;
        kcal += food.kcal * ratio; p += food.p * ratio; l += food.l * ratio; g += food.g * ratio; f += (food.f || 0) * ratio;
      }
    }
  });
  return { kcal: Math.round(kcal), p: Math.round(p), l: Math.round(l), g: Math.round(g), f: Math.round(f) };
}

function calcDayTotal() {
  const log = mealLogToday();
  let t = { kcal: 0, p: 0, l: 0, g: 0, f: 0 };
  Object.values(log).forEach(entries => {
    const mt = calcMealTotal(entries);
    t.kcal += mt.kcal; t.p += mt.p; t.l += mt.l; t.g += mt.g; t.f += mt.f;
  });
  return t;
}

function getDeficiency() {
  const targets = dailyTargets();
  const totals = calcDayTotal();
  return {
    kcal: Math.max(0, targets.kcal - totals.kcal),
    p: Math.max(0, targets.p - totals.p),
    l: Math.max(0, targets.l - totals.l),
    g: Math.max(0, targets.g - totals.g),
    f: Math.max(0, targets.f - totals.f),
  };
}

function scoreItem(kcal, p, l, g, f, def) {
  const fill = (val, need) => need > 0 ? Math.min(1, val / need) : 0;
  return fill(kcal, def.kcal) + fill(p, def.p) + fill(l, def.l) + fill(g, def.g) + fill(f, def.f);
}

function showSuggestions() {
  const def = getDeficiency();
  const nut = getNutState();
  const maxKcal = Math.round(def.kcal * 1.5); // don't suggest items exceeding 150% of remaining kcal

  const scoredFoods = FOODS
    .filter(f => !nut.blacklist.includes(f.id) && f.kcal <= maxKcal)
    .map(f => ({ ...f, score: scoreItem(f.kcal, f.p, f.l, f.g, f.f || 0, def) }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 8);

  const scoredRecipes = RECIPES
    .filter(r => r.kcal <= maxKcal)
    .map(r => ({ ...r, score: scoreItem(r.kcal, r.p, r.l, r.g, r.f, def) }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 4);

  const overlay = document.getElementById('suggestionsModal');
  const content = document.getElementById('suggestionsContent');
  overlay.classList.remove('hidden');

  const defPct = (val, need) => need > 0 ? Math.round((val / need) * 100) : 0;

  let html = `
    <div class="sug-deficit">
      <strong>Il manque :</strong>
      ${def.kcal > 0 ? `${def.kcal} kcal (${defPct(def.kcal, dailyTargets().kcal)}%)` : '✓ kcal OK'}
      · P: ${def.p > 0 ? `${def.p}g` : '✓'}  L: ${def.l > 0 ? `${def.l}g` : '✓'}  G: ${def.g > 0 ? `${def.g}g` : '✓'}  F: ${def.f > 0 ? `${def.f}g` : '✓'}
    </div>
    <div style="margin:0.5rem 0;font-size:0.8rem;color:var(--text-muted)">Classé par pertinence (comble le plus de besoins)</div>
  `;

  if (scoredFoods.length) {
    html += `<div class="sug-section"><h4>🥦 Aliments suggérés</h4>`;
    scoredFoods.forEach(f => {
      const fills = [];
      if (f.p > 0 && def.p > 0) fills.push(`P: +${f.p}g`);
      if (f.l > 0 && def.l > 0) fills.push(`L: +${f.l}g`);
      if (f.g > 0 && def.g > 0) fills.push(`G: +${f.g}g`);
      if ((f.f || 0) > 0 && def.f > 0) fills.push(`F: +${f.f}g`);
      html += `
        <div class="sug-row">
          <span class="sug-name">${f.name}</span>
          <span class="sug-fills">${fills.join(' · ')} · ${f.kcal} kcal</span>
          <button class="sug-add-btn" data-type="food" data-id="${f.id}">+</button>
        </div>`;
    });
    html += `</div>`;
  }

  if (scoredRecipes.length) {
    html += `<div class="sug-section"><h4>📖 Recettes suggérées</h4>`;
    scoredRecipes.forEach(r => {
      const fills = [];
      if (r.p > 0 && def.p > 0) fills.push(`P: +${r.p}g`);
      if (r.l > 0 && def.l > 0) fills.push(`L: +${r.l}g`);
      if (r.g > 0 && def.g > 0) fills.push(`G: +${r.g}g`);
      if (r.f > 0 && def.f > 0) fills.push(`F: +${r.f}g`);
      html += `
        <div class="sug-row">
          <span class="sug-name">${r.name}</span>
          <span class="sug-fills">${fills.join(' · ')} · ${r.kcal} kcal</span>
          <button class="sug-add-btn" data-type="recipe" data-id="${r.id}">+</button>
        </div>`;
    });
    html += `</div>`;
  }

  if (!scoredFoods.length && !scoredRecipes.length) {
    html += `<p style="text-align:center;color:var(--text-muted);padding:1rem">Tous les objectifs sont déjà atteints ! 🎉</p>`;
  }

  html += `<div class="modal-actions" style="margin-top:1rem"><button id="closeSuggestions" class="btn-secondary">Fermer</button></div>`;
  content.innerHTML = html;

  content.querySelectorAll('.sug-add-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const type = btn.dataset.type;
      const id = parseInt(btn.dataset.id, 10);
      overlay.classList.add('hidden');
      if (type === 'food') showAddFoodModal(id);
      else showAddRecipeModal(id);
    });
  });
  document.getElementById('closeSuggestions').addEventListener('click', () => {
    overlay.classList.add('hidden');
  });
}

function renderNutrition() {
  const nut = getNutState();
  document.getElementById('nutritionGoal').value = nut.goal;

  const targets = dailyTargets();
  const totals = calcDayTotal();
  const calPct = Math.min(100, Math.round((totals.kcal / targets.kcal) * 100));

  document.getElementById('calDisplay').textContent = `${t('calories')} : ${totals.kcal} / ${targets.kcal}`;
  document.getElementById('calProgress').style.width = calPct + '%';
  document.getElementById('macroDisplay').textContent =
    `P: ${totals.p}/${targets.p}g  L: ${totals.l}/${targets.l}g  G: ${totals.g}/${targets.g}g  F: ${totals.f}/${targets.f}g`;

  const suggestBtn = document.getElementById('suggestBtn');
  if (suggestBtn) suggestBtn.style.display = totals.kcal < targets.kcal ? '' : 'none';

  ['breakfast', 'lunch', 'dinner', 'snack'].forEach(m => {
    const container = document.getElementById('meal' + m.charAt(0).toUpperCase() + m.slice(1));
    if (!container) return;
    const entries = mealLogToday()[m];
    container.innerHTML = '';
    entries.forEach((e, idx) => {
      const div = document.createElement('div');
      div.className = 'meal-entry';
      if (e.recipeId) {
        const r = recipeById(e.recipeId);
        if (r) div.innerHTML = `<span class="meal-entry-name">${r.name}</span> <span class="meal-entry-kcal">${r.kcal} kcal</span>`;
      } else if (e.foodId) {
        const food = foodById(e.foodId);
        if (food) {
          const ratio = (e.a || 100) / 100;
          div.innerHTML = `<span class="meal-entry-name">${food.name} (${e.a}g)</span> <span class="meal-entry-kcal">${Math.round(food.kcal * ratio)} kcal</span>`;
        }
      }
      const rm = document.createElement('button');
      rm.className = 'meal-rm-btn';
      rm.textContent = '✕';
      rm.addEventListener('click', () => {
        const log = mealLogToday()[m];
        log.splice(idx, 1);
        saveState();
        renderNutrition();
      });
      div.appendChild(rm);
      container.appendChild(div);
    });
  });

  renderFoodList();
  renderRecipeList();
}

function toggleFav(id) {
  const nut = getNutState();
  const idx = nut.favFoods.indexOf(id);
  if (idx > -1) nut.favFoods.splice(idx, 1);
  else nut.favFoods.push(id);
  saveState();
  renderFoodList();
}
function toggleBlacklist(id) {
  const nut = getNutState();
  const idx = nut.blacklist.indexOf(id);
  if (idx > -1) nut.blacklist.splice(idx, 1);
  else nut.blacklist.push(id);
  saveState();
  renderFoodList();
}

function renderFoodList() {
  const container = document.getElementById('foodList');
  if (!container) return;
  const nut = getNutState();
  const query = (document.getElementById('foodSearch')?.value || '').toLowerCase();
  const filter = document.querySelector('.filter-btn.active')?.dataset.filter || 'all';
  const showFavs = filter === 'fav';

  let foods = [...FOODS];
  if (showFavs) foods = foods.filter(f => nut.favFoods.includes(f.id));
  else foods = foods.filter(f => filter === 'all' || f.cat === filter);
  if (query) foods = foods.filter(f => f.name.toLowerCase().includes(query));
  // Sort: favorites first, then by category
  foods.sort((a, b) => {
    const aFav = nut.favFoods.includes(a.id) ? 0 : 1;
    const bFav = nut.favFoods.includes(b.id) ? 0 : 1;
    if (aFav !== bFav) return aFav - bFav;
    const catOrder = ['protein', 'carbs', 'veg', 'fruit', 'fat', 'dairy'];
    return catOrder.indexOf(a.cat) - catOrder.indexOf(b.cat) || a.name.localeCompare(b.name);
  });

  container.innerHTML = '';
  if (!foods.length) { container.innerHTML = `<p class="empty-msg">${t('noFoods')}</p>`; return; }

  let lastCat = '';
  foods.forEach(f => {
    if (f.cat !== lastCat && !showFavs) {
      lastCat = f.cat;
      const header = document.createElement('div');
      header.className = 'food-cat-header';
      const catNames = { protein: t('proteins'), carbs: t('carbs'), veg: t('vegetables'), fruit: t('fruits'), fat: t('fats'), dairy: t('dairy') };
      header.textContent = catNames[f.cat] || f.cat;
      container.appendChild(header);
    }
    const row = document.createElement('div');
    row.className = 'food-row' + (nut.blacklist.includes(f.id) ? ' blacklisted' : '');
    row.innerHTML = `
      <span class="food-name">${f.name}</span>
      <span class="food-macros">P:${f.p} L:${f.l} G:${f.g} (${f.kcal} kcal)</span>
      <div class="food-actions">
        <button class="fav-btn${nut.favFoods.includes(f.id) ? ' active' : ''}" data-id="${f.id}">★</button>
        <button class="blk-btn${nut.blacklist.includes(f.id) ? ' active' : ''}" data-id="${f.id}">⊗</button>
        <button class="add-food-btn" data-id="${f.id}">+</button>
      </div>
    `;
    row.querySelector('.fav-btn').addEventListener('click', () => toggleFav(f.id));
    row.querySelector('.blk-btn').addEventListener('click', () => toggleBlacklist(f.id));
    row.querySelector('.add-food-btn').addEventListener('click', () => showAddFoodModal(f.id));
    container.appendChild(row);
  });
}

function renderRecipeList() {
  const container = document.getElementById('recipeList');
  if (!container) return;
  container.innerHTML = '';
  RECIPES.forEach(r => {
    const card = document.createElement('div');
    card.className = 'recipe-card';
    const ingredients = r.foods.map(ri => {
      const food = foodById(ri.id);
      return food ? `${food.name} (${ri.a}g)` : '';
    }).join(', ');
    card.innerHTML = `
      <div class="recipe-header">
        <strong>${r.name}</strong>
        <span class="recipe-kcal">${r.kcal} kcal</span>
      </div>
      <div class="recipe-macros">P:${r.p}g  L:${r.l}g  G:${r.g}g  F:${r.f}g</div>
      <div class="recipe-ingredients">${ingredients}</div>
      <div class="recipe-actions">
        <button class="add-recipe-btn" data-id="${r.id}">+ ${t('addRecipe')}</button>
      </div>
    `;
    card.querySelector('.add-recipe-btn').addEventListener('click', () => showAddRecipeModal(r.id));
    container.appendChild(card);
  });
}

let pendingMealType = '';

function showAddFoodModal(foodId) {
  const mealType = pendingMealType || 'lunch';
  const food = foodById(foodId);
  if (!food) return;
  const overlay = document.getElementById('addItemModal');
  const content = document.getElementById('addItemContent');
  overlay.classList.remove('hidden');
  content.innerHTML = `
    <p style="margin-bottom:0.5rem">${t('addTo')} <strong>${food.name}</strong></p>
    <label>${t('quantity')} (${t('g')}) : <input type="number" id="foodAmount" value="100" min="1" style="width:80px;margin-left:0.5rem" /></label>
    <div class="modal-actions" style="margin-top:1rem">
      <button id="confirmAddFood" class="btn-primary">${t('add')}</button>
      <button id="cancelAddItem" class="btn-secondary">${t('cancel')}</button>
    </div>
  `;
  document.getElementById('confirmAddFood').addEventListener('click', () => {
    const a = parseInt(document.getElementById('foodAmount').value, 10) || 100;
    mealLogToday()[mealType].push({ foodId, a });
    saveState();
    overlay.classList.add('hidden');
    pendingMealType = '';
    renderNutrition();
  });
  document.getElementById('cancelAddItem').addEventListener('click', () => {
    overlay.classList.add('hidden');
    pendingMealType = '';
  });
}

function showAddRecipeModal(recipeId) {
  const mealType = pendingMealType || 'lunch';
  const r = recipeById(recipeId);
  if (!r) return;
  const overlay = document.getElementById('addItemModal');
  const content = document.getElementById('addItemContent');
  overlay.classList.remove('hidden');
  content.innerHTML = `
    <p>${t('addTo')} <strong>${r.name}</strong> (${r.kcal} kcal) ?</p>
    <div class="modal-actions" style="margin-top:1rem">
      <button id="confirmAddRecipe" class="btn-primary">${t('add')}</button>
      <button id="cancelAddItem" class="btn-secondary">${t('cancel')}</button>
    </div>
  `;
  document.getElementById('confirmAddRecipe').addEventListener('click', () => {
    mealLogToday()[mealType].push({ recipeId });
    saveState();
    overlay.classList.add('hidden');
    pendingMealType = '';
    renderNutrition();
  });
  document.getElementById('cancelAddItem').addEventListener('click', () => {
    overlay.classList.add('hidden');
    pendingMealType = '';
  });
}

function initNutrition() {
  getNutState();

  document.getElementById('nutritionGoal').addEventListener('change', e => {
    state.nutrition.goal = e.target.value;
    saveState();
    renderNutrition();
  });

  document.getElementById('foodSearch')?.addEventListener('input', () => renderFoodList());

  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderFoodList();
    });
  });

  document.querySelectorAll('.sub-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.sub-tab').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      document.querySelectorAll('.sub-page').forEach(p => p.classList.add('hidden'));
      const page = document.getElementById(btn.dataset.subpage + 'Page');
      if (page) page.classList.remove('hidden');
    });
  });

  document.querySelectorAll('.add-meal-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      pendingMealType = btn.dataset.meal;
      document.querySelector('.sub-tab[data-subpage="foods"]').click();
      document.getElementById('nutritionSubpages').scrollIntoView({ behavior: 'smooth' });
    });
  });

  document.getElementById('suggestBtn')?.addEventListener('click', showSuggestions);
}
