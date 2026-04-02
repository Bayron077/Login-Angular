import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  // Check if the user is logged in (adjust this logic to match your auth service)
  const isLoggedIn = !!localStorage.getItem('token'); // Example: checks for a stored token

  if (isLoggedIn) {
    return true; // Allow access
  }

  // Redirect to login if not authenticated
  router.navigate(['/login']);
  return false;
};
