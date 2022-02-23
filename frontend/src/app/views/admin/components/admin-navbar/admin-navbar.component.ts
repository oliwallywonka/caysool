import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "src/app/core/services/auth.service";

@Component({
  selector: "app-admin-navbar",
  templateUrl: "./admin-navbar.component.html",
})
export class AdminNavbarComponent implements OnInit {
  constructor(
    private authService:AuthService,
    private router:Router
  ) {}

  ngOnInit(): void {}
  logOut() {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }
}
