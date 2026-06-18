// Data model with daily history
const STORAGE_KEY = 'habitTrackerData';

let state = {
    level: 1,
    xp: 0,
    xpNext: 100,
    stats: { hp: 0, int: 0, dex: 0 },
    habits: [], // {id, title, category, target, rewardXp}
    history: {} // key: ISO date (YYYY-MM-DD) -> { habitId: completed bool }
};

function loadState() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
        try { state = JSON.parse(saved); } catch (_) { }
    }
}

function saveState() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function getTodayKey() {
    return new Date().toISOString().split('T')[0];
}

let currentDate = getTodayKey(); // ISO string of displayed day

function updateDateLabel() {
    document.getElementById('currentDate').textContent = currentDate;
}


function toggleHabit(id, isChecked) {
    if (!state.history[currentDate]) state.history[currentDate] = {};
    const already = !!state.history[currentDate][id];
    if (isChecked && !already) {
        // mark completed and give reward
        state.history[currentDate][id] = true;
        gainXP(state.habits.find(h => h.id === id).rewardXp);
        applyStat(state.habits.find(h => h.id === id).category, 1);
    } else if (!isChecked && already) {
        // unmark and remove reward
        delete state.history[currentDate][id];
        gainXP(-state.habits.find(h => h.id === id).rewardXp);
        applyStat(state.habits.find(h => h.id === id).category, -1);
    }
    saveState();
    updateUI();
}

function applyStat(category, delta) {
    if (category === 'Health') state.stats.hp += delta;
    else if (category === 'Learning') state.stats.int += delta;
    else if (category === 'Mindfulness') state.stats.dex += delta;
}

function ensureHabitIcons() {
    const defaults = {
        '5x Squats': '💪',
        'Meditate 10min': '🧘',
        'Read 20 pages': '📚'
    };
    state.habits.forEach(h => {
        if (!h.icon && defaults[h.title]) {
            h.icon = defaults[h.title];
        }
    });
    saveState();
}

function addSampleHabits() {
    if (state.habits.length) return;
    state.habits = [
        { id: 1, title: '5x Squats', category: 'Health', target: '5 reps', rewardXp: 10, icon: '💪' },
        { id: 2, title: 'Meditate 10min', category: 'Mindfulness', target: '10 min', rewardXp: 8, icon: '🧘' },
        { id: 3, title: 'Read 20 pages', category: 'Learning', target: '20 pages', rewardXp: 12, icon: '📚' }
    ];
    saveState();
}

function initDateNav() {
    document.getElementById('prevDay').addEventListener('click', () => {
        const d = new Date(currentDate);
        d.setDate(d.getDate() - 1);
        currentDate = d.toISOString().split('T')[0];
        updateUI();
    });
    document.getElementById('nextDay').addEventListener('click', () => {
        const d = new Date(currentDate);
        d.setDate(d.getDate() + 1);
        currentDate = d.toISOString().split('T')[0];
        updateUI();
    });
    // Keyboard navigation
    document.addEventListener('keydown', e => {
        if (e.key === 'ArrowLeft') {
            const d = new Date(currentDate);
            d.setDate(d.getDate() - 1);
            currentDate = d.toISOString().split('T')[0];
            updateUI();
        } else if (e.key === 'ArrowRight') {
            const d = new Date(currentDate);
            d.setDate(d.getDate() + 1);
            currentDate = d.toISOString().split('T')[0];
            updateUI();
        }
    });
}

function updateUI() {
    document.getElementById('levelDisplay').textContent = `Level ${state.level}`;
    document.getElementById('xpDisplay').textContent = `XP: ${state.xp} / ${state.xpNext}`;
    document.getElementById('xpProgress').style.width = `${(state.xp / state.xpNext) * 100}%`;
    document.getElementById('hpStat').textContent = `HP: ${state.stats.hp}`;
    document.getElementById('intStat').textContent = `INT: ${state.stats.int}`;
    document.getElementById('dexStat').textContent = `DEX: ${state.stats.dex}`;
    updateDateLabel();

    const list = document.getElementById('habitList');
    list.innerHTML = '';
    state.habits.forEach(h => {
        const li = document.createElement('li');
        li.className = 'habit-item';
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        const dayRecord = state.history[currentDate] || {};
        checkbox.checked = !!dayRecord[h.id];
        const spanIcon = document.createElement('span');
        spanIcon.className = 'habit-icon';
        spanIcon.textContent = h.icon || '';
        const label = document.createElement('label');
        label.textContent = `${h.title} (${h.target}) (+${h.rewardXp} XP)`;
        // clicking label toggles checkbox and updates state
        label.addEventListener('click', () => {
            checkbox.checked = !checkbox.checked;
            toggleHabit(h.id, checkbox.checked);
        });
        // keep checkbox change handling for keyboard navigation
        checkbox.addEventListener('change', () => toggleHabit(h.id, checkbox.checked));
        li.appendChild(checkbox);
        li.appendChild(spanIcon);
        li.appendChild(label);
        list.appendChild(li);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    loadState();
    addSampleHabits();
    ensureHabitIcons();
    initDateNav();
    updateUI();
    document.getElementById('addHabitBtn').addEventListener('click', () => alert('Add habit UI not implemented yet.'));
});

