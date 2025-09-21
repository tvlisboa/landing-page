import { PiNewspaperFill } from "react-icons/pi";
import { MdNewReleases } from "react-icons/md"
import { FiAward } from "react-icons/fi"
import { CgDanger } from "react-icons/cg";
import { BiWorld } from "react-icons/bi";
import { CiSquareMore } from "react-icons/ci";
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
                        icon={<MdNewReleases size={46} color="red" />}
                        title="Os 7 perfumes masculinos mais desejados de 2025 "
                        text="Das fragrâncias clássicas ás mais modernas, conheça os perfumes masculinos que conquistaram especialistas e que foram sucesso durante o ano"
                    />

                    <ItemFeature
                        icon={<FiAward size={46} color="red" />}
                        title="5 Marcas de nicho que exalam poder"
                        text="Descubra perfumarias que criam fragrâncias exclusivas, de alta qualidade e com aromas duradouros, para você se manter perfumada por mais tempo "
                    />

                    <ItemFeature
                        icon={<CgDanger size={46} color="red" />}
                        title="O Boticário amplia linha de cuidados capilares de Dr. Botica para cabelos lisos"
                        text="A novidade possui tecnologia Tira Nó, em que 9 em cada 10 cuidadores afirmam que o cabelo da criança ficou mais fácil de pentear"
                    />

                    <ItemFeature
                        icon={<BiWorld size={46} color="red" />}
                        title="Natura deixou para trás os planos de conquistar o mundo"
                        text="Brasileira chegou a ser a quarta maior empresa do mundo no setor de beleza."
                    />

                    <ItemFeature
                        icon={<CiSquareMore size={46} color="red" />}
                        title="Quem cria os perfumes que você usa?"
                        text="Neste 21 de setembro, Verônica Kato, perfumista exclusiva da Natura, revela os bastidores da profissão rara, além de tendências de perfume para a primavera "
                    />
                </div>
            </GridContainer>
        </section>
    )
}