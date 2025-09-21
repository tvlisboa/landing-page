import Image from "next/image"
import { GridContainer } from "../GridContainer"

export function SectionCompanies() {
    return (
        <section className="py-24">
            <GridContainer>
                <p className="text-center text-gray-600 font-medium mb-8">New Fragances </p>
                <div className="flex items-center justify-between">
                    <Image
                        src="/issey-miyake-logo-png-transparent.png"
                        width={180}
                        height={60}
                        alt="Logo-isseymiake-transparente" />

                    <Image
                        src="/carolina-herrera-logo-0.png"
                        width={169}
                        height={60}
                        alt="Logo-Carolina-Herrera" />

                    <Image
                        src="/Tom-Ford-logo.png"
                        width={180}
                        height={40}
                        alt="Tom-Ford-logo" />

                    <Image
                        src="/Versace-Logosu.png"
                        width={160}
                        height={60}
                        alt="Logo-versace-transparente" />

                    <Image
                        src="/Fahrenheit_logo.png"
                        width={180}
                        height={60}
                        alt="Logo-Fahrenheit_logo.png-transparente" />

                </div>
                <hr className="mt-24 border-gray-200" />
            </GridContainer>
        </section>

    )
}