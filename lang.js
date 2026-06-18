const LANG_KEY = 'habitTrackerLang';

const translations = {
  en: {
    pageTitle: 'Gamified Habit Tracker',
    appTitle: 'Habit Tracker',
    habits: 'Habits',
    addHabit: '+ Add New Habit',
    addNewHabit: 'Add New Habit',
    editHabit: 'Edit Habit',
    title: 'Title',
    category: 'Category',
    targetPerDay: 'Target per day',
    xpReward: 'XP reward',
    save: 'Save',
    cancel: 'Cancel',
    level: 'Level',
    xp: 'XP',
    hp: 'HP',
    int: 'INT',
    dex: 'DEX',
    deleteConfirm: 'Delete this habit?',
    daily: 'daily',
    xpSuffix: 'XP',
    health: 'Health',
    learning: 'Learning',
    mindfulness: 'Mindfulness',
    profile: 'Profile',
    editHabitAria: 'Edit habit',
    deleteHabitAria: 'Delete habit',
    e_g_5_reps: 'e.g. 5 reps',
    langToggle: 'FR',
    home: 'Home',
    nutrition: 'Nutrition',
    goal: 'Goal',
    maintain: 'Maintain',
    loseWeight: 'Lose weight',
    gainMuscle: 'Gain muscle',
    weight: 'Weight',
    kg: 'kg',
    calories: 'Calories',
    todaysMeals: "Today's meals",
    breakfast: 'Breakfast',
    lunch: 'Lunch',
    dinner: 'Dinner',
    snack: 'Snack',
    add: 'Add',
    foods: 'Foods',
    recipes: 'Recipes',
    all: 'All',
    favorites: 'Favorites',
    proteins: 'Proteins',
    carbs: 'Carbs',
    vegetables: 'Vegetables',
    fruits: 'Fruits',
    fats: 'Fats',
    dairy: 'Dairy',
    searchFood: '🔍 Search a food...',
    addTo: 'Add to',
    quantity: 'Quantity',
    g: 'g',
    noFoods: 'No foods found.',
    ingredients: 'Ingredients',
    addRecipe: 'Add recipe',
  },
  fr: {
    pageTitle: 'Suivi d\'habitudes ludique',
    appTitle: 'Suivi d\'habitudes',
    habits: 'Habitudes',
    addHabit: '+ Ajouter',
    addNewHabit: 'Nouvelle habitude',
    editHabit: 'Modifier',
    title: 'Titre',
    category: 'Catégorie',
    targetPerDay: 'Objectif / jour',
    xpReward: 'XP',
    save: 'Enregistrer',
    cancel: 'Annuler',
    level: 'Niveau',
    xp: 'XP',
    hp: 'PV',
    int: 'INT',
    dex: 'DEX',
    deleteConfirm: 'Supprimer cette habitude\u00A0?',
    daily: 'quotidien',
    xpSuffix: 'XP',
    health: 'Santé',
    learning: 'Apprentissage',
    mindfulness: 'Pleine conscience',
    profile: 'Profil',
    editHabitAria: 'Modifier l\'habitude',
    deleteHabitAria: 'Supprimer l\'habitude',
    e_g_5_reps: 'ex. 5 répétitions',
    langToggle: 'EN',
    home: 'Accueil',
    nutrition: 'Nutrition',
    goal: 'Objectif',
    maintain: 'Maintien',
    loseWeight: 'Perte de poids',
    gainMuscle: 'Prise de muscle',
    weight: 'Poids',
    kg: 'kg',
    calories: 'Calories',
    todaysMeals: 'Repas du jour',
    breakfast: 'Petit-déjeuner',
    lunch: 'Déjeuner',
    dinner: 'Dîner',
    snack: 'Collation',
    add: 'Ajouter',
    foods: 'Aliments',
    recipes: 'Recettes',
    all: 'Tous',
    favorites: 'Favoris',
    proteins: 'Protéines',
    carbs: 'Glucides',
    vegetables: 'Légumes',
    fruits: 'Fruits',
    fats: 'Lipides',
    dairy: 'Produits laitiers',
    searchFood: '🔍 Rechercher un aliment...',
    addTo: 'Ajouter au',
    quantity: 'Quantité',
    g: 'g',
    noFoods: 'Aucun aliment trouvé.',
    ingredients: 'Ingrédients',
    addRecipe: 'Ajouter la recette',
  }
};

let currentLang = localStorage.getItem(LANG_KEY) || 'en';

function t(key) {
  return translations[currentLang]?.[key] ?? translations.en[key] ?? key;
}

function setLang(lang) {
  if (!translations[lang]) return;
  currentLang = lang;
  localStorage.setItem(LANG_KEY, lang);
  document.documentElement.lang = lang;
  applyTranslations();
  document.dispatchEvent(new CustomEvent('langchange'));
}

function applyTranslations() {
  document.title = t('pageTitle');
  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = t(el.dataset.i18n);
  });
  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    el.setAttribute('aria-label', t(el.dataset.i18nAria));
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    el.placeholder = t(el.dataset.i18nPlaceholder);
  });
  const toggle = document.getElementById('langToggle');
  if (toggle) toggle.textContent = t('langToggle');
  const targetInput = document.getElementById('habitTarget');
  if (targetInput) targetInput.placeholder = t('e_g_5_reps');
}

(function init() {
  document.documentElement.lang = currentLang;
  document.addEventListener('DOMContentLoaded', () => {
    applyTranslations();
    document.getElementById('langToggle')?.addEventListener('click', () => {
      setLang(currentLang === 'en' ? 'fr' : 'en');
    });
  });
})();
