import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const supabase = createClient(
  "https://vjfiueixqczquxynbdiz.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZqZml1ZWl4cWN6cXV4eW5iZGl6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQyNTg3MjEsImV4cCI6MjA1OTgzNDcyMX0.4EQM6tmnY96wgfuQw5rXNjOGyTwpVxJBPbuAmQNwb6c"
);

document.getElementById("signup-form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;
  const errorBox = document.getElementById("signup-error");

  const { data, error } = await supabase.auth.signUp({
    email,
    password
  });

  if (error) {
    errorBox.textContent = error.message;
    errorBox.style.display = "block";
  } else {
    console.log("Signed up:", data);
    window.location.href = "index.html"; // Redirect to login after signup
  }
});

document.getElementById("logout-btn").addEventListener("click", async () => {
  await supabase.auth.signOut();
  window.location.href = "index.html";
});
