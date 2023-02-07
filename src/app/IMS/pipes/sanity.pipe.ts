import { Pipe, PipeTransform } from '@angular/core';
import {
  DomSanitizer,
  SafeHtml,
  SafeStyle,
  SafeScript,
  SafeUrl,
  SafeResourceUrl,
} from '@angular/platform-browser';

@Pipe({
  name: 'sanitize',
})
export class SanityPipe implements PipeTransform {
  constructor(protected _domSanitize: DomSanitizer) {}

  transform(
    value: string,
    type: string
  ): SafeHtml | SafeStyle | SafeScript | SafeUrl | SafeResourceUrl {
    switch (type) {
      case 'html':
        return this._domSanitize.bypassSecurityTrustHtml(value);
      case 'style':
        return this._domSanitize.bypassSecurityTrustStyle(value);
      case 'script':
        return this._domSanitize.bypassSecurityTrustScript(value);
      case 'url':
        return this._domSanitize.bypassSecurityTrustUrl(value);
      case 'resourceUrl':
        return this._domSanitize.bypassSecurityTrustResourceUrl(value);
      default:
        return this._domSanitize.bypassSecurityTrustHtml(value);
    }
  }
}
