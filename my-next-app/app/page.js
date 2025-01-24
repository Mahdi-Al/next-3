import Image from "next/image";
import fetchData from "@/api/fetchData";
import dynamic from "next/dynamic";
import Loading from "./loading";
import Header from "@/Components/Header";
// import Gallery from "@/app/Gallery/page";
const DynamicComponent = dynamic(() => import("@/Components/Header"), {
  loading: () => <Loading />,
});
export const metadata = {
  title: "Home Page",
  description: "Welcome to the home page of our website.",
};
export default function Home({ Component, pageProps }) {
  return (
    <>
      <DynamicComponent />
      {/* <Gallery /> */}
    </>
  );
}
