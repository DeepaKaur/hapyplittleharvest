# Happy Little Harvest Regression Test Suite

This repository contains the end-to-end regression test suite for the Happy Little Harvest website. It uses Playwright with TypeScript and a Page Object Model architecture to verify core user journeys, subscription workflows, and account management features.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Running Tests](#running-tests)
- [Test Structure](#test-structure)
- [Configuration](#configuration)

## Overview

The suite validates critical flows in the Happy Little Harvest application, including finding growers, subscribing to growers, managing profiles, and navigating blog content.

## Features

- Playwright end-to-end tests with TypeScript
- Page Object Model for reusable page abstractions
- Authentication fixtures and login helpers
- Coverage for Find Growers, My Growers, Account, and Home page flows
- HTML reporting via Playwright reporter

## Tech Stack

- Node.js
- TypeScript
- Playwright
- Page Object Model

## Getting Started

1. Clone the repository:

```bash
git clone <repository-url>
cd hapyplittleharvest
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file at the repository root with the required environment variables.

## Running Tests

Run all tests:

```bash
npm run test
# or
npx playwright test
```

Run tests by directory:

```bash
npx playwright test tests/home
npx playwright test tests/findgrowers
npx playwright test tests/account
npx playwright test tests/mygrowers
```

Run a specific test:

```bash
npx playwright test tests/home/home.spec.ts
```

Run Playwright UI mode:

```bash
npx playwright test --ui
```

View the latest test report:

```bash
npx playwright show-report
```

## Test Structure

- `tests/home/` - Home page and blog navigation tests
- `tests/findgrowers/` - Find Growers page, grower profiles, and subscription workflow tests
- `tests/mygrowers/` - My Growers page verification tests
- `tests/account/` - Account settings, grower profile management, and events tests
- `tests/pages/` - Page Object Model classes
- `tests/fixtures.ts` - Shared fixtures and authentication helpers
- `specs/` - Test plans and documentation

## Page Objects

Located in `tests/pages/`:
- `BasePage.ts` - Base class with common functionality
- `HomePage.ts` - Home page locators and methods
- `BlogDetailPage.ts` - Blog post detail page
- `FindGrowersPage.ts` - Find Growers page with subscription methods
- `MyGrowersPage.ts` - My Growers page verification
- `AccountPage.ts` - Account settings page
- `GrowerProfilePage.ts` - Grower profile management
- `EventsPage.ts` - Events management

## Test Plans

The `specs/` directory contains test plans and documentation for the suite.
- `navigation-test-plan.md` - Comprehensive test plan covering all user journeys

## Configuration

Create a `.env` file with the following values:

- `SITE_URL` - Base URL for the application
- `LOGIN_EMAIL` - Test user email
- `LOGIN_PASSWORD` - Test user password

Additional Playwright configuration is available in `playwright.config.ts`.

