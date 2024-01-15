import supabase from "./supabase";

export async function getEvents() {
  let { data: events, error } = await supabase.from("events").select("*");
  if (error) throw new Error(error.message);
  //   console.log(events);
  return events;
}
