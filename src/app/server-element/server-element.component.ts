import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ContentChild,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrl: './server-element.component.css',
  encapsulation: ViewEncapsulation.Emulated, // NONE, ShadowDom
})
export class ServerElementComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input('srvElement') element: { type: string; name: string; content: string };
  @ViewChild('heading', { static: true }) header: ElementRef;
  @ContentChild('contentParagraph', { static: true }) paragraph: ElementRef;

  constructor() {
    console.log('constructor');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('on changes');
    console.log(changes);
    // for (const inputName in changes) {
    //   const inputValues = changes[inputName];
    //   console.log(`Previous ${inputName} == ${inputValues.previousValue}`);
    //   console.log(`Current ${inputName} == ${inputValues.currentValue}`);
    //   console.log(`Is first ${inputName} change == ${inputValues.firstChange}`);
    // }
  }

  ngOnInit() {
    console.log('on init');

    console.log(
      'Here should be displayed the textContent of the ref header: ' +
        this.header.nativeElement.textContent
    );

    console.log(
      'Here should be displayed the textContent of the ref paragraph which is projected here with ng-content from the parent component (app-component): ' +
        this.paragraph.nativeElement.textContent
    );
  }

  ngDoCheck() {
    console.log('do check');
  }

  ngAfterContentInit() {
    console.log('after content init');
  }

  ngAfterContentChecked() {
    console.log('afet content checked');
    console.log(
      'Here should be displayed the textContent of the ref paragraph which is projected here with ng-content from the parent component (app-component): ' +
        this.paragraph.nativeElement.textContent
    );
  }

  ngAfterViewInit() {
    console.log('after view init');
    console.log(
      'Here should be displayed a ref of the header: ' +
        this.header.nativeElement.textContent
    );
  }

  ngAfterViewChecked() {
    console.log('afet view checked');
  }

  ngOnDestroy() {
    console.log('on destroy');
  }
}
