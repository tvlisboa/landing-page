import Image from "next/image";
import { GridContainer } from "../GridContainer";
import { AreaCtas } from "./AreaCtas";
import { TagFeature } from "./TagFeature";

export function SectionHero() {

    return (
        <section className="pt-24">

            <GridContainer>

                <div className="text-center">
                    <TagFeature />
                    <h1 className="text-6xl font-semibold text-gray-900 mt-4 mb-6">Transformando SONHOS em FANTASIAS</h1>
                    <p className="text-xl/6 text-gray-600 max-w-3xl mx-auto mb-12">Somos de Petrópolis - RJ, mas enviamos com carinho para todo o Brasil.</p>

                    <AreaCtas />
                </div>
                <Image
                    src="/ANIME.svg"
                    width={1220}
                    height={480}
                    alt="Banner desenho"
                />
                <hr className="border-gray-200" />

            </GridContainer>
        </section>
    )
}