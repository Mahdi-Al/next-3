"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";
import fetchData from "@/api/fetchData";
import ThemeToggle from "./ThemeToggle";
export default function Header() {
  const [data, setData] = useState([]);
  const handleFetchUsers = async () => {
    try {
      const result = await fetchData("users"); // Fetch users data
      setData(result.users); // Set the fetched data
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  };

  const handleFetchRecipes = async () => {
    try {
      const result = await fetchData("recipes"); // Fetch recipes data
      setData(result.recipes); // Set the fetched data
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  };

  const handleFetchPosts = async () => {
    try {
      const result = await fetchData("posts"); // Fetch posts data
      setData(result.posts); // Set the fetched data
      console.log(result.posts);
    } catch (err) {
      console.log(err); // Set error message if fetching fails
    }
  };
  return (
    <>
      <header className="w-screen mt-1 py-3 flex justify-center">
        <button className="py-1" onClick={handleFetchUsers}>
          Users
        </button>
        <button className="py-1" onClick={handleFetchRecipes}>
          Recipes
        </button>
        <button className="py-1" onClick={handleFetchPosts}>
          Posts
        </button>
        <ThemeToggle />
      </header>
      {/* <Loading /> */}
      {data.length > 0 ? ( // Check if data is not empty
        data.map((obj) => (
          <>
            <figure key={obj.id} className="rounded-xl p-8 dark:bg-slate-800">
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
          </>
        ))
      ) : (
        <h2 className="text-sky-500 text-center dark:text-sky-400">
          Click to the button see data that you want. {console.log(data)}
        </h2> // Message when there's no data
      )}
    </>
  );
}
