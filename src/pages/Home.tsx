import React from 'react';
import { Box } from '@mui/material';
import ProfileHeader from '../components/ProfileHeader';
import SkillsSection from '../components/SkillsSection';
import Timeline from '../components/Timeline';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Box sx={{ minHeight: '100vh', py: 4 }}>
        <ProfileHeader />
        <SkillsSection />
        <Timeline />
      </Box>
    </motion.div>
  );
}
