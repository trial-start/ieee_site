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

export async function createEvent(event) {
  //1. create a random image name and the image path
  const imageName = `${Math.random()}-${event.image.name}`.replaceAll("/", "");

  console.log(imageName);

  const imagePath = `https://guhpbznkeeoorjrobehr.supabase.co/storage/v1/object/public/event-images/${imageName}`;

  const { data, error } = await supabase
    .from("events")
    .insert([{ ...event, image: imagePath }])
    .select();

  if (error) {
    console.error(error);
    throw new Error("Event cannot be created");
  }

  //2 upload image into storage

  const { error: StorageError } = await supabase.storage
    .from("event-images")
    .upload(imageName, event.image);

  // 3.delete for unsuccesful uploads
  if (StorageError) {
    // await supabase.from("events").delete().eq("id", data.id);
    console.error(StorageError);
    throw new Error("Cabin image could not be uploaded");
  }

  return data;
}

export async function deleteEvent(id) {
  const { data, error } = await supabase.from("events").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Events could not be deleted");
  }
  // console.log(data, error);

  return data;
}
