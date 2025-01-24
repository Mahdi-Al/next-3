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

export default async function page({ params }) {
  //   console.log(data);

  // Await the params to access its properties
  const { id } = await params;
  const photo = data.find((p) => p.id === parseInt(id));
  console.log("____________");
  console.log(id);
  console.log("____________");
  console.log(photo);

  return (
    <>
      {/* <h1>Hello</h1> */}
      <img src={photo.url} alt="" />
    </>
  );
}
