# Project Overview

This is a full-stack JavaScript application migrated from Figma to Replit. The project uses:

## Technology Stack
- **Frontend**: React with Vite, Tailwind CSS, shadcn/ui components
- **Backend**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Routing**: Wouter for frontend routing
- **State Management**: TanStack Query (React Query)
- **Forms**: React Hook Form with Zod validation
- **Styling**: Tailwind CSS with dark mode support

## Project Architecture
- `client/` - Frontend React application
- `server/` - Backend Express server
- `shared/` - Shared TypeScript schemas and types
- The application runs on a single port with Vite serving both frontend and backend

## User Preferences
- None specified yet

## Recent Changes
- Project migrated from Figma to Replit environment
- All dependencies are installed and configured
- Express server running on port 5000
- Created workflow pages: BuildQuery (main), PreviewQuery, SavedQueries
- Added navigation between all workflow pages
- Fixed routing issues and TypeScript compilation errors
- Created 7 secondary tab pages with complete navigation flow:
  - Data Type (main landing page with data type selection)
  - Aggregate (Sum, Count, AVG, Min, Max functions)
  - Functions (Date/YYYY, Date Name, Left/Right Trim, Concatenate, Upper/Lower Case)
  - Confidential (data privacy placeholder)
  - Distinct (DISTINCT, DISTINCT ON, COUNT DISTINCT operations)
  - Case (Simple CASE, Searched CASE, CASE WHEN, Nested CASE statements)
  - Arithmetic Operations (Addition, Subtraction, Multiplication, Division, Modulo, Power)
- All pages feature SQL syntax highlighting and interconnected navigation
- Fixed JSX syntax errors for proper rendering

## Migration Status
- Completed: Full migration with comprehensive 7-page secondary tab workflow
- All navigation routes working properly: /build-query, /aggregate, /functions, /confidential, /distinct, /case, /arithmetic