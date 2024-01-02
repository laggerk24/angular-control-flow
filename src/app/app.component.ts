import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

import { DataService } from './data/data.service';
import { UserListComponent } from './user-list/user-list.component';
import { PostListComponent } from './post-list/post-list.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ PostListComponent, UserListComponent],   // need to import CommonModule to use ngFor,ngIf, ngSwitch
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  #dataProvider = inject(DataService);

  data = toSignal(this.#dataProvider.data$);

  onFetch() {
    this.#dataProvider.fetch();
  }
}
