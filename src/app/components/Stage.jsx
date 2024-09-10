"use client"

import { useRef, useState } from "react";

import { motion } from "framer-motion";

export default function Stage (props) {

    const [show, setShow] = useState(false);

    const StageBlock = useRef(null);
    const StageBlockLeft = useRef(null);

    const showTextFunction = () => {
        setShow(!show);
    };

    const variants = {
        offscreen: {
          opacity: 0, 
          x: '-10%'
        },
        onscreen: {
          opacity: 1, 
          x: 0,
          transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8
          }
        }
      };

      const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1
        }
      };

    if (window) {
      return (
        <motion.div ref={StageBlock} className={`stage-block ${show === true ? 'align-top' : ''}`}
            variants={variants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: false, amount: 0.8 }}
        >
            <div ref={StageBlockLeft} className={`stage-block_left ${show === true ? 'align-top' : ''}`}>
                <button className="stage-block_number-button">{props.id}</button>
                <div className="stage-block_text-block">
                    { window.innerWidth > 600 &&
                      <h5>{props.name}</h5>
                    }
                    { window.innerWidth < 600 &&
                      <h5>{props.mobileName}</h5>
                    } 
                    {   show === true &&
                        <motion.p variants={variants}
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ once: false, amount: 0.8 }}
                        >{props.text}</motion.p>
                    }
                </div>
            </div>
            {   show === false &&
                <button className="stage-block_arrow-button" onClick={showTextFunction}>{`>`}</button>
            }
            {   show === true &&
                <button className="stage-block_arrow-button" onClick={showTextFunction}>{`v`}</button>
            }
        </motion.div>
    )
    }
}