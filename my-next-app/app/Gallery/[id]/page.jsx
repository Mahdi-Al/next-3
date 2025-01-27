// app/Gallery/[id]/page.jsx
"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import bridge from "@/public/Image/0_ihTZPO4iffJ8n69_.jpg";
import thunder from "@/public/Image/10df3b1780a0323bba7ac1879a409201.jpg";
import jungle from "@/public/Image/1000_F_540584039_Yj2m4uUkn2h8XoRrfV3fiosFgpfRQmEu.jpg";
import jellyFish from "@/public/Image/ai-generated-ai-generative-sea-underwater-jelly-fish-jellyfish-meduza-graphic-art-photo.jpg";
import beatfullJungle from "@/public/Image/beautiful-weather-with-gradient-sky-r6nxyjof50r7renl.jpg";
import snowy from "@/public/Image/weather-background-jlsy4j9gtkqnba9f.jpg";

const data = [
  { id: 1, url: bridge },
  { id: 2, url: thunder },
  { id: 3, url: jungle },
  { id: 4, url: jellyFish },
  { id: 5, url: beatfullJungle },
  { id: 6, url: snowy },
];

export default function GalleryItem() {
  const router = useRouter();
  const { query } = router;

  // Check if query is defined and has an id
  if (!query.id) {
    return <p>Loading...</p>; // Show a loading state while waiting for the query
  }

  const id = parseInt(query.id); // Convert the id to a number

  // Find the image based on the ID
  const photo = data.find((item) => item.id === id);

  if (!photo) {
    return <p>Image not found</p>; // Handle case where image is not found
  }

  return (
    <>
      <h1 className="text-center">Gallery Item</h1>
      <Image src={photo.url} alt="" width={600} height={400} />
    </>
  );
}
