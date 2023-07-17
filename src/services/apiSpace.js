import supabase from "./supabase";

export async function getWS() {
  const { data, error } = await supabase.from("workingspace").select("*");

  if (error) {
    console.error();
    throw new Error("Working space can not be loaded");
  }
  return data;
}

export async function deleteWS(id) {
  const { data, error } = await supabase
    .from("workingspace")
    .delete()
    .eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("co-working space could not be deleted");
  }

  return data;
}
