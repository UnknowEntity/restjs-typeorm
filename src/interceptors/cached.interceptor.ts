import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable, of } from 'rxjs';

@Injectable()
export class CacheInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const isCached = Math.random() > 0.5;
    if (isCached) {
      return of([{ name: 'luky luke', age: '35', breed: 'cowboy' }]);
    }
    return next.handle();
  }
}
