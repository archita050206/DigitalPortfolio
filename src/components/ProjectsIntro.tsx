import React from 'react'
import { motion } from 'framer-motion'

const ProjectsIntro = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className='min-h-[50vh] bg-gradient-to-b from-[#FBBF7A] to-[#BED4BB] flex items-center justify-center'
    >
    <div>ProjectsIntro</div>
    </motion.section>
  )
}

export default ProjectsIntro