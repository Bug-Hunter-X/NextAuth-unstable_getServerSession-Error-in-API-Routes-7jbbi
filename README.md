# NextAuth unstable_getServerSession Error in API Routes

This repository demonstrates a common error encountered when using `unstable_getServerSession` from the `next-auth` package within Next.js API routes.  The error typically occurs when attempting to access the session within a page component that fetches data from an API route.

## Problem

The `unstable_getServerSession` function throws an error when called with a request object that doesn't have the `req` and `res` properties in the context of an API route.  The exact error message may vary, but it will relate to the session object being undefined or unavailable.

## Solution

The correct approach is to directly access the session from the API route itself, instead of attempting to pass it from the page component. The example below demonstrates how to directly use the `unstable_getServerSession` within the API route, eliminating the need for passing `req` and `res`.