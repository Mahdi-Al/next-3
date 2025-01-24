"use server";

import { revalidateTag } from "next/cache";

const deleteUsers = async (id) => {
  await fetch(`http://localhost:3000/api/v1/users/${id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });

  //   revalidateTag("customers");
};

const deletePosts = async (id) => {
  await fetch(`http://localhost:3000/api/v1/posts/${id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });

  //   revalidateTag("customers");
};
const deleteRecipes = async (id) => {
  await fetch(`http://localhost:3000/api/v1/Recipes/${id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });

  //   revalidateTag("customers");
};
