import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

// Create Supabase client
const supabase = createClient(
  "https://vjfiueixqczquxynbdiz.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZqZml1ZWl4cWN6cXV4eW5iZGl6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQyNTg3MjEsImV4cCI6MjA1OTgzNDcyMX0.4EQM6tmnY96wgfuQw5rXNjOGyTwpVxJBPbuAmQNwb6c"
);

window.supabase = supabase;
console.log(window.supabase);

const form = document.getElementById("todo-form");
const input = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

// Handle form submit to add new task
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const taskText = input.value.trim();
  if (!taskText) return;

  const { error } = await supabase.from("todos").insert([{ task: taskText, is_complete: false }]);
  if (error) {
    console.error("Error adding task:", error.message);
  } else {
    input.value = "";
    await loadTodos();
  }
});

// Delete task by id
async function deleteTask(taskId) {
  const { error } = await supabase.from("todos").delete().eq("id", taskId);
  if (error) {
    console.error("Failed to delete task:", error.message);
  } else {
    console.log("Task deleted:", taskId);
    await loadTodos();
  }
}

// Update task completion status
async function updateTaskStatus(taskId, isComplete) {
  const { error } = await supabase.from("todos").update({ is_complete: isComplete }).eq("id", taskId);
  if (error) {
    console.error("Error updating task status:", error.message);
  } else {
    console.log(`Task ${taskId} marked as ${isComplete ? "completed" : "incomplete"}`);
    // Optionally reload tasks if you want UI refreshed
    // await loadTodos();
  }
}

// Load all todos and render in UI
async function loadTodos() {
  const { data: todos, error } = await supabase.from("todos").select("*").order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching tasks:", error);
    return;
  }

  taskList.innerHTML = "";

  todos.forEach((todo) => {
    const div = document.createElement("div");
    div.className = "form-check mb-2 d-flex justify-content-between align-items-center";

    const checkboxId = `todo-checkbox-${todo.id}`;

    div.innerHTML = `
      <input class="form-check-input" type="checkbox" id="${checkboxId}" data-id="${todo.id}" ${todo.is_complete ? "checked" : ""}>
      <label class="form-check-label ms-2 flex-grow-1" for="${checkboxId}">${todo.task}</label>
    `;

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "btn btn-danger btn-sm";
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => deleteTask(todo.id));

    div.appendChild(deleteBtn);
    taskList.appendChild(div);
  });

  // Add event listeners for checkboxes
  const checkboxes = taskList.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", async (e) => {
      const taskId = e.target.dataset.id;
      const isComplete = e.target.checked;
      await updateTaskStatus(taskId, isComplete);
    });
  });
}

// Initial load
loadTodos();
