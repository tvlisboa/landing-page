import { PiNewspaperFill } from "react-icons/pi";
import { GridContainer } from "../GridContainer";
import { ItemFeature } from "./ItemFeature";

export function SectionFeatures() {
    return (
        <section className="py-24">
            <GridContainer>
                <div className="text-center mb-64">
                    <small className="block">News</small>

                    <h2 className="text-center text-4xl text-gray-950 tracking-tighter-[-0.75px] font-semibold mb-5">
                        Kenzo L’Eau Pure: Throwback Aquatics as a Fresh, Mineralic Combo of Issey & CK</h2>

                    <p className="text-xl/6 text-gray-600 max-w-3xl mx-auto">The kind of minerality that Kenzo’s new unisex L’Eau Pure portrays is a bit out of step with current fashion. It’s not coconutty-beachy, it’s not dusty-talcy and it’s definitely not ambery, at all. The marketing header, showing guys and gals gathering in celebration of shared scenting, throws back to CK One. However, the scent itself, more spicy and sandy than green and sour, takes CK2 as a direct inspiration. </p>
                </div>

                <div className="grid grid-cols-3 gap-x-8 gap-y-16">
                    <ItemFeature
                        icon={<PiNewspaperFill size={46} color="red" />}
                        title="Os melhores perfumes de 2025"
                        text="Seleção inclui fragrâncias versáteis, amadeiradas, cítricas e florais, com opções para diferentes perfis e ocasiões"
                    />

                    <ItemFeature
                        icon={<PiNewspaperFill size={46} color="red" />}
                        title="Os melhores perfumes de 2025"
                        text="Seleção inclui fragrâncias versáteis, amadeiradas, cítricas e florais, com opções para diferentes perfis e ocasiões"
                    />

                    <ItemFeature
                        icon={<PiNewspaperFill size={46} color="red" />}
                        title="Os melhores perfumes de 2025"
                        text="Seleção inclui fragrâncias versáteis, amadeiradas, cítricas e florais, com opções para diferentes perfis e ocasiões"
                    />

                    <ItemFeature
                        icon={<PiNewspaperFill size={46} color="red" />}
                        title="Os melhores perfumes de 2025"
                        text="Seleção inclui fragrâncias versáteis, amadeiradas, cítricas e florais, com opções para diferentes perfis e ocasiões"
                    />

                    <ItemFeature
                        icon={<PiNewspaperFill size={46} color="red" />}
                        title="Os melhores perfumes de 2025"
                        text="Seleção inclui fragrâncias versáteis, amadeiradas, cítricas e florais, com opções para diferentes perfis e ocasiões"
                    />

                    <ItemFeature
                        icon={<PiNewspaperFill size={46} color="red" />}
                        title="Os melhores perfumes de 2025"
                        text="Seleção inclui fragrâncias versáteis, amadeiradas, cítricas e florais, com opções para diferentes perfis e ocasiões"
                    />
                </div>
            </GridContainer>
        </section>
    )
}