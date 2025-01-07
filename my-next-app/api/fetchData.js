// /pages/products/index.js
import { notFound } from "next/navigation";
async function fetchData(endPoint) {
  const res = await fetch(`https://dummyjson.com/${endPoint}?limit=8`);

  if (!res.ok) {
    return notFound();
  } else if (!res) {
    throw new Error("The data dat you want doesn't exist");
  }
  const products = await res.json();

  return products;
}

export default fetchData;
