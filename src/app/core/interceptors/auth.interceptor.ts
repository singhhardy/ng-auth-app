import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';

export const AuthInterceptor: HttpInterceptorFn = (req, next) => {
  const accessToken = localStorage.getItem('accessToken');

  if (accessToken) {
    const clonedReq = req.clone({
      setHeaders: { Authorization: `Bearer ${accessToken}` }
    });
    return next(clonedReq);
  }

  return next(req);
};
