import React from 'react'
import { Container } from '@mui/material'
import { motion } from 'framer-motion'
import DemosSection from '../components/DemosSection'

export default function Demos() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
      <Container sx={{ py: 4 }} maxWidth="lg">
        <DemosSection />
      </Container>
    </motion.div>
  )
}
