import supabase, { supabaseUrl } from "./supabase";

export async function getCats() {
  const { data, error } = await supabase.from("cats").select("*");

  if (error) {
    console.error();
    throw new Error("Cats can not be loaded");
  }
  return data;
}

export async function createCat(newCat) {
  const imageName = `${Math.random()}-${newCat.image.name}`.replaceAll("/", "");
  const imagePath = `${supabaseUrl}/storage/v1/object/public/cats/${imageName}`;

  //https://wpoohgrveywjhfvucdhd.supabase.co/
  //storage/v1/object/public/cats/
  //edgar-nKC772R_qog-unsplash.jpg?t=2023-08-01T01%3A29%3A16.182Z
  //1. create  cat
  const { data, error } = await supabase
    .from("cats")
    .insert([{ ...newCat, image: imagePath }])
    .select();
  if (error) {
    console.error(error);
    throw new Error("co-working space could not be created");
  }
  //upload image

  const { error: bucketError } = await supabase.storage
    .from("cats")
    .upload(imageName, newCat.image);
  //3. delete the cat if ther was an error upoading image
  if (bucketError) {
    await supabase.from("cats").delete().eq("id", data.id);
    console.error(bucketError);
    throw new Error("new cat not created bc image error");
  }
  return data;
}

export async function deleteCat(id) {
  const { data, error } = await supabase.from("cats").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("co-working space could not be deleted");
  }

  return data;
}
