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
                    <h1 className="text-6xl font-semibold text-gray-900 mt-4 mb-6">Gucci Gorgeous Orchid</h1>

                    <p className="text-xl/6 text-gray-600 max-w-3xl mx-auto mb-12">Elena’s review of Gucci Gorgeous Orchid finds the same gelato quality I do but, for her, the ozonics play a “mechanical role, spreading the molecules around the corners.</p>

                    <AreaCtas />
                </div>
                <Image
                    src="/LOGOGRANDEGUCCI.jpg"
                    width={1260}
                    height={440}
                    alt="Gucci Flora Parfum Image"
                />
                <hr className="border-gray-200" />

            </GridContainer>
        </section>
    )
}