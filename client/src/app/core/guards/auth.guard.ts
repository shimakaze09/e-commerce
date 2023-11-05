import {inject} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot} from '@angular/router';
import {map} from 'rxjs/operators';
import {AccountService} from 'src/app/account/account.service';

export const authGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const accountService = inject(AccountService);
  const router = inject(Router);

  return accountService.currentUser$.pipe(
    map(auth => {
      if (auth) return true;
      else {
        router.navigate(['/account/login'], {queryParams: {returnUrl: state.url}});
        return false
      }
    })
  );
};
