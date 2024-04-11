import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  serverElements: { type: string; name: string; content: string }[] = [
    { type: 'server', name: 'Test1', content: 'For test one!' },
    { type: 'blueprint', name: 'TestBlue1', content: 'For blue one!' },
    { type: 'server', name: 'Test2', content: 'For test two!' },
  ];
}
