import {TestBed, async} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AppComponent} from './app.component';
import {UserModule} from './user/user.module';
import {UserComponent} from './user/user.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent, UserComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toMatchSnapshot();
  });

  it(`should have as title 'ngrx-store-example-v5'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.nativeElement;
    expect(app).toMatchSnapshot();
  });
});
