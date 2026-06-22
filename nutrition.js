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
  if (!state.nutrition.foods) state.nutrition.foods = FOODS.map(f => ({ ...f }));
  if (!state.nutrition.recipes) state.nutrition.recipes = RECIPES.map(r => ({ ...r }));
  return state.nutrition;
}

function getFoods() { return getNutState().foods; }
function getRecipes() { return getNutState().recipes; }
function nextFoodId() { const a = getFoods(); return a.length ? Math.max(...a.map(f => f.id)) + 1 : 1; }
function nextRecipeId() { const a = getRecipes(); return a.length ? Math.max(...a.map(r => r.id)) + 1 : 1; }

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

function foodById(id) { return getFoods().find(f => f.id === id); }
function recipeById(id) { return getRecipes().find(r => r.id === id); }
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

  const scoredFoods = getFoods()
    .filter(f => !nut.blacklist.includes(f.id) && f.kcal <= maxKcal)
    .map(f => ({ ...f, score: scoreItem(f.kcal, f.p, f.l, f.g, f.f || 0, def) }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 8);

  const scoredRecipes = getRecipes()
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
      _fromSuggestions = true;
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

  let foods = [...getFoods()];
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

  // Add new food button
  const addNewFood = document.createElement('button');
  addNewFood.className = 'add-btn';
  addNewFood.innerHTML = '➕ ' + (t('newFood') || 'Nouvel aliment');
  addNewFood.addEventListener('click', () => showFoodForm());
  container.appendChild(addNewFood);

  if (!foods.length) {
    const emptyMsg = document.createElement('p');
    emptyMsg.className = 'empty-msg';
    emptyMsg.textContent = t('noFoods');
    container.appendChild(emptyMsg);
    return;
  }

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
      <span class="food-macros">P:${f.p} L:${f.l} G:${f.g} F:${f.f}g (${f.kcal} kcal)</span>
      <div class="food-actions">
        <button class="fav-btn${nut.favFoods.includes(f.id) ? ' active' : ''}" data-id="${f.id}">★</button>
        <button class="blk-btn${nut.blacklist.includes(f.id) ? ' active' : ''}" data-id="${f.id}">⊗</button>
        <button class="edit-food-btn" data-id="${f.id}">✏️</button>
        <button class="del-food-btn" data-id="${f.id}">❌</button>
        <button class="add-food-btn" data-id="${f.id}">+</button>
      </div>
    `;
    row.querySelector('.fav-btn').addEventListener('click', () => toggleFav(f.id));
    row.querySelector('.blk-btn').addEventListener('click', () => toggleBlacklist(f.id));
    row.querySelector('.edit-food-btn').addEventListener('click', () => showFoodForm(f.id));
    row.querySelector('.del-food-btn').addEventListener('click', () => deleteFood(f.id));
    row.querySelector('.add-food-btn').addEventListener('click', () => showAddFoodModal(f.id));
    container.appendChild(row);
  });
}

function renderRecipeList() {
  const container = document.getElementById('recipeList');
  if (!container) return;
  container.innerHTML = '';

  const addNewRecipe = document.createElement('button');
  addNewRecipe.className = 'add-btn';
  addNewRecipe.innerHTML = '➕ ' + (t('newRecipe') || 'Nouvelle recette');
  addNewRecipe.addEventListener('click', () => showRecipeForm());
  container.appendChild(addNewRecipe);

  getRecipes().forEach(r => {
    const card = document.createElement('div');
    card.className = 'recipe-card';
    const ingredients = r.foods && r.foods.length
      ? r.foods.map(ri => {
          const food = foodById(ri.id);
          return food ? `${food.name} (${ri.a}g)` : '';
        }).join(', ')
      : r.ingredientsText || '';
    card.innerHTML = `
      <div class="recipe-header">
        <strong>${r.name}</strong>
        <span class="recipe-kcal">${r.kcal} kcal</span>
      </div>
      <div class="recipe-macros">P:${r.p}g  L:${r.l}g  G:${r.g}g  F:${r.f}g</div>
      <div class="recipe-ingredients">${ingredients}</div>
      <div class="recipe-actions">
        <button class="edit-recipe-btn" data-id="${r.id}">✏️</button>
        <button class="del-recipe-btn" data-id="${r.id}">❌</button>
        <button class="add-recipe-btn" data-id="${r.id}">+ ${t('addRecipe')}</button>
      </div>
    `;
    card.querySelector('.edit-recipe-btn').addEventListener('click', () => showRecipeForm(r.id));
    card.querySelector('.del-recipe-btn').addEventListener('click', () => deleteRecipe(r.id));
    card.querySelector('.add-recipe-btn').addEventListener('click', () => showAddRecipeModal(r.id));
    container.appendChild(card);
  });
}

let pendingMealType = '';
let _fromSuggestions = false;

const MEAL_OPTIONS = ['breakfast', 'lunch', 'dinner', 'snack'];
const MEAL_LABELS_SHORT = { breakfast: '🌅 Petit-déjeuner', lunch: '☀️ Déjeuner', dinner: '🌙 Dîner', snack: '🍿 Collation' };

function mealSelectHtml(selected) {
  return MEAL_OPTIONS.map(m =>
    `<option value="${m}"${m === selected ? ' selected' : ''}>${MEAL_LABELS_SHORT[m]}</option>`
  ).join('');
}

function showAddFoodModal(foodId) {
  const food = foodById(foodId);
  if (!food) return;
  const overlay = document.getElementById('addItemModal');
  const content = document.getElementById('addItemContent');
  overlay.classList.remove('hidden');
  const preselected = pendingMealType || 'breakfast';
  content.innerHTML = `
    <p style="margin-bottom:0.5rem">${t('addTo')} <strong>${food.name}</strong></p>
    <label style="display:flex;align-items:center;gap:0.5rem;margin-bottom:0.5rem">
      <span>Repas :</span>
      <select id="mealTypeSelect" style="flex:1">${mealSelectHtml(preselected)}</select>
    </label>
    <label style="display:flex;align-items:center;gap:0.5rem">
      <span>${t('quantity')} (${t('g')}) :</span>
      <input type="number" id="foodAmount" value="100" min="1" style="width:80px" />
    </label>
    <div class="modal-actions" style="margin-top:1rem">
      <button id="confirmAddFood" class="btn-primary">${t('add')}</button>
      <button id="cancelAddItem" class="btn-secondary">${t('cancel')}</button>
    </div>
  `;
  document.getElementById('confirmAddFood').addEventListener('click', () => {
    const a = parseInt(document.getElementById('foodAmount').value, 10) || 100;
    const meal = document.getElementById('mealTypeSelect').value;
    mealLogToday()[meal].push({ foodId, a });
    saveState();
    overlay.classList.add('hidden');
    pendingMealType = '';
    renderNutrition();
    if (_fromSuggestions) { _fromSuggestions = false; showSuggestions(); }
  });
  document.getElementById('cancelAddItem').addEventListener('click', () => {
    overlay.classList.add('hidden');
    pendingMealType = '';
    _fromSuggestions = false;
  });
}

function showAddRecipeModal(recipeId) {
  const r = recipeById(recipeId);
  if (!r) return;
  const overlay = document.getElementById('addItemModal');
  const content = document.getElementById('addItemContent');
  overlay.classList.remove('hidden');
  const preselected = pendingMealType || 'breakfast';
  content.innerHTML = `
    <p style="margin-bottom:0.5rem">${t('addTo')} <strong>${r.name}</strong> (${r.kcal} kcal)</p>
    <label style="display:flex;align-items:center;gap:0.5rem;margin-bottom:0.5rem">
      <span>Repas :</span>
      <select id="mealTypeSelect" style="flex:1">${mealSelectHtml(preselected)}</select>
    </label>
    <div class="modal-actions" style="margin-top:1rem">
      <button id="confirmAddRecipe" class="btn-primary">${t('add')}</button>
      <button id="cancelAddItem" class="btn-secondary">${t('cancel')}</button>
    </div>
  `;
  document.getElementById('confirmAddRecipe').addEventListener('click', () => {
    const meal = document.getElementById('mealTypeSelect').value;
    mealLogToday()[meal].push({ recipeId });
    saveState();
    overlay.classList.add('hidden');
    pendingMealType = '';
    renderNutrition();
    if (_fromSuggestions) { _fromSuggestions = false; showSuggestions(); }
  });
  document.getElementById('cancelAddItem').addEventListener('click', () => {
    overlay.classList.add('hidden');
    pendingMealType = '';
    _fromSuggestions = false;
  });
}

function showQuickAddPanel(mealType) {
  const overlay = document.getElementById('addItemModal');
  const content = document.getElementById('addItemContent');
  const modalEl = overlay.querySelector('.modal');
  modalEl.classList.add('modal-wide');
  overlay.classList.remove('hidden');

  const mealName = MEAL_LABELS_SHORT[mealType] || mealType;
  const catNames = { protein: t('proteins'), carbs: t('carbs'), veg: t('vegetables'), fruit: t('fruits'), fat: t('fats'), dairy: t('dairy') };
  let tab = 'foods';
  let qtyFood = null;

  function close() {
    overlay.classList.add('hidden');
    modalEl.classList.remove('modal-wide');
  }

  function summaryHtml() {
    const entries = mealLogToday()[mealType];
    const total = calcMealTotal(entries);
    if (!entries.length) return '';
    const items = entries.map(e => {
      if (e.recipeId) {
        const r = recipeById(e.recipeId);
        return r ? r.name : '';
      }
      const f = foodById(e.foodId);
      return f ? `${f.name} ${e.a}g` : '';
    }).filter(Boolean).join(' · ');
    return `<div class="qadd-summary">
      <div class="qadd-summary-items">${items}</div>
      <div class="qadd-summary-totals">→ ${total.kcal} kcal · P:${total.p}g L:${total.l}g G:${total.g}g F:${total.f}g</div>
    </div>`;
  }

  function render() {
    if (qtyFood) {
      content.innerHTML = `
        <div class="qadd-header">
          <button id="qaddBack" class="qadd-back-btn">← ${t('cancel')}</button>
          <strong>${qtyFood.name}</strong>
          <button id="qaddClose" class="meal-rm-btn">✕</button>
        </div>
        ${summaryHtml()}
        <div class="qadd-qty-form">
          <label>Quantité
            <input type="number" id="qaddAmount" value="100" min="1" />
          </label>
          <div class="qadd-form-actions">
            <button id="qaddConfirmQty" class="btn-primary">${t('add')}</button>
            <button id="qaddCancelQty" class="btn-secondary">${t('cancel')}</button>
          </div>
        </div>
      `;
      const inp = document.getElementById('qaddAmount');
      inp.focus(); inp.select();
      document.getElementById('qaddConfirmQty').addEventListener('click', () => {
        const a = parseInt(inp.value, 10) || 100;
        mealLogToday()[mealType].push({ foodId: qtyFood.id, a });
        saveState();
        renderNutrition();
        qtyFood = null;
        render();
      });
      document.getElementById('qaddCancelQty').addEventListener('click', () => { qtyFood = null; render(); });
      document.getElementById('qaddBack').addEventListener('click', () => { qtyFood = null; render(); });
      document.getElementById('qaddClose').addEventListener('click', close);
      return;
    }

    // --- list view ---
    let listHtml = '';
    let lastCat = '';
    getFoods().forEach(f => {
      if (f.cat !== lastCat) {
        lastCat = f.cat;
        listHtml += `<div class="food-cat-header">${catNames[f.cat] || f.cat}</div>`;
      }
      listHtml += `
        <div class="food-row">
          <span class="food-name">${f.name}</span>
          <span class="food-macros">P:${f.p} L:${f.l} G:${f.g} F:${f.f}g (${f.kcal} kcal)</span>
          <button class="qadd-btn qadd-add-food" data-id="${f.id}">+</button>
        </div>
      `;
    });

    let recipeHtml = '';
    getRecipes().forEach(r => {
      const ingredients = r.foods && r.foods.length
        ? r.foods.map(ri => {
            const food = foodById(ri.id);
            return food ? `${food.name} (${ri.a}g)` : '';
          }).join(', ')
        : r.ingredientsText || '';
      recipeHtml += `
        <div class="recipe-card" style="margin-bottom:0.4rem">
          <div class="recipe-header">
            <strong>${r.name}</strong>
            <span class="recipe-kcal">${r.kcal} kcal</span>
          </div>
          <div class="recipe-macros">P:${r.p}g  L:${r.l}g  G:${r.g}g  F:${r.f}g</div>
          <div class="recipe-ingredients">${ingredients}</div>
          <div style="margin-top:0.3rem">
            <button class="qadd-btn qadd-recipe qadd-add-recipe" data-id="${r.id}">+ ${t('addRecipe')}</button>
          </div>
        </div>
      `;
    });

    content.innerHTML = `
      <div class="qadd-header">
        <strong>Ajouter à : ${mealName}</strong>
        <button id="qaddClose" class="meal-rm-btn">✕</button>
      </div>
      ${summaryHtml()}
      <nav class="sub-tab-nav">
        <button class="sub-tab ${tab === 'foods' ? 'active' : ''}" data-qaddtab="foods">🥦 <span data-i18n="foods">Aliments</span></button>
        <button class="sub-tab ${tab === 'recipes' ? 'active' : ''}" data-qaddtab="recipes">📖 <span data-i18n="recipes">Recettes</span></button>
      </nav>
      <div class="qadd-body">
        <div class="${tab === 'foods' ? '' : 'hidden'}">${listHtml}</div>
        <div class="${tab === 'recipes' ? '' : 'hidden'}">${recipeHtml}</div>
      </div>
    `;

    // food add buttons
    content.querySelectorAll('.qadd-add-food').forEach(btn => {
      btn.addEventListener('click', () => {
        qtyFood = getFoods().find(f => f.id === parseInt(btn.dataset.id, 10));
        if (qtyFood) render();
      });
    });

    // recipe add buttons
    content.querySelectorAll('.qadd-add-recipe').forEach(btn => {
      btn.addEventListener('click', () => {
        const r = recipeById(parseInt(btn.dataset.id, 10));
        if (r) {
          mealLogToday()[mealType].push({ recipeId: r.id });
          saveState();
          renderNutrition();
          render();
        }
      });
    });

    // tab switching
    content.querySelectorAll('.sub-tab').forEach(btn => {
      btn.addEventListener('click', () => {
        tab = btn.dataset.qaddtab;
        render();
      });
    });

    document.getElementById('qaddClose').addEventListener('click', close);
  }

  render();
}

// ── Food / Recipe CRUD ────────────────────────────────────────

function showFoodForm(foodId) {
  const overlay = document.getElementById('addItemModal');
  const content = document.getElementById('addItemContent');
  overlay.classList.remove('hidden');

  const food = foodId ? foodById(foodId) : null;
  const isEdit = !!food;
  const catOpts = ['protein', 'carbs', 'veg', 'fruit', 'fat', 'dairy'];
  const catLabels = { protein: t('proteins'), carbs: t('carbs'), veg: t('vegetables'), fruit: t('fruits'), fat: t('fats'), dairy: t('dairy') };

  content.innerHTML = `
    <div class="qadd-header">
      <strong>${isEdit ? 'Modifier' : 'Nouvel'} aliment</strong>
      <button id="qaddClose" class="meal-rm-btn">✕</button>
    </div>
    <div style="padding:0.5rem 0">
      <label style="display:block;margin-bottom:0.5rem;font-size:0.85rem;color:var(--text-muted)">
        Nom
        <input type="text" id="ffName" value="${isEdit ? food.name : ''}" style="display:block;width:100%;margin-top:0.2rem;padding:0.3rem;background:var(--bg-color);border:1px solid #444;color:var(--accent-color);border-radius:3px" />
      </label>
      <label style="display:block;margin-bottom:0.5rem;font-size:0.85rem;color:var(--text-muted)">
        Catégorie
        <select id="ffCat" style="display:block;width:100%;margin-top:0.2rem;padding:0.3rem;background:var(--bg-color);border:1px solid #444;color:var(--accent-color);border-radius:3px">
          ${catOpts.map(c => `<option value="${c}"${isEdit && food.cat === c ? ' selected' : ''}>${catLabels[c]}</option>`).join('')}
        </select>
      </label>
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr 1fr 1fr;gap:0.3rem;margin-bottom:0.5rem">
        ${['p','l','g','f','kcal'].map(k => `
          <label style="font-size:0.8rem;color:var(--text-muted);display:flex;flex-direction:column">
            ${k.toUpperCase()}
            <input type="number" id="ff${k}" value="${isEdit ? food[k] : 0}" min="0" style="margin-top:0.15rem;padding:0.25rem;background:var(--bg-color);border:1px solid #444;color:var(--accent-color);border-radius:3px" />
          </label>
        `).join('')}
      </div>
      <div class="qadd-form-actions">
        <button id="ffSave" class="btn-primary">${t('save')}</button>
        <button id="ffCancel" class="btn-secondary">${t('cancel')}</button>
      </div>
    </div>
  `;

  document.getElementById('ffSave').addEventListener('click', () => {
    const name = document.getElementById('ffName').value.trim();
    if (!name) return;
    const entry = {
      id: isEdit ? food.id : nextFoodId(),
      name,
      cat: document.getElementById('ffCat').value,
      p: parseInt(document.getElementById('ffp').value, 10) || 0,
      l: parseInt(document.getElementById('ffl').value, 10) || 0,
      g: parseInt(document.getElementById('ffg').value, 10) || 0,
      f: parseInt(document.getElementById('fff').value, 10) || 0,
      kcal: parseInt(document.getElementById('ffkcal').value, 10) || 0,
    };
    const foods = getFoods();
    if (isEdit) {
      const idx = foods.findIndex(x => x.id === food.id);
      if (idx > -1) foods[idx] = entry;
    } else {
      foods.push(entry);
    }
    saveState();
    overlay.classList.add('hidden');
    renderFoodList();
  });

  document.getElementById('ffCancel').addEventListener('click', () => overlay.classList.add('hidden'));
  document.getElementById('qaddClose').addEventListener('click', () => overlay.classList.add('hidden'));
}

function deleteFood(id) {
  if (!confirm('Supprimer cet aliment ?')) return;
  const foods = getFoods();
  const idx = foods.findIndex(f => f.id === id);
  if (idx > -1) foods.splice(idx, 1);
  // remove from meals too
  const nut = getNutState();
  Object.keys(nut.mealLog).forEach(date => {
    Object.keys(nut.mealLog[date]).forEach(meal => {
      nut.mealLog[date][meal] = nut.mealLog[date][meal].filter(e => e.foodId !== id);
    });
  });
  saveState();
  renderFoodList();
}

function showRecipeForm(recipeId) {
  const overlay = document.getElementById('addItemModal');
  const content = document.getElementById('addItemContent');
  overlay.classList.remove('hidden');

  const recipe = recipeId ? recipeById(recipeId) : null;
  const isEdit = !!recipe;

  content.innerHTML = `
    <div class="qadd-header">
      <strong>${isEdit ? 'Modifier' : 'Nouvelle'} recette</strong>
      <button id="qaddClose" class="meal-rm-btn">✕</button>
    </div>
    <div style="padding:0.5rem 0">
      <label style="display:block;margin-bottom:0.5rem;font-size:0.85rem;color:var(--text-muted)">
        Nom
        <input type="text" id="rfName" value="${isEdit ? recipe.name : ''}" style="display:block;width:100%;margin-top:0.2rem;padding:0.3rem;background:var(--bg-color);border:1px solid #444;color:var(--accent-color);border-radius:3px" />
      </label>
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr 1fr 1fr;gap:0.3rem;margin-bottom:0.5rem">
        ${['p','l','g','f','kcal'].map(k => `
          <label style="font-size:0.8rem;color:var(--text-muted);display:flex;flex-direction:column">
            ${k.toUpperCase()}
            <input type="number" id="rf${k}" value="${isEdit ? recipe[k] : 0}" min="0" style="margin-top:0.15rem;padding:0.25rem;background:var(--bg-color);border:1px solid #444;color:var(--accent-color);border-radius:3px" />
          </label>
        `).join('')}
      </div>
      <label style="display:block;margin-bottom:0.5rem;font-size:0.85rem;color:var(--text-muted)">
        Ingrédients
        <textarea id="rfIngredients" rows="3" style="display:block;width:100%;margin-top:0.2rem;padding:0.3rem;background:var(--bg-color);border:1px solid #444;color:var(--accent-color);border-radius:3px;resize:vertical" placeholder="Poulet 150g, riz 200g, brocoli 100g...">${isEdit ? (recipe.ingredientsText || '') : ''}</textarea>
      </label>
      <div class="qadd-form-actions">
        <button id="rfSave" class="btn-primary">${t('save')}</button>
        <button id="rfCancel" class="btn-secondary">${t('cancel')}</button>
      </div>
    </div>
  `;

  document.getElementById('rfSave').addEventListener('click', () => {
    const name = document.getElementById('rfName').value.trim();
    if (!name) return;
    const entry = {
      id: isEdit ? recipe.id : nextRecipeId(),
      name,
      p: parseInt(document.getElementById('rfp').value, 10) || 0,
      l: parseInt(document.getElementById('rfl').value, 10) || 0,
      g: parseInt(document.getElementById('rfg').value, 10) || 0,
      f: parseInt(document.getElementById('rff').value, 10) || 0,
      kcal: parseInt(document.getElementById('rfkcal').value, 10) || 0,
      ingredientsText: document.getElementById('rfIngredients').value.trim(),
    };
    const recipes = getRecipes();
    if (isEdit) {
      // keep foods array if it existed
      const old = recipes.find(x => x.id === recipe.id);
      if (old && old.foods) entry.foods = [...old.foods];
      const idx = recipes.findIndex(x => x.id === recipe.id);
      if (idx > -1) recipes[idx] = entry;
    } else {
      recipes.push(entry);
    }
    saveState();
    overlay.classList.add('hidden');
    renderRecipeList();
  });

  document.getElementById('rfCancel').addEventListener('click', () => overlay.classList.add('hidden'));
  document.getElementById('qaddClose').addEventListener('click', () => overlay.classList.add('hidden'));
}

function deleteRecipe(id) {
  if (!confirm('Supprimer cette recette ?')) return;
  const recipes = getRecipes();
  const idx = recipes.findIndex(r => r.id === id);
  if (idx > -1) recipes.splice(idx, 1);
  // remove from meals
  const nut = getNutState();
  Object.keys(nut.mealLog).forEach(date => {
    Object.keys(nut.mealLog[date]).forEach(meal => {
      nut.mealLog[date][meal] = nut.mealLog[date][meal].filter(e => e.recipeId !== id);
    });
  });
  saveState();
  renderRecipeList();
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

  // Quick add from meals page
  document.querySelectorAll('.add-meal-btn').forEach(btn => {
    btn.addEventListener('click', () => showQuickAddPanel(btn.dataset.meal));
  });

  // Overlay click to close + cleanup modal-wide
  document.getElementById('addItemModal').addEventListener('click', function (e) {
    if (e.target === this) {
      const modal = this.querySelector('.modal');
      if (modal) modal.classList.remove('modal-wide');
      this.classList.add('hidden');
    }
  });

  document.getElementById('suggestBtn')?.addEventListener('click', showSuggestions);

  // Close shortcut: Overlay click on suggestions modal
  document.getElementById('suggestionsModal').addEventListener('click', function (e) {
    if (e.target === this) this.classList.add('hidden');
  });
}
