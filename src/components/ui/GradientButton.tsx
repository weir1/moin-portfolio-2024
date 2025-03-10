'use client';

import { Button, ButtonProps } from '@mui/material';
import { effects } from '@/lib/theme';

type GradientButtonProps = ButtonProps & {
  variant?: 'contained' | 'outlined';
};

export default function GradientButton({ 
  children, 
  variant = 'contained',
  sx,
  ...props 
}: GradientButtonProps) {
  return (
    <Button
      {...props}
      sx={{
        ...effects.hoverTransition,
        ...(variant === 'contained' ? {
          ...effects.gradientBg,
          color: 'white',
          '&:hover': {
            opacity: 0.9,
          },
        } : {
          position: 'relative',
          border: 'none',
          '&::before': {
            content: '""',
            position: 'absolute',
            inset: 0,
            borderRadius: 'inherit',
            padding: '2px',
            background: effects.gradientBg.background,
            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'xor',
            maskComposite: 'exclude',
          },
          '&:hover': {
            border: 'none',
            background: 'transparent',
            '&::before': {
              opacity: 0.8,
            },
          },
        }),
        ...sx,
      }}
    >
      {children}
    </Button>
  );
} 