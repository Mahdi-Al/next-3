"use client";
import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import fetchData from "@/api/fetchData";
import DynamicComponent from "next/dynamic";
import { useRouter } from "next/navigation";
export default function Header() {
  const [data, setData] = useState([]);
  const router = useRouter();

  const handleClickPosts = () => {
    router.push("/posts");
  };
  const handleClickRecipes = () => {
    router.push("/recipes");
  };
  const handleClickUsers = () => {
    router.push("/users");
  };

  return (
    <>
      <header className="w-screen mt-1 py-3 flex justify-center">
        <button className="py-1" onClick={handleClickUsers}>
          Users
        </button>
        <button className="py-1" onClick={handleClickRecipes}>
          Recipes
        </button>
        <button className="py-1" onClick={handleClickPosts}>
          Posts
        </button>
      </header>
    </>
  );
}
