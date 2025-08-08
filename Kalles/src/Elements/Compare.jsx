import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom';

export const Compare = ({ index, hoverIndex }) => {
    const [compareClicked, setCompareClicked] = useState(false);



    return (
        <motion.div
            className='tooltip'
            variants={{ rest: { x: -100 }, hover: { x: 0 } }}
            initial="rest"
            animate={hoverIndex === index ? "hover" : "rest"}
            transition={{ duration: 0.3 }}
        >
            {compareClicked ?
                <Link to='/comparePage'>
                    <motion.i onClick={() => setCompareClicked(!compareClicked)}
                        className="bi bi-check2-circle hover:text-[#000] inline-block"
                        whileHover={{ scale: 1.2 }}
                        transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
                    ></motion.i> </Link> : <motion.i
                        onClick={() => setCompareClicked(!compareClicked)}
                        className="bi bi-arrow-left-right hover:text-[#000] inline-block"
                        whileHover={{ scale: 1.2 }}
                        transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
                    ></motion.i>}

            <div className="tooltip-text">Compare</div>
        </motion.div>
    )
}
