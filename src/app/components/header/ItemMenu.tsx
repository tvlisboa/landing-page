import Link from "next/link";
import { FiChevronDown } from "react-icons/fi"


interface ItemMenuProps {
    url: string
    title: string
    hasDropDown?: boolean
}

export function ItemMenu({ url, title, hasDropDown }: ItemMenuProps) {

    return (
        <Link href={url} className="flex items-center gap-2 font-semibold text-gray-600 hover:opacity-50 transition-opacity" > {title} {hasDropDown && <FiChevronDown color="#4B5563" size={20} />}</Link >
    )
}