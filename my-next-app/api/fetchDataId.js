import { notFound } from "next/navigation";
async function fetchDataId(endPoint, id) {
  const res = await fetch(`https://dummyjson.com/${endPoint}/${id}`);

  if (!res.ok) {
    return notFound();
  } else if (!res) {
    throw new Error("The page that you want doesn't exist");
  } else if (isNaN(parseInt(id))) {
    throw new Error(
      "The page that you want doesn't exist (you should add number)"
    );
  }
  const products = await res.json();

  return products;
}

export default fetchDataId;
