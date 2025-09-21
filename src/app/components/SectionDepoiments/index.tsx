import Image from "next/image";
import { GridContainer } from "../GridContainer";

export function SectionDepoiments() {
    return (
        <section className="py-24 bg-gray-50 ">
            <GridContainer className="text-center">

                <Image
                    src="/Tom-Ford-logo.png"
                    alt="tom-ford"
                    width={160}
                    height={160}
                    className="mx-auto"
                />
                <h2 className="my-8 text-3xl/tight font-medium text-gray-900 -tracking[-0.96]">O perfume é doce com um toque bem amadeirado, perfeito pra quem não gosta de nada excessivamente doce. a fixação é muito boa.
                </h2>
                <div>
                    <Image
                        src={"/avatarred.webp"}
                        alt=""
                        width={60}
                        height={60}
                        className="mx-auto mb-4"
                    />
                    <span className="block text-lg font-medium text-gray-900">Canide Wu-Tang</span>
                    <small className="block text-base  text-gray-600">New cliente - About Tom Ford Vanille</small>
                </div>
            </GridContainer>
        </section>
    )
}