import Link from "next/link"

export default function Portfolio () {
    return (
        <li className="portfolio-block swiper-slide">
            <Link href={"#"}><img src="/images/triiiple.png"></img></Link>
            <div className="portfolio-block_text">
                <h5>мессенджер triiiple</h5>
                <div className="portfolio-block_buttons">
                    <div className="portfolio-block_categories">
                        <button>мессенджер</button>
                        <button>web - design</button>
                    </div>
                    <button className="portfolio-block_info">?</button>
                </div>
            </div>
        </li>
    )
}