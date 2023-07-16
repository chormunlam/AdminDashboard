import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://wpoohgrveywjhfvucdhd.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indwb29oZ3J2ZXl3amhmdnVjZGhkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODkzNTkxOTEsImV4cCI6MjAwNDkzNTE5MX0.r3xjrucXhcf4tAJDYNiXG1sAfwhVXezfokzF3eV8Yh8";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
