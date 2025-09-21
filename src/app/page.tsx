import Image from "next/image";
import { Header } from "./components/header";
import { SectionHero } from "./components/SectionHero";
import { SectionCompanies } from "./components/SectionCompanies";
import { SectionFeatures } from "./components/SextionFeatures";

export default function Home() {
  return (

    <>
      <Header />
      <SectionHero />
      <SectionCompanies />
      <SectionFeatures />
    </>

  );
}
