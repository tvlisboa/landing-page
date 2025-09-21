import Image from "next/image";
import { Header } from "./components/header";
import { SectionHero } from "./components/SectionHero";
import { SectionCompanies } from "./components/SectionCompanies";
import { SectionFeatures } from "./components/SextionFeatures";
import { SectionDepoiments } from "./components/SectionDepoiments";
import { SectionAnalitycs } from "./components/SectionAnalitycs";
import { SectionQuestion } from "./components/SectionQuestions";
import { Question } from "./components/SectionQuestions/Question";

export default function Home() {
  return (

    <>
      <Header />
      <SectionHero />
      <SectionCompanies />
      <SectionFeatures />
      <SectionDepoiments />
      <SectionAnalitycs />
      <SectionQuestion />
    </>

  );
}
