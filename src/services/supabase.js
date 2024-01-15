import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://guhpbznkeeoorjrobehr.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd1aHBiem5rZWVvb3Jqcm9iZWhyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDUzMzg2MzQsImV4cCI6MjAyMDkxNDYzNH0.65DXOtUFfM8QKcgvNav-ByElcPxZFtbhQP_o53yIF1M";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
