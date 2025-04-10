import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";
// Create a single supabase client for interacting with your database
const supabase = createClient(
  "https://vjfiueixqczquxynbdiz.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZqZml1ZWl4cWN6cXV4eW5iZGl6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQyNTg3MjEsImV4cCI6MjA1OTgzNDcyMX0.4EQM6tmnY96wgfuQw5rXNjOGyTwpVxJBPbuAmQNwb6c"
);

const form = document.getElementById("todo-form");
const input = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

console.log(window.supabase);

// Step 2: Handle form submission
form.addEventListener("submit", async (e) => {
  e.preventDefault(); // Prevent page reload
  const taskText = input.value.trim();
  if (taskText === "") return;

  // Insert new task into Supabase
  const { data, error } = await supabase
    .from("todos")
    .insert([{ task: taskText, is_complete: false }]);

  if (error) {
    console.error("Error adding task:", error.message);
  } else {
    input.value = ""; // Clear input after submission
    loadTodos(); // Refresh task list
  }
});

// Step 3: Load tasks from Supabase and display them
async function loadTodos() {
  const { data: todos, error } = await supabase
    .from("todos")
    .select("*")
    .order("created_at", { ascending: false });

  // Log the data or error to debug

  taskList.innerHTML = ""; // Clear current task list

  if (todos) {
    todos.forEach((todo) => {
      const div = document.createElement("div");
      div.className = "form-check mb-2 d-flex justify-content-between";
      div.innerHTML = `
          <input class="form-check-input" type="checkbox" ${
            todo.is_complete ? "checked" : ""
          } data-id="${todo.id}">
          <label class="form-check-label">${todo.task}</label>
        `;

      const deleteBtn = document.createElement("button");
      deleteBtn.className = "btn btn-danger btn-sm";
      deleteBtn.textContent = "Delete";
      deleteBtn.addEventListener("click", () => deleteTask(todo.id));


      div.appendChild(deleteBtn);
      taskList.appendChild(div);
    });

  } else if (error) {
    console.error("Error fetching tasks:", error);
  }

  async function deleteTask(taskid) {
    const { data, error } = await supabase
      .from("todos")
      .delete()
      .eq("id", taskid);

    if (error) {
      console.log("Failed to delete Task!:", error.message);
    } else {
      console.log("Task Deleted:", data);
    }
    loadTodos();
  }

  const checkboxes  = taskList.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', async(e)=>{
        const taskId = e.target.dataset.id;
        const isComplete = e.target.checked;
        await updateTaskStatus(taskId, isComplete);
    });
  });

  async function updateTaskStatus(taskId, isComplete){
    const {error} = await supabase
    .from('todos')
    .update({is_complete : isComplete})
    .eq('id', taskId);

    if(error){
        console.log("Error Updating Task status", error);
    }else{
        console.log(`Task ${taskId} marked as ${isComplete ? 'completed': 'incomplete'}`);
    }
  }
}

loadTodos();
