"use client"; // Ensure this is a Client Component
import { useState, useEffect } from "react";
import { useParams } from "next/navigation"; // Import useParams from next/navigation
import fetchDataId from "@/api/fetchDataId"; // Adjust the import based on your file structure
import Loading from "@/app/loading";
export default function Page() {
  const [post, setPost] = useState(null); // Initialize post as null
  const { id } = useParams(); //* my next version is 15.1.3 and useRouter() for me is not stable (when i used it i toke a lot of erore so i used useParams() instead of that)
  console.log(id);

  useEffect(() => {
    const fetchPost = async () => {
      if (id) {
        // Ensure id is available before fetching
        try {
          const result = await fetchDataId("posts", id); // Fetch post data
          setPost(result); // Set the fetched data
          console.log(result);
        } catch (error) {
          console.error("Error fetching post:", error);
        }
      }
    };

    fetchPost();
  }, [id]); // Run when id changes

  return (
    <>
      {post ? ( // Check if post is not null
        <figure key={post.id} className="rounded-xl p-8 dark:bg-slate-800">
          <div className="pt-6 text-center space-y-4">
            <p className="text-lg font-medium">
              {post.firstName || post.name || post.title}
            </p>
            <figcaption className="font-medium">
              <div className="text-sky-500 dark:text-sky-400">
                {post.lastName || post.body || post.instructions[1]}
              </div>
              <div className="text-slate-700 dark:text-slate-500">
                {post.gender || post.cuisine || post.tags[0]}
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
