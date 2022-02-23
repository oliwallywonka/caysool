import { HashLocationStrategy } from "@angular/common";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { AuthService } from "src/app/core/services/auth.service";
import { BusinessService } from "src/app/core/services/business.service";
import { User } from "src/app/interfaces/auth";
import { Business } from "src/app/interfaces/business";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
})
export class SidebarComponent implements OnInit, OnDestroy {
  sub: Subscription;
  collapseShow = "hidden";
  user: User = this.authService.user;
  business = this.businessService.businessInformation;
  constructor(
    private businessService: BusinessService,
    private authService: AuthService,
  ) {}

  ngOnInit() {
    this.sub = new Subscription();
    this.subscribeBusiness();
    this.subscribeUser();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
  toggleCollapseShow(classes) {
    this.collapseShow = classes;
  }

  subscribeBusiness() {
    this.sub.add(
      this.businessService.business.subscribe(
        business => {
          this.business = business;
        }
      )
    );
  }

  subscribeUser() {
    this.sub.add();
    this.authService.user$.subscribe(
      user => {
        this.user = user;
      }
    );
  }
}
