import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user;
  postOptions;
  post;

  constructor() {
    this.postOptions = {
      events: {
        'froalaEditor.initialized': (e, editor) => {
          setTimeout(() => {
            editor.events.focus(true);
          }, 100);
        }
      },
      scrollableContainer: '.post-editor-body',
      placeholderText: 'Type post here...',
      toolbarInline: false,
      charCounterCount: false,
      toolbarVisibleWithoutSelection: false,
      imageTextNear: true,
      pastePlain: true,
      autofocus: true,
      videoMaxSize: 1024 * 1024 * 250,
      imageMaxSize: 1024 * 1024 * 20,
      imageAddNewLine: true,
      quickInsertButtons: ['image', 'embedly'],
      toolbarButtons: ['bold', 'italic', 'underline', 'strikeThrough', '|',
        'quote', 'fontSize', 'insertLink', 'align', 'paragraphFormat', '|',
        'insertImage', 'insertVideo', 'embedly'
      ],
    };
  }

  ngOnInit() {
    this.user = localStorage.getItem('user');
    console.log(this.user);
  }

}
