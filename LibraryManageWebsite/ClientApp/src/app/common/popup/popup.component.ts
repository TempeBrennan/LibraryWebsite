import { Component, OnInit, ElementRef, ViewChild, HostListener, Input } from '@angular/core';
import { BrowserSize } from './popup.model';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  @ViewChild('drag', { static: false }) drag: ElementRef;
  @ViewChild('container', { static: false }) container: ElementRef;
  @Input() header:string;

  private _isMouseDown: boolean;
  private _clientX: number;
  private _clientY: number;

  constructor() { }

  ngOnInit() {

  }

  private getBrowserSize(): BrowserSize {
    return {
      width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
      height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
    };
  }

  private mouseDownHandler(e: MouseEvent) {
    this._isMouseDown = true;
    this._clientX = e.clientX;
    this._clientY = e.clientY;
  }

  @HostListener('document:mousemove', ['$event'])
  private mouseMoveHandler(e: MouseEvent) {
    if (!this._isMouseDown) {
      return;
    }

    var browserSize = this.getBrowserSize();

    var dx = e.clientX - this._clientX;
    var dy = e.clientY - this._clientY;
    var curX = this.container.nativeElement.offsetLeft + dx;
    var curY = this.container.nativeElement.offsetTop + dy;

    if (curX < 0) {
      curX = 0;
    }
    if (curX + this.container.nativeElement.offsetWidth >= browserSize.width) {
      curX = browserSize.width - this.container.nativeElement.offsetWidth;
    }
    if (curY < 0) {
      curY = 0;
    }
    if (curY + this.container.nativeElement.offsetHeight >= browserSize.height) {
      curY = browserSize.height - this.container.nativeElement.offsetHeight;
    }

    this._clientX = e.clientX;
    this._clientY = e.clientY;

    this.container.nativeElement.style.left = curX + 'px';
    this.container.nativeElement.style.top = curY + 'px';
  }

  @HostListener('document:mouseup', ['$event'])
  private mouseUpHandler(e: Event) {
    this._isMouseDown = false;
    this._clientX = -1;
    this._clientY = -1;
  }

}
