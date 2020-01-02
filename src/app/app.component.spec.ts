import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { TestService } from './test.service';

describe('AppComponent', () => {
  beforeEach(async(() => {

    //@ts-ignore
    const testServiceSpy = jasmine.createSpyObj('TestService', ['someFunction'], {testProperty:'value from spy constructor'});
    console.log("spy object property 'testProperty' has value: " + testServiceSpy.testProperty);

    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [
        {provide: TestService, useValue: testServiceSpy}
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`properties set in createSpyObj should be accessible here`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const testServiceFromTestBed = TestBed.get(TestService);

    expect(testServiceFromTestBed.testProperty).toBe('value from spy constructor', 'Open up your dev tools and look at the console and you will see that testProperty had a value in the beforeEach');
  });
});
