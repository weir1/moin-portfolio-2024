'use client';

import { Drawer, List, ListItem, IconButton, Box, useTheme } from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';
import Link from 'next/link';
import { effects } from '@/lib/theme';
import GradientButton from '../ui/GradientButton';

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

const menuItems = [
  { text: 'Services', href: '/services' },
  { text: 'Portfolio', href: '/portfolio' },
  { text: 'Contact', href: '/contact' },
];

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  const theme = useTheme();

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          width: '100%',
          maxWidth: 300,
          ...effects.glassEffect(0.95)(theme),
        },
      }}
    >
      <Box sx={{ p: 2 }}>
        <IconButton
          onClick={onClose}
          sx={{
            mb: 2,
            ...effects.hoverTransition,
          }}
        >
          <CloseIcon />
        </IconButton>

        <List>
          {menuItems.map(({ text, href }) => (
            <ListItem key={text} disablePadding sx={{ mb: 1 }}>
              <GradientButton
                component={Link}
                href={href}
                variant="outlined"
                fullWidth
                onClick={onClose}
              >
                {text}
              </GradientButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
} 