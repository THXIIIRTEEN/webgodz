import { motion } from "framer-motion";
import Link from 'next/link';
import { useState } from 'react';

export default function PortfolioBlock (port) {

    const [ show, setShow ] = useState(false)

    const variants = {
        offscreen: {
          opacity: 0, 
          y: '10%'
        },
        onscreen: {
          opacity: 1, 
          y: 0,
          transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8
          }
        }
      };

    return (
        <>
            {   show === false &&
                            <Link href={port.link}>
                                <img src={port.picture}></img>
                            </Link>
                        }
                        <div className="portfolio-block_text">
                            <h5>{port.name}</h5>
                            <div className="portfolio-block_buttons">
                                <div className="portfolio-block_categories">
                                    <button>{port.firstCategory}</button>
                                    <button>{port.secondCategory}</button>
                                </div>
                                <button className="portfolio-block_info" onClick={() => {setShow(true)}}>?</button>
                            </div>
                        </div>
                        {   show === true &&
                        <motion.div className="service-card-info_block portfolio-info"
                            variants={variants}
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ once: false, amount: 0.8 }}
                        >
                        <button onClick={() => {setShow(false)}}>X</button>
                        <p>
                            {port.description}
                        </p>
                        </motion.div>
                        }
        </>
    )
}