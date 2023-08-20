import { Injectable } from '@nestjs/common/decorators';
import { CanActivate } from '@nestjs/common/interfaces/features/can-activate.interface';
import { Observable } from 'rxjs';
import { ExecutionContext } from '@nestjs/common/interfaces/features/execution-context.interface';
import { JwtService } from '@nestjs/jwt';
import { UnauthorizedException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from './role-auth.decorator';
import { HttpException } from '@nestjs/common/exceptions';
import { HttpStatus } from '@nestjs/common/enums';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(
    private jwtService: JwtService,
    private reflector: Reflector
  ) {}

  canActivate(
    context: ExecutionContext
  ): boolean | Promise<boolean> | Observable<boolean> {
    const req = context.switchToHttp().getRequest();
    try {
      const requiredRoles = this.reflector.getAllAndOverride<string[]>(
        ROLES_KEY,
        [context.getHandler(), context.getClass()]
      );
      if (!requiredRoles) {
        return true;
      }
      const authHeader = req.headers.authorization;
      const bearer = authHeader.split(' ')[0];
      const token = authHeader.split(' ')[1];

      if (bearer !== 'Bearer' || !token) {
        throw new UnauthorizedException({ message: 'User unathorized' });
      }

      const user = this.jwtService.verify(token);
      req.user = user;
      return user.roles.some(role => requiredRoles.includes(role.value));
    } catch (error) {
      throw new HttpException('Access denied', HttpStatus.FORBIDDEN);
    }
  }
}
