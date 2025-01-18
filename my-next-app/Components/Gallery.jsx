import Image from "next/image";
import bridge from "@/public/Image/0_ihTZPO4iffJ8n69_.jpg";
import thunder from "@/public/Image/10df3b1780a0323bba7ac1879a409201.jpg";
import jungle from "@/public/Image/1000_F_540584039_Yj2m4uUkn2h8XoRrfV3fiosFgpfRQmEu.jpg";
import jellyFish from "@/public/Image/ai-generated-ai-generative-sea-underwater-jelly-fish-jellyfish-meduza-graphic-art-photo.jpg";
import beatfullJungle from "@/public/Image/beautiful-weather-with-gradient-sky-r6nxyjof50r7renl.jpg";
import snowy from "@/public/Image/weather-background-jlsy4j9gtkqnba9f.jpg";
export default function Gallery() {
  return (
    <>
      <h1 className="text-center ">Gallery</h1>

      <section className=" w-screen h-2/4 grid grid-cols-3 gap-2 gap-y-2">
        <Image
          src={bridge}
          alt="Description of the image"
          width={300}
          height={300}
        ></Image>
        <Image src={jungle} width={300} height={300}></Image>
        <Image width={300} height={300} src={thunder}></Image>
        <Image src={jellyFish} width={300} height={300}></Image>
        <Image src={beatfullJungle} width={300} height={300}></Image>
        <Image src={snowy} width={300} height={300}></Image>
      </section>
    </>
  );
}
