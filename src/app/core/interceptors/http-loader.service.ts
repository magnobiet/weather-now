import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as NProgress from 'nprogress';
import { Observable } from 'rxjs/internal/Observable';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class HttpLoaderService implements HttpInterceptor {

  private requestsCounter = 0;

  constructor() {

    NProgress.configure({
      showSpinner: false,
      parent: 'body'
    });

  }

  private onRequestStart(): void {

    this.requestsCounter++;
    NProgress.start();

  }

  private onRequestEnd(): void {

    if ((--this.requestsCounter) === 0) {
      NProgress.done();
    }

  }

  public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    this.onRequestStart();

    return next.handle(request).pipe(tap((event: HttpEvent<any>) => {

      if (event instanceof HttpResponse) {
        this.onRequestEnd();
      }

    }, () => {
      this.onRequestEnd();
    }));

  }

}
