import Image from "next/image";
import { GridContainer } from "../GridContainer";
import Link from "next/link";


import { FiChevronDown } from 'react-icons/fi'
import { ItemMenu } from "./ItemMenu";
import { title } from "process";


const menuItens = [
    {
        url: "/",
        title: "Home",
        dropdown: false
    },
    {
        url: "/products",
        title: "Products",
        dropdown: true
    },
    {
        url: "/news",
        title: "News",
        dropdown: true
    },
    {
        url: "/aboutus",
        title: "About Us",
        dropdown: false
    }
]

export function Header() {

    return (
        <header className="sticky top-0 w-full h-[80px] z-50 bg-white border-b border-b-gray-100 flex items-center">

            <GridContainer className="flex items-center justify-between">

                <div className="flex items-center gap-10">
                    <Image
                        src={"/logo.png"}
                        width={46}
                        height={46}
                        alt="Logo-Fragantica"
                    />

                    <nav className="flex items-center gap-8">
                        {
                            menuItens.map(({ url, title, dropdown }, index) =>
                            (<ItemMenu
                                key={index}
                                url={url}
                                title={title}
                                hasDropDown={dropdown}
                            />))
                        }
                    </nav>
                </div>
                <div>
                    <Image
                        src="/avataruser.png"
                        width={32}
                        height={32}
                        alt="Avatar"
                    />
                </div>
            </GridContainer>
        </header>
    )
}