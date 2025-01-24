import Image from "next/image";
// import { data } from "../page";
// console.log(data);
// import { Image } from "next/image";
import bridge from "@/public/Image/0_ihTZPO4iffJ8n69_.jpg";
import thunder from "@/public/Image/10df3b1780a0323bba7ac1879a409201.jpg";
import jungle from "@/public/Image/1000_F_540584039_Yj2m4uUkn2h8XoRrfV3fiosFgpfRQmEu.jpg";
import jellyFish from "@/public/Image/ai-generated-ai-generative-sea-underwater-jelly-fish-jellyfish-meduza-graphic-art-photo.jpg";
import beatfullJungle from "@/public/Image/beautiful-weather-with-gradient-sky-r6nxyjof50r7renl.jpg";
import snowy from "@/public/Image/weather-background-jlsy4j9gtkqnba9f.jpg";
import Modal from "@/Components/Modal";
const data = [
  {
    id: 1,
    url: bridge,
  },
  {
    id: 2,
    url: jungle,
  },
  {
    id: 3,
    url: thunder,
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
export default function page({ params }) {
  return (
    <div>
      page{params.id}
      {console.log(data[params.id - 1])}
      <Image
        src={data[params.id - 1].url.src}
        alt="Description of the image"
        width={300}
        height={300}
      ></Image>
    </div>
    //    <Modal>
    //  <Photo photo={photo}>

    //      </Modal>
  );
}
