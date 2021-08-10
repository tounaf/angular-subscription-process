import {AfterContentInit, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {HttpClientService} from './service/http-client.service';
import {NavigationEnd, NavigationStart, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterContentInit {

  title = 'angular-experiment';
  constructor(
    private httpClient: HttpClientService,
    private router: Router,
    private cdRef: ChangeDetectorRef
  ) {}
  showLoader: boolean;
  ngOnInit() {
    this.httpClient.get('http://localhost:8000/api/sites/2').subscribe((resp) => {
      console.log(resp);
    });
  }

  ngAfterContentInit() {
    this.router.events.subscribe(event => {
      this.showLoader = true
      if (event instanceof NavigationStart) {
        this.showLoader = true;
      } else if (event instanceof NavigationEnd) {
        console.log(event)
        this.showLoader = false;
        cdRef.detectChanges();
      }
    });
  }
}
