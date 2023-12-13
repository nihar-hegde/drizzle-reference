"use server";

import { TFormSchema } from "@/components/forms/InputForm";
import { db } from "@/database";
import { todos } from "@/database/schema";

export async function createTodo(params: TFormSchema) {
  try {
    const { title } = params;

    await db.insert(todos).values({ title: title });
  } catch (error) {
    console.log("error while submitting to db", error);
  }
}
