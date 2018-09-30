import { Component, OnInit, Renderer2 } from '@angular/core';
import { SidebarLeftService } from './sidebarLeft.service';

@Component({
    selector: 'sidebar-left',
    styles: [``],
    templateUrl: 'sidebarLeft.component.html'
})
export class SidebarLeftComponent {

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

    public toggleSideBar() {

        if (this.sidebarService.isSidebarOpened) {
            this._renderer.removeClass(document.body, 'is_sidebar-left-open');
            this.sidebarService.isSidebarOpened = false;
        } else {
            this._renderer.addClass(document.body, 'is_sidebar-left-open');
            this.sidebarService.isSidebarOpened = true;
        }

    }
}
