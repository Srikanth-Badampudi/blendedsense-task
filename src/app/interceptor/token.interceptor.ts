import { Injectable, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth/auth-service.service';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor, OnInit {
  clientObj: object = {
    'Client-Id': '4CD884F88F476F647CC4446D4593D',
    'Client-Secret': 'A955BEBD27BFC49E8CE12129346A4',
  };
  constructor(private auth: AuthServiceService) {}
  ngOnInit(): void {
    ('login Interceptor called...');
  }

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const Token = this.auth.getToken();
    if (Token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${Token}`,
          ...this.clientObj,
        },
      });
    } else {
      ('login Interceptor called...');

      request = request.clone({
        setHeaders: {
          ...this.clientObj,
        },
      });
    }
    return next.handle(request);
  }
}
