// HABIT TRACKER - ENHANCED VERSION

/**
 * Migrates old habit format to new format
 * Fixes compatibility issues with old localStorage data
 */
function migrateOldData(habits) {
  return habits.map((habit) => {
    // If habit has old format (done property), convert it
    if (habit.done !== undefined && !habit.completionDates) {
      return {
        id: habit.id || Date.now(),
        name: habit.name,
        category: habit.category || "health",
        createdDate: habit.createdDate || getTodayDate(),
        completionDates: habit.done ? [new Date().toISOString()] : [],
        lastCompletedDate: habit.done ? getTodayDate() : null,
        currentStreak: 0,
      };
    }

    // If habit already has new format, ensure all properties exist
    if (!habit.completionDates) {
      habit.completionDates = [];
    }
    if (!habit.currentStreak) {
      habit.currentStreak = 0;
    }
    if (!habit.category) {
      habit.category = "health";
    }

    return habit;
  });
}

// DATA STRUCTURE
let habits = migrateOldData(JSON.parse(localStorage.getItem("habits")) || []);

// CATEGORY COLORS MAPPING
const categoryColors = {
  health: "category-health",
  fitness: "category-fitness",
  learning: "category-learning",
  productivity: "category-productivity",
  mindfulness: "category-mindfulness",
};

const categoryEmojis = {
  health: "🏥",
  fitness: "💪",
  learning: "📚",
  productivity: "⚡",
  mindfulness: "🧘",
};

// EDIT STATE
let editingIndex = null;

// ========================================
// 💾 STORAGE FUNCTIONS
// ========================================

/**
 * Saves all habits to localStorage
 * localStorage uses string format, so we convert array to JSON
 */
function saveToLocalStorage() {
  localStorage.setItem("habits", JSON.stringify(habits));
}

/**
 * Gets today's date in YYYY-MM-DD format
 * This helps track completion per day
 */
function getTodayDate() {
  const today = new Date();
  return today.toISOString().split("T")[0];
}

/**
 * Initializes a habit object with default values
 * @param {string} name - Habit name
 * @param {string} category - Habit category
 * @returns {object} Habit object
 */
function createHabitObject(name, category) {
  return {
    id: Date.now(), // Unique identifier
    name: name,
    category: category || "health",
    createdDate: getTodayDate(),
    completionDates: [], // Array of dates when completed
    lastCompletedDate: null, // For streak calculation
    currentStreak: 0, // Current consecutive days
  };
}

// ========================================
// 📈 STATISTICS FUNCTIONS
// ========================================

/**
 * Calculates current streak for a habit
 * Checks if habit was completed yesterday and today
 * @param {object} habit - Habit object
 * @returns {number} Current streak count
 */
function calculateStreak(habit) {
  // Safety check: ensure habit and completionDates exist
  if (
    !habit ||
    !habit.completionDates ||
    !Array.isArray(habit.completionDates)
  ) {
    return 0;
  }

  if (habit.completionDates.length === 0) return 0;

  const today = getTodayDate();
  const sortedDates = [...habit.completionDates].sort().reverse();

  let streak = 0;
  let currentDate = new Date(today);

  for (let date of sortedDates) {
    const dateStr = date.split("T")[0]; // Ensure correct format
    const expectedDate = currentDate.toISOString().split("T")[0];

    if (dateStr === expectedDate) {
      streak++;
      currentDate.setDate(currentDate.getDate() - 1);
    } else {
      break;
    }
  }

  return streak;
}

/**
 * Checks if a habit is completed today
 * Safely handles undefined or null completionDates
 */
function isCompletedToday(habit) {
  // Safety check: ensure completionDates exists and is an array
  if (
    !habit ||
    !habit.completionDates ||
    !Array.isArray(habit.completionDates)
  ) {
    return false;
  }

  const today = getTodayDate();
  return habit.completionDates.some((date) => date.split("T")[0] === today);
}

/**
 * Updates statistics display
 */
function updateStats() {
  const totalHabits = habits.length;
  const completedToday = habits.filter((h) => isCompletedToday(h)).length;
  const completionRate =
    totalHabits === 0 ? 0 : Math.round((completedToday / totalHabits) * 100);

  document.getElementById("totalStats").textContent = totalHabits;
  document.getElementById("completedStats").textContent = completedToday;
  document.getElementById("percentStats").textContent = completionRate + "%";
}

// ========================================
// 🎨 RENDER FUNCTIONS
// ========================================

/**
 * Renders all habits to the DOM
 * Creates habit cards with all information
 */
function renderHabits() {
  const habitList = document.getElementById("habitList");
  const emptyState = document.getElementById("emptyState");

  habitList.innerHTML = "";

  // Show empty state if no habits
  if (habits.length === 0) {
    emptyState.style.display = "block";
    updateStats();
    return;
  }

  emptyState.style.display = "none";

  // Render each habit
  habits.forEach((habit, index) => {
    const isCompleted = isCompletedToday(habit);
    const streak = calculateStreak(habit);
    // Safely get completion count, default to 0 if undefined
    const completionPercentage = habit.completionDates?.length || 0;

    // Create habit item
    const habitItem = document.createElement("div");
    habitItem.className = `habit-item ${isCompleted ? "completed" : ""}`;

    habitItem.innerHTML = `
            <!-- Category color indicator -->
            <div class="${categoryColors[habit.category]}"></div>
            
            <!-- Habit content -->
            <div class="habit-content">
                <div class="habit-name">
                    ${categoryEmojis[habit.category]} ${habit.name}
                </div>
                <div class="habit-meta">
                    <div class="streak-info">
                        🔥 <span class="streak-number">${streak}</span> day streak
                    </div>
                    <div>📊 ${completionPercentage} total completions</div>
                </div>
                <div class="progress-bar-container">
                    <div class="progress-bar" style="width: ${Math.min(completionPercentage * 10, 100)}%"></div>
                </div>
            </div>
            
            <!-- Action buttons -->
            <div class="habit-actions">
                <button class="habit-btn btn-toggle" onclick="toggleHabit(${index})" title="Mark as done">
                    ${isCompleted ? "✔️" : "○"}
                </button>
                <button class="habit-btn btn-edit" onclick="openEditModal(${index})" title="Edit habit">
                    ✏️
                </button>
                <button class="habit-btn btn-delete" onclick="deleteHabit(${index})" title="Delete habit">
                    🗑️
                </button>
            </div>
        `;

    habitList.appendChild(habitItem);
  });

  // Update statistics after rendering
  updateStats();
}

// ========================================
// ⚙️ HABIT MANAGEMENT FUNCTIONS
// ========================================

/**
 * Adds a new habit
 * Gets input from user and creates new habit object
 */
function addHabitHandler() {
  const input = document.getElementById("habitInput");
  const categorySelect = document.getElementById("categorySelect");
  const habitName = input.value.trim();

  // Validation: check if input is empty
  if (habitName === "") {
    alert("Please enter a habit name!");
    return;
  }

  // Create new habit object
  const newHabit = createHabitObject(habitName, categorySelect.value);
  habits.push(newHabit);

  // Clear input and re-render
  input.value = "";
  categorySelect.value = "health";
  saveToLocalStorage();
  renderHabits();
}

/**
 * Toggles habit completion for today
 * If completed today, marks as not done
 * If not completed today, marks as done
 */
function toggleHabit(index) {
  const habit = habits[index];
  const today = getTodayDate();

  // Ensure completionDates exists before using it
  if (!habit.completionDates) {
    habit.completionDates = [];
  }

  // Check if already completed today
  if (isCompletedToday(habit)) {
    // Remove today from completion dates
    habit.completionDates = habit.completionDates.filter(
      (date) => date.split("T")[0] !== today,
    );
  } else {
    // Add today to completion dates
    habit.completionDates.push(new Date().toISOString());
  }

  saveToLocalStorage();
  renderHabits();
}

/**
 * Deletes a habit completely
 */
function deleteHabit(index) {
  if (confirm("Are you sure you want to delete this habit?")) {
    habits.splice(index, 1);
    saveToLocalStorage();
    renderHabits();
  }
}

/**
 * Opens edit modal for a habit
 */
function openEditModal(index) {
  editingIndex = index;
  const habit = habits[index];

  document.getElementById("editHabitInput").value = habit.name;
  document.getElementById("editCategorySelect").value = habit.category;
  document.getElementById("editModal").classList.add("active");
}

/**
 * Closes the edit modal
 */
function closeEditModal() {
  document.getElementById("editModal").classList.remove("active");
  editingIndex = null;
}

/**
 * Saves edited habit
 */
function saveEdit() {
  if (editingIndex === null) return;

  const newName = document.getElementById("editHabitInput").value.trim();
  const newCategory = document.getElementById("editCategorySelect").value;

  if (newName === "") {
    alert("Habit name cannot be empty!");
    return;
  }

  habits[editingIndex].name = newName;
  habits[editingIndex].category = newCategory;

  saveToLocalStorage();
  closeEditModal();
  renderHabits();
}

// ========================================
// 🎯 EVENT LISTENERS
// ========================================

document.getElementById("addHabit").addEventListener("click", addHabitHandler);

// Allow pressing Enter to add habit
document.getElementById("habitInput").addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addHabitHandler();
  }
});

// Close modal when clicking outside
document.getElementById("editModal").addEventListener("click", (e) => {
  if (e.target.id === "editModal") {
    closeEditModal();
  }
});

// ========================================
// 🚀 INITIALIZATION
// ========================================

// Render habits when page loads
renderHabits();
