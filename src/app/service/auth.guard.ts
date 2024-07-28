import { CanActivateFn, Router } from '@angular/router';
import { LocalstorageService } from './localstorage.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const locals=inject(LocalstorageService);
  const router=inject(Router);
  const localData= locals.getData('session');
  console.log(localData);
  
  if(localData != ""){
    return true;   
  }
  else{
    router.navigateByUrl('/register');
    return false;
  }
};
