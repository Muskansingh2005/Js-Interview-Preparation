# 🔍 JavaScript Code Patterns & Explanations

## 1️⃣ Data Structure Pattern

### Problem

How do we organize data for a habit?

### Solution: Object with Properties

```javascript
const habit = {
  id: 1712973600000,
  name: "Exercise",
  category: "fitness",
  createdDate: "2024-04-13",
  completionDates: [],
  lastCompletedDate: null,
  currentStreak: 0,
};
```

**Why this structure?**

- **id**: Unique identifier (helps find specific habits)
- **name**: What to display to user
- **category**: Visual organization
- **createdDate**: When user started
- **completionDates**: Array to track each completion
- **lastCompletedDate**: Quick access to most recent
- **currentStreak**: Pre-calculated for performance

### How to Access

```javascript
habit.name; // "Exercise"
habit.category; // "fitness"
habit["name"]; // Alternative syntax, same result
```

---

## 2️⃣ Array Management Pattern

### Problem

How do we store multiple habits?

### Solution: Array of Objects

```javascript
let habits = [
  { id: 1, name: "Exercise", category: "fitness" },
  { id: 2, name: "Meditate", category: "mindfulness" },
  { id: 3, name: "Read", category: "learning" },
];
```

### Common Array Operations

#### Adding Item

```javascript
habits.push({
  id: Date.now(),
  name: "New habit",
  category: "health",
});
// Array now has 4 items
```

#### Finding Item by Index

```javascript
const habit = habits[0]; // First item
const lastHabit = habits[habits.length - 1]; // Last item
```

#### Removing Item

```javascript
habits.splice(1, 1); // Remove 1 item at index 1
// Before: [habit1, habit2, habit3]
// After:  [habit1, habit3]
```

#### Filtering Array

```javascript
const healthHabits = habits.filter((h) => h.category === "health");
// Returns new array with only health habits
```

#### Mapping Array

```javascript
const habitNames = habits.map((h) => h.name);
// Returns: ["Exercise", "Meditate", "Read"]
```

---

## 3️⃣ DateTime Pattern

### Problem

How do we track what day habits were completed?

### Solution: Date Objects & ISO Format

```javascript
// Create current date/time in ISO format
const now = new Date().toISOString();
// Result: "2024-04-13T15:30:45.123Z"

// Get just the date part (YYYY-MM-DD)
const today = new Date().toISOString().split("T")[0];
// Result: "2024-04-13"
```

### Why ISO Format?

```javascript
// ❌ Bad - Hard to compare dates
const date = "13/4/2024"; // Ambiguous format

// ✅ Good - Sortable and standardized
const date = "2024-04-13"; // Easy to sort and compare
```

### Comparing Dates

```javascript
const today = "2024-04-13";
const completionDate = "2024-04-13";

if (completionDate.split("T")[0] === today) {
  console.log("Completed today!");
}
```

---

## 4️⃣ LocalStorage Pattern

### Problem

How do we save habits so they persist after refresh?

### Solution: Browser's Built-in Storage

```javascript
// SAVING DATA
const data = { name: "John", age: 25 };
const jsonString = JSON.stringify(data);
localStorage.setItem("user", jsonString);

// LOADING DATA
const jsonString = localStorage.getItem("user");
const data = JSON.parse(jsonString);
console.log(data.name); // "John"
```

### Why Convert to JSON?

```javascript
// LocalStorage only stores strings
localStorage.setItem("habits", habits); // ❌ Fails!
// [object Object] is stored instead

localStorage.setItem("habits", JSON.stringify(habits)); // ✅ Works!
// "[{...}, {...}]" is stored correctly
```

### Best Practice Template

```javascript
function saveHabits() {
  localStorage.setItem("habits", JSON.stringify(habits));
}

function loadHabits() {
  const saved = localStorage.getItem("habits");
  habits = saved ? JSON.parse(saved) : [];
}

// Call on page load
loadHabits();
```

---

## 5️⃣ Event Listener Pattern

### Problem

How do we respond to user actions?

### Solution: Event Listeners

```javascript
// Click event
document.getElementById("addBtn").addEventListener("click", () => {
  console.log("Button clicked!");
});

// Keyboard event
document.getElementById("input").addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    console.log("User pressed Enter!");
  }
});

// Modal click outside
document.getElementById("modal").addEventListener("click", (e) => {
  if (e.target.id === "modal") {
    closeModal(); // Only if clicking modal background, not content
  }
});
```

### Event Object (e)

```javascript
addEventListener("click", (e) => {
  e.target; // The element that was clicked
  e.key; // The key pressed (keyboard events)
  e.preventDefault(); // Prevent default action
  e.stopPropagation(); // Prevent bubbling up
});
```

---

## 6️⃣ Conditional Rendering Pattern

### Problem

How do we show/hide elements based on data?

### Solution: CSS Classes & Conditional Logic

```javascript
// HTML with conditional attribute
let isCompleted = true;
<div class="item ${isCompleted ? 'completed' : ''}">

// CSS for that class
.completed {
    text-decoration: line-through;
    color: gray;
}
```

### Template Literal with Conditions

```javascript
const html = `
    <div class="habit-card">
        <h3>${habit.name}</h3>
        ${isCompleted ? `<span class="done">✔️ Done</span>` : ""}
        ${habit.category === "fitness" ? "<span>💪 Strong work!</span>" : ""}
    </div>
`;
```

---

## 7️⃣ State Management Pattern

### Problem

How do we track which habit is being edited?

### Solution: Global State Variable

```javascript
let editingIndex = null; // Global variable

function openEditModal(index) {
  editingIndex = index; // Remember which one we're editing
  // Show modal...
}

function saveEdit() {
  if (editingIndex === null) return; // Safety check
  habits[editingIndex].name = newName; // Update it
  editingIndex = null; // Clear state
}
```

**Why global?** Functions need to communicate (which habit are we editing?)

---

## 8️⃣ Array Filter & Find Pattern

### Problem

How do we find specific items in an array?

### Solution: Array Filter

```javascript
// Find all items matching condition
const completedToday = habits.filter((habit) => isCompletedToday(habit));

// Find single item matching condition
const exerciseHabit = habits.find((h) => h.name === "Exercise");

// Check if ANY item matches
const hasHealthHabits = habits.some((h) => h.category === "health");

// Check if ALL items match
const allCompleted = habits.every((h) => isCompletedToday(h));
```

### Arrow Function Shorthand

```javascript
// Long form
habits.filter(function (habit) {
  return habit.category === "fitness";
});

// Short form (arrow function)
habits.filter((habit) => habit.category === "fitness");

// Multiple statements
habits.filter((habit) => {
  console.log(habit.name);
  return habit.category === "fitness";
});
```

---

## 9️⃣ DOM Manipulation Pattern

### Problem

How do we update the HTML programmatically?

### Solution: Select, Create, Update, Append

```javascript
// STEP 1: Select container
const container = document.getElementById("habitList");

// STEP 2: Clear old content
container.innerHTML = "";

// STEP 3: Create new elements
habits.forEach((habit, index) => {
  const element = document.createElement("div");

  // STEP 4: Set content
  element.innerHTML = `
        <h3>${habit.name}</h3>
        <button onclick="deleteHabit(${index})">Delete</button>
    `;

  // STEP 5: Add to DOM
  container.appendChild(element);
});
```

### Different Selection Methods

```javascript
// By ID (fastest, most specific)
document.getElementById("myId");

// By class (multiple elements)
document.getElementsByClassName("myClass");
document.querySelectorAll(".myClass");

// By tag name
document.getElementsByTagName("button");
document.querySelectorAll("button");

// Advanced selector (like CSS)
document.querySelector("div.myClass > button");
document.querySelectorAll("div.myClass > button");
```

---

## 🔟 Type Coercion & Equality

### Problem

Why does `"5" == 5` return true in JavaScript?

### Solution: Understand Type Coercion

```javascript
// Loose equality (==) - Converts types
"5" == 5; // true (converts string to number)
null == undefined; // true (special case)

// Strict equality (===) - No conversion
"5" === 5; // false (different types)
null === undefined; // false (different)
```

**Best Practice:** Always use `===`!

```javascript
// ❌ Avoid
if (habit.done == true) {
}

// ✅ Preferred
if (habit.done === true) {
}
if (habit.done) {
} // Even simpler
```

---

## 1️⃣1️⃣ Ternary Operator Pattern

### Problem

How do we write if/else in one line?

### Solution: Ternary Operator

```javascript
condition ? valueIfTrue : valueIfFalse;

// Example
const message = isCompleted ? "Done!" : "Not done";

// Nested (avoid if possible - hard to read)
const status = isCompleted ? "Done" : isMissed ? "Missed" : "Pending";
```

### Using in HTML

```javascript
const html = `
    <button class="${isCompleted ? "btn-done" : "btn-pending"}">
        ${isCompleted ? "✔️ Done" : "○ Pending"}
    </button>
`;
```

---

## 1️⃣2️⃣ Spread Operator Pattern

### Problem

How do we copy an array without modifying original?

### Solution: Spread Operator

```javascript
const original = [1, 2, 3];

// ❌ This copies reference, not values!
const copy = original;
copy[0] = 999;
console.log(original); // [999, 2, 3] - original changed!

// ✅ This makes true copy
const realCopy = [...original];
realCopy[0] = 999;
console.log(original); // [1, 2, 3] - original unchanged!
```

### Using with Arrays

```javascript
// Combine arrays
const arr1 = [1, 2];
const arr2 = [3, 4];
const combined = [...arr1, ...arr2]; // [1, 2, 3, 4]

// Add item to copy
const newArray = [...habits, newHabit];

// Remove item without mutating
const filtered = habits.filter((h, i) => i !== indexToRemove);
```

---

## 1️⃣3️⃣ Destructuring Pattern

### Problem

How do we extract values from objects cleanly?

### Solution: Destructuring

```javascript
const habit = {
  name: "Exercise",
  category: "fitness",
  streak: 5,
};

// ❌ Old way
const name = habit.name;
const category = habit.category;
const streak = habit.streak;

// ✅ New way
const { name, category, streak } = habit;
```

### With Function Parameters

```javascript
// Object destructuring in parameters
function displayHabit({ name, category, streak }) {
  console.log(`${name} (${category}) - Streak: ${streak}`);
}

displayHabit(habit);

// Array destructuring
const [first, second, third] = habits;
```

---

## 1️⃣4️⃣ Try-Catch Pattern

### Problem

How do we handle errors gracefully?

### Solution: Try-Catch Block

```javascript
try {
  // Code that might fail
  const parsed = JSON.parse("invalid json");
} catch (error) {
  // Handle error
  console.error("Failed to parse JSON:", error.message);
}

// With finally (runs regardless)
try {
  // Some code
} catch (error) {
  console.error(error);
} finally {
  // Always runs (cleanup)
  closeModal();
}
```

### Example in Project

```javascript
function parseHabits() {
  try {
    const saved = localStorage.getItem("habits");
    return JSON.parse(saved) || [];
  } catch (e) {
    console.error("Failed to load habits:", e);
    return [];
  }
}
```

---

## 1️⃣5️⃣ Callback Function Pattern

### Problem

How do we run code when something happens?

### Solution: Pass Function as Parameter

```javascript
// Array.forEach expects a callback
habits.forEach((habit, index) => {
  console.log(`${index}: ${habit.name}`);
});

// Array.map expects a callback that returns value
const names = habits.map((habit) => habit.name);

// Array.filter expects a callback that returns boolean
const completed = habits.filter((h) => isCompletedToday(h));

// addEventListener expects a callback
button.addEventListener("click", () => {
  console.log("Clicked!");
});
```

### Creating Your Own Function with Callback

```javascript
function procesHabits(callback) {
  habits.forEach((habit) => {
    callback(habit); // Call the function passed in
  });
}

// Use it
processHabits((habit) => {
  console.log("Processing:", habit.name);
});
```

---

## 📋 Quick Reference

| Pattern          | Use Case              | Example                                             |
| ---------------- | --------------------- | --------------------------------------------------- |
| Object           | Store related data    | `{ name: "...", category: "..." }`                  |
| Array            | Store multiple items  | `[habit1, habit2, habit3]`                          |
| Array.filter()   | Find matching items   | `habits.filter(h => h.done)`                        |
| Array.map()      | Transform items       | `habits.map(h => h.name)`                           |
| LocalStorage     | Persist data          | `localStorage.setItem("key", JSON.stringify(data))` |
| addEventListener | Respond to events     | `btn.addEventListener("click", fn)`                 |
| Template Literal | Build HTML strings    | `` `<div>${variable}</div>` ``                      |
| Ternary          | Short if/else         | `condition ? true : false`                          |
| Spread           | Copy arrays           | `[...original]`                                     |
| Arrow Function   | Short function syntax | `() => {}`                                          |

---

## 🎯 Master These, Master JavaScript!

Once you understand these patterns, you can build:

- Todo apps
- Shopping carts
- Note taking apps
- Chat applications
- Games
- And much more!

These patterns are used in professional JavaScript every day. Practice them! 🚀
