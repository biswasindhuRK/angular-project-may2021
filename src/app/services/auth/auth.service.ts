import { Injectable }     from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot }    from '@angular/router';

@Injectable()
export class AuthService implements CanActivate {

	constructor(private router: Router) {}

	canActivate(): boolean {
		if (localStorage.getItem('userData')) {
			return true;
		}
		return false;
	}
}