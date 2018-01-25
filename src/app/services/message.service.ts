import {Injectable} from '@angular/core';

@Injectable()
export class MessageService {
  header;
  message;
  setHeader(header) {
    this.header = header;
  }
  getHeader() {
    return this.header;
  }
  setMeassage(message) {
    this.message = message;
  }
  getMessage() {
    return this.message;
  }
}
