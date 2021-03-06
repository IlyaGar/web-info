import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SnackbarService } from '../common/services/snackbar/snackbar.service';
import { TokenService } from '../common/services/token/token.service';
import { CookieLogin } from '../login-manager/models/cookie-login';
import { Logout } from '../login-manager/models/logout';
import { SelectShopComponent } from '../login-manager/select-shop/select-shop.component';
import { LoginService } from '../login-manager/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isLoginUser = false;
  userName = '';

  messageNoConnect = 'Нет соединения, попробуйте позже.';
  messageFailLogin = 'Нет соединения, попробуйте позже.';
  action = 'Ok';
  styleNoConnect = 'red-snackbar';

  constructor(
    public dialog: MatDialog,
    private router: Router,
    private loginService: LoginService,
    private tokenService: TokenService,
    private snackbarService: SnackbarService,
  ) { 
    this.tokenService.events$.forEach(value => { this.eventLogin(value) } );
  }

  ngOnInit(): void {
    if(this.tokenService.isLoginUser()) {
      this.isLoginUser = true;
      this.userName = this.tokenService.getLogin();
    } 
    else {
      this.isLoginUser = false;
      this.router.navigate(['/login']);
    }
  }

  eventLogin(event: boolean) {
    if(event === true) {
      this.isLoginUser = event;
      this.userName = this.tokenService.getLogin();
    }
    else {
      this.isLoginUser = event;
      this.router.navigate(['/login']);
    }
  }

  onClickLogout() {
    this.loginService.postLogout(new Logout(this.tokenService.getLogin(), this.tokenService.getToken())).subscribe(response => {
      if(response.status) {
        this.tokenService.deleteCookie();
        this.isLoginUser = false;
        this.router.navigate(['/login']);
      }
      else 
        this.snackbarService.openSnackBar(this.messageFailLogin, this.action, this.styleNoConnect);
    },
    error => { 
      console.log(error);
      this.snackbarService.openSnackBar(this.messageNoConnect, this.action, this.styleNoConnect);
    });
  }

  openSelectShop() {
    const dialogRef = this.dialog.open(SelectShopComponent, {
      disableClose: true,
    });
    dialogRef.afterClosed().subscribe(result => {
      // if(result)
      //   if(result.shop || result.type) {
      //     this.tokenService.setCookie(CookieLogin.setCookieLogin(result.shop, result.type, null));
      //   }
    });
  }
}
