import { motion } from "framer-motion";
import { useState } from "react";

export default function Service (props) {

    const [ show, setShow ] = useState(false)

    const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1
        },
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8
        }
    };

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
        <motion.div className="service-card"
            variants={item}
        >
            <div className="service-card_top">
                <div className="service-card_top_head">
                    <p>{props.date}</p>
                    <button onClick={() => {setShow(true)}}>i</button>
                </div>
                <h5>{props.name}</h5>
            </div>

            <div className="service-card_bottom">
                <p>{props.text}</p>
                <h5>от <span>{props.price}</span></h5>
            </div>

            {   show === true &&
                <motion.div className="service-card-info_block"
                    variants={variants}
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: false, amount: 0.8 }}
                >
                <button onClick={() => {setShow(false)}}>X</button>
                <p>
                    {props.info}
                </p>
            </motion.div>
            }
        </motion.div>
    )
}