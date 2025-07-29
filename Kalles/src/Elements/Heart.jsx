import React, { useState } from 'react'
import { motion } from 'framer-motion'

export const Heart = ({ index, hoverIndex }) => {


    return (
        <motion.div
            className='tooltip'
            variants={{ rest: { x: -100 }, hover: { x: 0 } }}
            initial="rest"
            animate={hoverIndex === index ? "hover" : "rest"}
            transition={{ duration: 0.3 }}
        >
            <motion.i
                className="bi bi-arrow-left-right hover:text-[#000] inline-block"
                whileHover={{ scale: 1.2 }}
                transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
            ></motion.i>
            <div className="tooltip-text">Compare</div>
        </motion.div>
    )
}
