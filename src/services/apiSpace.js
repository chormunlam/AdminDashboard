import supabase from "./supabase";

export async function getCats() {
  const { data, error } = await supabase.from("cats").select("*");

  if (error) {
    console.error();
    throw new Error("Cats can not be loaded");
  }
  return data;
}

export async function createCat(newCat) {
  const { data, error } = await supabase
    .from("cats")
    .insert([newCat])
    .select();
  if (error) {
    console.error(error);
    throw new Error("co-working space could not be created");
  }

  return data;
}

export async function deleteCat(id) {
  const { data, error } = await supabase
    .from("cats")
    .delete()
    .eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("co-working space could not be deleted");
  }

  return data;
}
