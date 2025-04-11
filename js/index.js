import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const supabase = createClient(
    "https://vjfiueixqczquxynbdiz.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZqZml1ZWl4cWN6cXV4eW5iZGl6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQyNTg3MjEsImV4cCI6MjA1OTgzNDcyMX0.4EQM6tmnY96wgfuQw5rXNjOGyTwpVxJBPbuAmQNwb6c"
  );

  document.getElementById("login-form").addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;
    const errorBox = document.getElementById("login-error");

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      errorBox.textContent = error.message;
      errorBox.style.display = "block";
    } else {
      console.log("Logged in user:", data.user);
      // Redirect to dashboard or homepage
      window.location.href = "home.html";
    }
  });

 