"use client"; // Ensure this is a Client Component
import { useState, useEffect } from "react";
import { useParams } from "next/navigation"; // Import useParams from next/navigation
import fetchDataId from "@/api/fetchDataId"; // Adjust the import based on your file structure
import Loading from "@/app/loading";
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
        <figure key={recipes.id} className="rounded-xl p-8 dark:bg-slate-800">
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
