"use server";

import { createClient } from "@/utils/supabase/client";

const supabase = createClient();

export const addEmail = async (email: string) => {
  const { data, error } = await supabase
    .from("waiting_list")
    .insert([{ email }])
    .select("*");

  if (error) throw error;

  return data;
};
