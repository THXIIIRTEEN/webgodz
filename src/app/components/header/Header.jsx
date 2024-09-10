import { headerHoverLinkOn, headerHoverLinkOout } from "@/app/functions/animation-functions";
import Link from "next/link";
import { useRef, useState } from "react";

export default function Header () {

    const [show, setShow] = useState(false)

    const headerList = useRef(null)

    const showMobileHeader = () => {
        setShow(!show)
    }

    return (
        <header className={`${show === true && "header__show"}`}>
            <div className="header-mobile_top">
                <img src="./images/logo.svg"/>
                <button onClick={() => {showMobileHeader()}} className="header_burger">
                    <img src="/images/burger.svg"/>
                </button>
            </div>
            <ul ref={headerList} className={`${show === true && "header_list__show"}`}>
                <li>
                    <Link onMouseEnter={(event) => headerHoverLinkOn(event)} onMouseLeave={(event) => headerHoverLinkOout(event)} href={'#about_us'}>О нас</Link>
                </li>
                <li>
                    <Link onMouseEnter={(event) => headerHoverLinkOn(event)} onMouseLeave={(event) => headerHoverLinkOout(event)} href={'#service'}>Услуги</Link>
                </li>
                <li>
                    <Link onMouseEnter={(event) => headerHoverLinkOn(event)} onMouseLeave={(event) => headerHoverLinkOout(event)} href={'#stages'}>Этапы работы</Link>
                </li>
                <li>
                    <Link onMouseEnter={(event) => headerHoverLinkOn(event)} onMouseLeave={(event) => headerHoverLinkOout(event)} href={'#portfolio'}>Портфолио</Link>
                </li>
            </ul>
            <button className="header_button"><Link href={"#contacts"}>Контакты</Link></button>
        </header>
    )
}