import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AccordionTabComponent } from '../accordion-tab/accordion-tab.component';
import { UserInfoComponent } from '../user-info/user-info.component';


@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {

  users;
  activeUserId = 0;

  constructor(private http: Http) {
    this.http.get('/app/server/users.json')
      .map(result => result.json())
      .subscribe(result => this.users = result);
  }

  ngOnInit() {
  }

  isActive(user) {
    return user.id === this.activeUserId;
  }

  fetchData() {
    this.http.get('/app/server/other-users.json')
      .map(result => result.json())
      .subscribe(result => this.users = result);
  }

  toggle(user) {
    this.isActive(user) ?
      this.activeUserId = 0 : this.activeUserId = user.id;
  }

}
