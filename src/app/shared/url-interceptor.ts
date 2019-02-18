import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class UrlInterceptor implements HttpInterceptor {
    private readonly baseUrl = 'http://localhost:3000';
    
    intercept(req: HttpRequest<any>,next: HttpHandler) : Observable<HttpEvent<any>> {
        req = req.clone({
            url: `${this.baseUrl}${req.url}`
        });
        return next.handle(req);
    }
}