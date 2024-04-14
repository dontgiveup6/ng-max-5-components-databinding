import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  serverElements: { type: string; name: string; content: string }[] = [
    { type: 'server', name: 'Test1', content: 'For test one!' },
    // { type: 'blueprint', name: 'TestBlue1', content: 'For blue one!' },
    // { type: 'server', name: 'Test2', content: 'For test two!' },
  ];

  onServerAdded(serverData: { serverName: string; serverContent: string }) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent,
    });
  }

  onBlueprintAdded(blueprintData: {
    serverName: string;
    serverContent: string;
  }) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent,
    });
  }

  onNameChange() {
    this.serverElements[0] = {
      name: 'Change',
      type: 'server',
      content: 'Something',
    };
  }

  onDestoy() {
    this.serverElements.pop();
  }
}
