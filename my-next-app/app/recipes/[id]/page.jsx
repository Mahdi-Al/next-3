"use client"; // Ensure this is a Client Component
import { useState, useEffect } from "react";
import { useParams } from "next/navigation"; // Import useParams from next/navigation
import fetchDataId from "@/api/fetchDataId"; // Adjust the import based on your file structure
import Loading from "@/app/loading";

import Image from "next/image";
async function generateMetadata({ params }) {
  const { id } = params;
  const recipesData = await fetchDataId("recipes", id);
  return {
    title: `recipe  Profile: ${recipesData.name}`,
    description: `Profile details for recipe ${recipesData.lastName}.`,
  };
}
export default function Page() {
  const [recipes, setRecipes] = useState(null); // Initialize recipes as null
  const { id } = useParams(); //* my next version is 15.1.3 and useRouter() for me is not stable (when i used it i toke a lot of erore so i used useParams() instead of that)
  console.log(id);

  useEffect(() => {
    const fetchrecipes = async () => {
      if (id) {
        // Ensure id is available before fetching
        try {
          const result = await fetchDataId("recipes", id); // Fetch recipes data
          setRecipes(result); // Set the fetched data
          console.log(result);
        } catch (error) {
          console.error("Error fetching recipes:", error);
        }
      }
    };

    fetchrecipes();
  }, [id]); // Run when id changes

  return (
    <>
      {recipes ? ( // Check if recipes is not null
        <figure key={recipes.id} className="rounded-xl p-8 ">
          <Image src={recipes.image} width={100} height={100}></Image> //!have
          // the below errore when I want to use Image
          {/* * ! Error: Invalid src prop (https://cdn.dummyjson.com/recipe-images/5.webp) on `next/image`, hostname "cdn.dummyjson.com" is not configured under images in your `next.config.js`
See more info: https://nextjs.org/docs/messages/next-image-unconfigured-host */}
          <div className="pt-6 text-center space-y-4">
            <p className="text-lg font-medium">
              {recipes.firstName || recipes.name || recipes.title}
            </p>
            <figcaption className="font-medium">
              <div className="text-sky-500 dark:text-sky-400">
                {recipes.lastName || recipes.body || recipes.instructions[1]}
              </div>
              <div className="text-slate-700 dark:text-slate-500">
                {recipes.gender || recipes.cuisine || recipes.tags[0]}
              </div>
            </figcaption>
          </div>
        </figure>
      ) : (
        <section className=" h-screen  flex align-middle justify-center ">
          <Loading />
        </section>
      )}
    </>
  );
}
