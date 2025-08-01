/* eslint-disable unicorn/prefer-string-raw */

import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

import { route } from './lib/constants/routes';

const isPublicRoute = createRouteMatcher([`${route.signUp}(.*)`, `${route.signIn}(.*)`]);

export default clerkMiddleware(
  async (auth, request) => {
    if (!isPublicRoute(request)) {
      await auth.protect(); // For api requests, it will return a 404 error if the user is not authed
    }
  }
  // , { debug: true }
);

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)'
  ]
};
