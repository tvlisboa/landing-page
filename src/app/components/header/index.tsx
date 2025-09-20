import Image from "next/image";
import { GridContainer } from "../GridContainer";
import Link from "next/link";
import { FiChevronDown } from 'react-icons/fi'

export function Header() {
    return (
        <header>
            <GridContainer>
                <div>
                    <Image
                        src={"/lobo-biomob.svg"}
                        width={26}
                        height={26}
                        alt="Logo-Biomob"
                    />
                    <nav>
                        <Link href="/">Home</Link>
                        <Link href="/">Products <FiChevronDown size={10} /></Link>
                        <Link href="/">Resources<FiChevronDown size={10} /></Link>
                        <Link href="/">Pricing</Link>
                    </nav>
                </div>
            </GridContainer>
        </header>
    )
}