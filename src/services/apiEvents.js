import supabase from "./supabase";

export async function getEvents() {
  let { data: events, error } = await supabase.from("events").select("*");
  if (error) throw new Error(error.message);
  //   console.log(events);
  return events;
}

export async function getEvent(id) {
  const { data, error } = await supabase
    .from("events")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error(error);
    throw new Error("Event not found");
  }

  return data;
}
