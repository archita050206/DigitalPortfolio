

# Archita Das — Personal Portfolio Website

## Overview
A modern, recruiter-friendly personal portfolio website with a soft pastel aesthetic (lavender, soft pink, light blue, muted peach), glassmorphism elements, and smooth CSS transitions. Fully responsive, mobile-first design.

## Design System
- **Colors**: Soft pastel palette — lavender primary, soft pink accents, light blue highlights, muted peach warm tones
- **Typography**: Inter font (clean sans-serif)
- **UI Elements**: Rounded corners, soft shadows, glassmorphism cards, subtle hover effects
- **Animations**: CSS transitions only — hover scale, fade-ins, smooth color shifts

## Sections (in order)

### 1. Sticky Navbar
- Logo/name on the left, navigation links on the right
- Smooth scroll to each section
- Mobile hamburger menu
- Glassmorphism background effect on scroll

### 2. Hero / Landing Section
- Full-screen with soft gradient pastel background
- Name: **Archita Das**, Title: **Aspiring Software Developer | Full Stack Enthusiast**
- Short intro tagline
- Two CTA buttons: "View Projects" and "Download Resume"
- GitHub & LinkedIn social icons
- Clean, bold, visually striking layout

### 3. About Me Section
- Two-column layout: image placeholder (left) + text (right)
- Highlights: B.Tech CSE student, 300+ LeetCode & 200+ GFG problems, web development passion
- Soft pastel card background with subtle shadow

### 4. Skills Section
- Categorized grid: Programming, Web, CS Fundamentals, Tools
- Modern pastel skill cards with icons and hover effects
- Clean grid layout, responsive columns

### 5. Projects Section
- Three project cards: FilmHunt, Medilink, HealthSync
- Each card: title, description, tech stack badges, GitHub & Live Demo buttons
- Soft pastel glow effect, hover scale animation

### 6. Certifications Section
- Elegant card layout for 3 certifications (NPTEL Social Networks, TCP/IP Coursera, Computer Communications)
- Clean timeline-inspired design with pastel accents

### 7. Achievements Section
- Bold highlight cards: 5★ HackerRank (Java), 160+ LeetCode problems
- Pastel accent backgrounds with standout styling

### 8. Resume Download Section
- Centered, minimal section with a prominent "Download Resume" button

### 9. Contact Section
- Contact form (Name, Email, Message) using mailto: submission
- GitHub & LinkedIn icons
- Clean professional layout

### 10. Footer
- Simple footer with copyright, social links, and back-to-top option

## Technical Approach
- All React functional components, organized in `/src/components/`
- Section components: Hero, About, Skills, Projects, Certifications, Achievements, Resume, Contact
- Shared components: Navbar, Footer, SectionHeading, SocialIcons
- Tailwind utility classes only, custom pastel color palette in CSS variables
- Mobile-first responsive design
- SEO meta tags and proper accessibility (alt text, semantic HTML)
- No heavy external libraries — pure React + Tailwind + CSS transitions

