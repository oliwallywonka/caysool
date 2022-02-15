import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Route, Router, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthService } from 'src/app/core/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ValidateTokenGuard implements CanActivate, CanLoad {
  constructor(private authService:AuthService,
              private router:Router){}
  canActivate(): Observable<boolean > | boolean {
      console.log('canActivate');
  return this.authService.validateToken()
    .pipe(
      tap(valid=>{
        if(!valid){
          this.router.navigateByUrl('/auth');
        }
      })
    )

  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean > | boolean {
    console.log('canLoad');
    return true;
  }
}
