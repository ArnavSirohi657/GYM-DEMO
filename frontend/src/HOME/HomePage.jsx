import Hero from "./Hero";
import ProjectCard from "./ProjectCard";
import { Box, Container, Stack, Typography } from "@mui/material";

export default function HomePage() {
    return (
        <Box sx={{ backgroundColor: "#121212", pb: 10, minHeight: "100vh" }}>
            {/* Hero Section */}
            <Box sx={{ position: "relative", zIndex: 1, mb: { xs: 6, md: 12 } }}>
                <Hero />
            </Box>

            {/* Section Title */}
            <Container maxWidth="lg">
                <Typography
                    variant="h3"
                    align="center"
                    fontWeight="bold"
                    gutterBottom
                    sx={{
                        mb: 6,
                        color: "#fff",
                        fontSize: { xs: "2rem", md: "2.8rem" },
                        textTransform: "uppercase",
                        letterSpacing: 1,
                    }}
                >
                    Empower Your Fitness Journey
                </Typography>

                {/* Project Cards Stack */}
                <Stack spacing={4}>
                    <ProjectCard
                        link="/Photo5.jpeg"
                        bgColor="#1de9b6"
                        course="Personal Training"
                        content="Get expert coaching tailored to your body type, goals, and fitness level with 1-on-1 sessions."
                    />
                    <ProjectCard
                        link="/Photo2.jpeg"
                        bgColor="#fdd835"
                        course="Modern Equipment"
                        content="Work out with the latest machines and free weights in a clean and motivating environment."
                    />
                    <ProjectCard
                        link="/Photo3.jpeg"
                        bgColor="#00b0ff"
                        course="Transformations"
                        content="Join hundreds of clients who’ve achieved their dream body with our proven programs."
                    />
                    <ProjectCard
                        link="/Photo4.jpeg"
                        bgColor="#ff4081"
                        course="Group Classes"
                        content="Experience high-energy Zumba, HIIT, and yoga classes that keep you engaged and consistent."
                    />
                </Stack>
            </Container>
        </Box>
    );
}
