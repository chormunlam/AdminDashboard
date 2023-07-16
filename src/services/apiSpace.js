import supabase from "./supabase";

export async function getWS() {
  const { data, error } = await supabase.from("workingspace").select("*");

  if (error) {
    console.error();
    throw new Error("Working space can not be loaded");
  }
  return data;
}
