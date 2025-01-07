"use client"; // Ensure this is a Client Component
import { useState, useEffect } from "react";
import { useParams } from "next/navigation"; // Import useParams from next/navigation
import fetchDataId from "@/api/fetchDataId"; // Adjust the import based on your file structure
import Loading from "@/app/loading";
export default function Page() {
  const [users, setUsers] = useState(null); // Initialize users as null
  const { id } = useParams(); //* my next version is 15.1.3 and useRouter() for me is not stable (when i used it i toke a lot of erore so i used useParams() instead of that)
  console.log(id);

  useEffect(() => {
    const fetchUsers = async () => {
      if (id) {
        // Ensure id is available before fetching
        try {
          const result = await fetchDataId("users", id); // Fetch users data
          setUsers(result); // Set the fetched data
          console.log(result);
        } catch (error) {
          console.error("Error fetching users:", error);
        }
      }
    };

    fetchUsers();
  }, [id]); // Run when id changes

  return (
    <>
      {users ? ( // Check if users is not null
        <figure key={users.id} className="rounded-xl p-8 dark:bg-slate-800">
          <div className="pt-6 text-center space-y-4">
            <p className="text-lg font-medium">
              {users.firstName || users.name || users.title}
            </p>
            <figcaption className="font-medium">
              <div className="text-sky-500 dark:text-sky-400">
                {users.lastName || users.body || users.instructions[1]}
              </div>
              <div className="text-slate-700 dark:text-slate-500">
                {users.gender || users.cuisine || users.tags[0]}
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
