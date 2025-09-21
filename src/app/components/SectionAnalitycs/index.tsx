import Image from "next/image";
import { GridContainer } from "../GridContainer";
import { ItemFeature } from "../SextionFeatures/ItemFeature";
import { PiNewspaperFill } from "react-icons/pi";
import { MdNewReleases } from "react-icons/md";
import { FiAward } from "react-icons/fi";

export function SectionAnalitycs() {
    return (
        <section className="pt-24">
            <GridContainer>
                <div className="text-center mb-16">
                    <span className="inline-block py-1 px-3 bg-brand-50 rounded-2xl text-sm/snug font-medium text-red-700">
                        Features
                    </span>

                    <h2 className="text-4xl font-semibold text-gray-900 mt-4 mb-6">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </h2>

                    <p className="text-xl/normal text-gray-600 max-w-3xl mx-auto">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias cum numquam vel vitae quisquam repudiandae officia unde nesciunt asperiores? Ipsum nostrum, aut, earum quo modi reprehenderit enim sed facilis sapiente officiis dolores in ab! Laborum earum nemo velit dignissimos incidunt animi ex vero. Nam distinctio odio deserunt quod, porro aut?
                    </p>
                </div>

                <div className="relative w-full max-w-[888px] h-[561px] mx-auto mb-24">
                    <Image
                        src="/dashbaord.png"
                        alt="mockup-dashboard-red"
                        width={780}
                        height={550}
                        className="absolute -top-[15px] -right-[18px]"
                    />

                    <Image
                        src="/iphonemochupsemfundo.png"
                        alt="mockup-dashboard-red"
                        width={440}
                        height={450}
                        className="absolute bottom-0 left-0"
                    />
                </div>

                <div className="flex items-start justify-between">
                    <ItemFeature
                        icon={<PiNewspaperFill size={46} color="red" />}
                        title="Os melhores perfumes de 2025"
                        text="Seleção inclui fragrâncias versáteis, amadeiradas, cítricas e florais, com opções para diferentes perfis e ocasiões"
                        isBtn
                    />

                    <ItemFeature
                        icon={<MdNewReleases size={46} color="red" />}
                        title="Os 7 perfumes masculinos mais desejados de 2025 "
                        text="Das fragrâncias clássicas ás mais modernas, conheça os perfumes masculinos que conquistaram especialistas e que foram sucesso durante o ano"
                        isBtn
                    />

                    <ItemFeature
                        icon={<FiAward size={46} color="red" />}
                        title="5 Marcas de nicho que exalam poder"
                        text="Descubra perfumarias que criam fragrâncias exclusivas, de alta qualidade e com aromas duradouros, para você se manter perfumada por mais tempo "
                        isBtn
                    />
                </div>
                <hr className="border-gray-200 mt-24" />
            </GridContainer>
        </section>
    )
}