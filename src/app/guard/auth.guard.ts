import { CanActivateFn, Router } from '@angular/router';
import { AuthServiceService } from '../auth/auth-service.service';
import { MessageService } from 'primeng/api';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const auth = inject(AuthServiceService);
  const messageService = inject(MessageService);
  if (auth.isLoggedIn()) {
    return true;
  } else {
    router.navigate(['login']);
    return false;
    // messageService.add({
    //   severity: 'error',
    //   summary: 'Please Login First!',
    // });
  }
};
