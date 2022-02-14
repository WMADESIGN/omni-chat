import { Component, OnInit } from '@angular/core';

import { CoreSidebarService } from '@core/components/core-sidebar/core-sidebar.service';

import { ChatService } from 'app/main/pages/chat/chat.service';

@Component({
  selector: 'app-chat-active-sidebar',
  templateUrl: './chat-active-sidebar.component.html',
})
export class ChatActiveSidebarComponent implements OnInit {
  // Public
  public chatUser;

  /**
   * Constructor
   *
   * @param {ChatService} _chatService
   * @param {CoreSidebarService} _coreSidebarService
   */
  constructor(
    private _chatService: ChatService,
    private _coreSidebarService: CoreSidebarService
  ) {}

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {
    this._chatService.onSelectedChatUserChange.subscribe((res) => {
      this.chatUser = res;
    });
  }
}
