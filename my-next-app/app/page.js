import Image from "next/image";
import fetchData from "@/api/fetchData";

import Loading from "./loading";
import Header from "@/Components/Header";
export default function Home() {
  return <Header fallback={<Loading />} />;
}
