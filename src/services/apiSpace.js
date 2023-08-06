import supabase, { supabaseUrl } from "./supabase";

export async function getCats() {
  const { data, error } = await supabase.from("cats").select("*");

  if (error) {
    console.error();
    throw new Error("Cats can not be loaded");
  }
  return data;
}

export async function createEditCat(newCat, id) {
  //upload imag is optional too
  const hasImagePath= newCat.image?.startsWith?.(supabaseUrl);
  const imageName = `${Math.random()}-${newCat.image.name}`.replaceAll("/", "");
  const imagePath = hasImagePath ? newCat.image : `${supabaseUrl}/storage/v1/object/public/cats/${imageName}`;

  //https://wpoohgrveywjhfvucdhd.supabase.co/
  //storage/v1/object/public/cats/
  //edgar-nKC772R_qog-unsplash.jpg?t=2023-08-01T01%3A29%3A16.182Z
  //https://wpoohgrveywjhfvucdhd.supabase.co/storage/v1/object/public/cats/hugo-wai-vvtjAwXaPKI-unsplash.jpg
  
  //1. create or edit
  let query=supabase.from('cats');

  //create , bc no id,
  if(!id) query= query.insert([{ ...newCat, image: imagePath }]);
  
  //edit, no array?? buged : remember to upate the query!! query=query.xxx
  if(id) query=query.update({...newCat, image: imagePath })
  .eq('id', id);

  const {data, error}=await query.select().single();
  if (error) {
    console.error(error);
    throw new Error("cat can't be created");
  }
  //upload image
  if(hasImagePath) return data;
  
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
