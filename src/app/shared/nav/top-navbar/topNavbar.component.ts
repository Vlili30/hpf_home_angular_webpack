import { Component, OnInit, Renderer2 } from '@angular/core';
import { SidebarLeftService } from '../sidebar-left/sidebarLeft.service';

@Component({
  selector: 'top-navbar',
  styles: [``],
  templateUrl: 'topNavbar.component.html'
})
export class TopNavbarComponent implements OnInit {

    public sidebarService: {
        isSidebarOpened : boolean
    };

    constructor(
        private _sidebarLeftService: SidebarLeftService,
        private _renderer: Renderer2
    ) {
        this.sidebarService = this._sidebarLeftService;
    }

  public ngOnInit() {}

  public toggleLeftSidebar() {
      if (this.sidebarService.isSidebarOpened) {
          this._renderer.removeClass(document.body, 'is_sidebar-left-open');
          this.sidebarService.isSidebarOpened = false;
      } else {
          this._renderer.addClass(document.body, 'is_sidebar-left-open');
          this.sidebarService.isSidebarOpened = true;
      }
  }
}
