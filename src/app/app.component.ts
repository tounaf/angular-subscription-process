import {AfterContentInit, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {HttpClientService} from './service/http-client.service';
import {NavigationEnd, NavigationStart, RouteConfigLoadEnd, RouteConfigLoadStart, Router, Scroll} from '@angular/router';
import {LoaderService} from './service/loader.service';

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
    private cdRef: ChangeDetectorRef,
    private loader: LoaderService
  ) {}
  showLoader: boolean;
  ngOnInit() {
    this.httpClient.get('http://localhost:8000/api/sites').subscribe((resp) => {
      const data = resp;
      console.log(data);
    });
  }

  ngAfterContentInit() {
    this.router.events.subscribe(event => {
      /*console.log('Event ==========>' , event);
      this.showLoader = true;
      if (event instanceof RouteConfigLoadStart) {
        console.log('start event ===========> ', event);
        this.showLoader = true;
      } else if (event instanceof RouteConfigLoadEnd || event instanceof NavigationEnd) {
        console.log('end event ', event)
        this.showLoader = false;
        this.cdRef.detectChanges();
      }*/
    });

    this.loader.next.subscribe(value => {
      console.log(value);
      this.showLoader = value;
      this.cdRef.detectChanges();
      console.log('SHOW LOADER ============>', this.showLoader);
    });
  }
}
