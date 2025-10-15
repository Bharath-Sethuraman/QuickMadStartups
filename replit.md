# Fusion AI - AI Workflow Automation Platform

## Overview

Fusion AI is a comprehensive AI workflow automation platform that enables users to build, manage, and automate AI-powered workflows through a visual interface. The application features a marketing landing page showcasing product capabilities, integrations, testimonials, and pricing information. Built as a full-stack TypeScript application with React frontend and Express backend, it's designed to demonstrate AI automation capabilities and capture user interest through a waitlist.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- **React 18** with TypeScript for type-safe component development
- **Vite** as the build tool and development server for fast hot module replacement
- **Wouter** for lightweight client-side routing instead of React Router
- **TanStack Query (React Query)** for server state management and data fetching

**UI Component System**
- **Shadcn/ui** component library with Radix UI primitives for accessible, unstyled components
- **Tailwind CSS** for utility-first styling with CSS variables for theming
- Custom design system using the "New York" style variant with neutral base color
- Component architecture following atomic design principles with reusable UI components

**State Management**
- React Query for asynchronous state and API data caching
- React hooks for local component state
- Toast notifications system for user feedback
- Form handling with React Hook Form and Zod validation

**Styling Approach**
- Tailwind CSS with custom configuration for responsive design
- CSS custom properties for dynamic theming
- GSAP animations for scroll-triggered effects and page load animations
- Mobile-first responsive design with breakpoint at 768px

### Backend Architecture

**Server Framework**
- **Express.js** running on Node.js for HTTP server
- TypeScript for type safety across the entire backend
- ESM (ES Modules) for modern JavaScript module system

**Development & Production Setup**
- Development: Uses `tsx` for TypeScript execution with hot reload
- Production: Compiled with `esbuild` for optimized bundle size
- Vite integration for serving frontend in development with HMR
- Static file serving for production builds

**API Design**
- RESTful API structure with `/api` prefix for all endpoints
- Request/response logging middleware for debugging
- JSON body parsing for API requests
- Error handling middleware with status code normalization

**Storage Layer**
- **In-Memory Storage** implementation as the default storage interface
- Abstracted storage interface (`IStorage`) allowing easy swap to database
- User management methods: `getUser`, `getUserByUsername`, `createUser`
- UUID-based user identification

### Data Storage Solutions

**Database Configuration**
- **Drizzle ORM** configured for PostgreSQL dialect
- **Neon Database** serverless PostgreSQL driver (`@neondatabase/serverless`)
- Database migrations stored in `/migrations` directory
- Schema definitions in shared TypeScript files using Drizzle's table definitions

**Schema Design**
- Users table with UUID primary key, username, and password fields
- Zod schemas for runtime validation using `drizzle-zod`
- Type-safe insert and select operations through TypeScript inference
- Environment-based database URL configuration

**Current Implementation**
- Memory-based storage for development/demonstration
- Database schema prepared for production deployment
- Easy migration path from in-memory to PostgreSQL storage

### Authentication & Authorization

**Current State**
- User schema with username/password fields defined
- No active authentication implementation in routes
- Storage interface includes user lookup methods
- Ready for authentication implementation (JWT, sessions, etc.)

**Session Management Preparation**
- `connect-pg-simple` package included for PostgreSQL session store
- Express session middleware ready for integration

### External Dependencies

**UI & Component Libraries**
- Radix UI primitives (20+ component packages) for accessible UI elements
- Lucide React for consistent iconography
- GSAP with ScrollTrigger plugin for advanced animations
- Embla Carousel for touch-friendly carousels
- Vaul for drawer components
- Recharts for data visualization (chart components)

**Development Tools**
- Vite plugins for Replit integration (error overlay, cartographer, dev banner)
- PostCSS with Autoprefixer for CSS processing
- ESBuild for production bundling
- Drizzle Kit for database migrations

**API & Data Management**
- TanStack Query for declarative data fetching
- React Hook Form with Zod resolvers for form validation
- Date-fns for date manipulation
- Class Variance Authority (CVA) for component variant styling

**Utilities**
- clsx and tailwind-merge for conditional class management
- cmdk for command palette functionality
- nanoid for unique ID generation