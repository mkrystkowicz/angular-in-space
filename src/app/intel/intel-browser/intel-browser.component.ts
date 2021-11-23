import { Component } from '@angular/core';
import { map } from 'rxjs';
import { FormControl } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-intel-browser',
  templateUrl: './intel-browser.component.html',
  styleUrls: ['./intel-browser.component.css'],
})
export class IntelBrowserComponent {
  sourceControl = new FormControl('');
  sourceUrl: Observable<SafeResourceUrl> = this.sourceControl.valueChanges.pipe(
    map((url) =>
      url ? this.sanitizer.bypassSecurityTrustResourceUrl(url) : ''
    )
  );
  options = [
    { name: 'ESA', url: 'http://www.esa.int/ESA' },
    { name: 'POLSA', url: 'https://www.polsa.gov.pl/pl' },
  ];

  constructor(private sanitizer: DomSanitizer) {}
}
