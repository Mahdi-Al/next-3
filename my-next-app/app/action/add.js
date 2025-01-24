"use server";

import { revalidateTag } from "next/cache";

const addPost = (formData) => {
  fetch("http://localhost:3000/api/v1/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });

  //   revalidateTag("customers");
};

const addUser = (formData) => {
  fetch("http://localhost:3000/api/v1/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });

  //   revalidateTag("customers");
};
const addRecipes = (formData) => {
  fetch("http://localhost:3000/api/v1/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });

  //   revalidateTag("customers");
};

export { addRecipes, addUser, addPost };
