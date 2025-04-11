import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const supabase = createClient(
    "https://vjfiueixqczquxynbdiz.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZqZml1ZWl4cWN6cXV4eW5iZGl6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQyNTg3MjEsImV4cCI6MjA1OTgzNDcyMX0.4EQM6tmnY96wgfuQw5rXNjOGyTwpVxJBPbuAmQNwb6c"
  );


document.getElementById("logout-btn").addEventListener("click", async () => {
    await supabase.auth.signOut();
    window.location.href = "index.html";
  });