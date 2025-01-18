"use client"; // Ensure this is a Client Component
import React, { useState, useEffect } from "react";
import Loading from "../loading";
import Image from "next/image";
export default function page() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const handleFetchUsers = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/recipes?limit=8`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json(); // Await the JSON response
        setData(result.recipes || []); // Set the fetched data, default to empty array if undefined
        console.log(result.recipes);
      } catch (err) {
        console.log(err);
      }
    };
    handleFetchUsers();
  }, []);
  return (
    <>
      {data.length > 0 ? ( // Check if data is not empty
        data.map((obj) => (
          <React.Fragment key={obj.id}>
            <section className="flex w-screen align-middle justify-center">
              <Image
                src={`${obj.image}`}
                width={300}
                height={300}
                alt="Picture of the author"
              />
            </section>
            <figure className="rounded-xl p-8 ">
              <div className="pt-6 text-center space-y-4">
                <p className="text-lg font-medium">
                  {obj.firstName || obj.name || obj.title}
                </p>

                <figcaption className="font-medium">
                  <div className="text-sky-500 dark:text-sky-400">
                    {obj.lastName || obj.body || obj.instructions[1]}
                  </div>
                  <div className="text-slate-700 dark:text-slate-500">
                    {obj.gender || obj.cuisine || obj.tags[0]}
                  </div>
                </figcaption>
              </div>
            </figure>
          </React.Fragment>
        ))
      ) : (
        <section className="flex align-middle justify-center">
          <Loading />
        </section>
      )}
    </>
  );
}
