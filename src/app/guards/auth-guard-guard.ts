import { CanActivateChildFn, CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { Auth } from '@angular/fire/auth';

export const AuthGuard: CanActivateChildFn = (route, state) => {
  const router = inject(Router);
  const auth = inject(Auth);
  // This guard checks if the user is authenticated before allowing access to certain routes
  // If the user is not authenticated, they will be redirected to an unauthorized page
  return new Promise<boolean>((resolve) => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      unsubscribe();
      if (user) {
        console.log('User is authenticated:', user);
        resolve(true);
      } else {
        console.log('User is not authenticated, redirecting to unauthorized page');
        router.navigate(['/unauthorized']);
        resolve(false);
      }
    });
  });
};


export const RedirectGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const auth = inject(Auth);
  // This guard checks if the user is authenticated before allowing access to certain routes
  // If the user is not authenticated, they will be redirected to an unauthorized page
  return new Promise<boolean>((resolve) => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      unsubscribe();
      if (user) {
        console.log('User is authenticated:', user);
        router.navigate(['/home']);
        resolve(false);
      } else {
        console.log('User is not authenticated, showing landing page!');
        resolve(true);
      }
    });
  });
};