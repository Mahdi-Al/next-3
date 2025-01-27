"use client";
import Image from "next/image";
import Link from "next/link";
import bridge from "@/public/Image/0_ihTZPO4iffJ8n69_.jpg";
import thunder from "@/public/Image/10df3b1780a0323bba7ac1879a409201.jpg";
import jungle from "@/public/Image/1000_F_540584039_Yj2m4uUkn2h8XoRrfV3fiosFgpfRQmEu.jpg";
import jellyFish from "@/public/Image/ai-generated-ai-generative-sea-underwater-jelly-fish-jellyfish-meduza-graphic-art-photo.jpg";
import beatfullJungle from "@/public/Image/beautiful-weather-with-gradient-sky-r6nxyjof50r7renl.jpg";
import snowy from "@/public/Image/weather-background-jlsy4j9gtkqnba9f.jpg";
const data = [
  {
    id: 1,
    url: bridge,
  },
  {
    id: 2,
    url: thunder,
  },
  {
    id: 3,
    url: jungle,
  },
  {
    id: 4,
    url: jellyFish,
  },
  {
    id: 5,
    url: beatfullJungle,
  },
  {
    id: 6,
    url: snowy,
  },
];
export default function Gallery() {
  return (
    <>
      <h1 className="text-center ">Gallery</h1>

      <section className=" w-screen h-2/4 grid grid-cols-3 gap-2 gap-y-2">
        <Link href={`Gallery/${data[0].id}`}>
          {" "}
          <Image
            src={bridge}
            alt="Description of the image"
            width={300}
            height={300}
          ></Image>
        </Link>
        <Link href={`Gallery/${data[1].id}`}>
          <Image src={jungle} width={300} height={300} alt="something"></Image>
        </Link>
        <Link href={`Gallery/${data[2].id}`}>
          <Image width={300} height={300} src={thunder} alt="something"></Image>
        </Link>
        <Link href={`Gallery/${data[3].id}`}>
          <Image
            src={jellyFish}
            width={300}
            height={300}
            alt="something"
          ></Image>
        </Link>
        <Link href={`Gallery/${data[4].id}`}>
          <Image
            src={beatfullJungle}
            width={300}
            height={300}
            alt="something"
          ></Image>
        </Link>
        <Link href={`Gallery/${data[5].id}`}>
          <Image src={snowy} width={300} height={300} alt="something"></Image>
        </Link>
      </section>
    </>
  );
}
