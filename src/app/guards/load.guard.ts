import {Injectable} from '@angular/core';
import {CanLoad, Route, UrlSegment} from '@angular/router';
import {SessionService} from '../services/session.service';

@Injectable()
export class LoadGuard implements CanLoad {

  constructor(private sessionService: SessionService) {
  }

  canLoad(route: Route, segments: UrlSegment[]): Promise<boolean> {
    const canLoad = this.sessionService.hasUser();
    return new Promise<boolean>(resolve => resolve(canLoad));
  }

}
