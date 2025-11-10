import React from 'react';
import { Box, IconButton, Tooltip } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LanguageIcon from '@mui/icons-material/Language';
import WorkIcon from '@mui/icons-material/Work';

type Props = {
  github?: string;
  linkedin?: string;
  website?: string;
  malt?: string;
};

export default function SocialLinks({ github, linkedin, website, malt }: Props) {
  return (
    <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
      {github && (
        <Tooltip title="GitHub">
          <IconButton aria-label="github" component="a" href={github} target="_blank" rel="noreferrer">
            <GitHubIcon />
          </IconButton>
        </Tooltip>
      )}

      {linkedin && (
        <Tooltip title="LinkedIn">
          <IconButton aria-label="linkedin" component="a" href={linkedin} target="_blank" rel="noreferrer">
            <LinkedInIcon />
          </IconButton>
        </Tooltip>
      )}

      {malt && (
        <Tooltip title="Malt">
          <IconButton aria-label="malt" component="a" href={malt} target="_blank" rel="noreferrer">
            <WorkIcon />
          </IconButton>
        </Tooltip>
      )}

      {website && (
        <Tooltip title="Website / CV">
          <IconButton aria-label="website" component="a" href={website} target="_blank" rel="noreferrer">
            <LanguageIcon />
          </IconButton>
        </Tooltip>
      )}
    </Box>
  );
}
