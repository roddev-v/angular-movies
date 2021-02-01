import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {SessionService} from '../services/session.service';

@Injectable()
export class AuthGuard implements CanActivateChild {

  constructor(private router: Router,
              private sessionService: SessionService) {
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean | UrlTree> {
    return new Promise<boolean | UrlTree>(resolve => {
      if (this.sessionService.hasUser()) {
        resolve(true);
      } else {
        const loginUrl = this.router.createUrlTree(['login']);
        resolve(loginUrl);
      }
    });
  }
}
