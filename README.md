# Playwright Automation Framework

## About Project

I built an automation framework using Playwright and TypeScript.
This project tests an e-commerce website automationexercise.com.

I covered login flow, signup form, product search, add to cart,
checkout verification, iframe testing and API testing.

## What I Covered

- Login flow - validate user can login with credentials
- Signup form - used faker library so every run uses a different 
  random email, also covered radio buttons, dropdowns and checkboxes
- Product search - search for a product and add it to cart and 
  verify product at checkout page
- iFrame - used different website (iframetest.com) where i perform 
  search action inside an iframe
- API Testing - used same ecommerce site APIs, covered GET request 
  to validate product list, POST request to validate user existence
- API Mocking - intercepted API request and returned fake data

## Folder Structure

Pages/     - Page Object Model classes for each page
tests/ui/  - all UI test files  
tests/api/ - all API test files
utils/     - fixtures and global setup

## Setup Steps

1. clone the repo
2. npm install
3. npx playwright install
4. create .env file and add below variables
   BASE_URL=https://automationexercise.com
   UNAME=your email
   PASSWD=your password

## How to Run Tests

run all tests:
npx playwright test

run specific file:
npx playwright test login.spec.ts

run in headed mode:
npx playwright test --headed

view report:
npx playwright show-report

run in docker:
docker build -t playwright-tests .
docker run playwright-tests

## Tech Used

Playwright, TypeScript, Faker.js, dotenv, Docker
