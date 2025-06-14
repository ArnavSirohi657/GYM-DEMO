import * as React from 'react';
import { Box, Typography, Card, CardMedia, CardContent } from '@mui/material';

export default function ProjectCard({ link, bgColor = '#1E1E1E', content, course }) {
    return (
        <Card
            sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                borderRadius: 4,
                background: `linear-gradient(135deg, ${bgColor}CC, ${bgColor}99)`,
                boxShadow: '0 12px 24px rgba(0,0,0,0.6)',
                overflow: 'hidden',
                backdropFilter: 'blur(14px)',
                WebkitBackdropFilter: 'blur(14px)',
                border: '1px solid rgba(255,255,255,0.08)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                    transform: 'scale(1.02)',
                    boxShadow: '0 20px 40px rgba(255,255,255,0.1)',
                },
            }}
        >
            <CardMedia
                component="img"
                image={link}
                alt={course}
                sx={{
                    width: { xs: '100%', md: 300 },
                    height: { xs: 200, md: 'auto' },
                    objectFit: 'cover',
                    filter: 'brightness(0.9) contrast(1.1)',
                }}
            />

            <CardContent sx={{ p: 3, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <Typography
                    variant="h5"
                    component="div"
                    fontWeight="bold"
                    sx={{
                        color: '#ffffff',
                        mb: 1,
                        letterSpacing: 0.5,
                    }}
                >
                    {course}
                </Typography>
                <Typography
                    variant="body1"
                    sx={{
                        color: 'rgba(255,255,255,0.85)',
                        lineHeight: 1.6,
                    }}
                >
                    {content}
                </Typography>
            </CardContent>
        </Card>
    );
}
