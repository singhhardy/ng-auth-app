import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthServiceService } from '../services/auth-service.service';
import { catchError, switchMap, throwError } from 'rxjs';

export const AuthInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthServiceService)
  const accessToken = localStorage.getItem('accessToken');
  let authReq = req;

  if (accessToken) {
    authReq = req.clone({
      setHeaders: { Authorization: `Bearer ${accessToken}` }
    });
  }

  return next(authReq).pipe(
    catchError(error => {
      if (error.status === 401) {
        console.log('Access Token successful, retrying request...')
        return authService.refreshToken().pipe(
          switchMap(res => {
            console.log('Refresh token successful, retrying request')
            localStorage.setItem('accessToken', res.token);
            const newAuthReq = req.clone({
              setHeaders: { Authorization: `Bearer ${res.token}` }
            });
            return next(newAuthReq);
          }),
          catchError(refreshError => {
            console.log('Refresh token failed')
            authService.logout();
            return throwError(() => refreshError);
          })
        );
      }
      return throwError(() => error);
    })
  );
};
