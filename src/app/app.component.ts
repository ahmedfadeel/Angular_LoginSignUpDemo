import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LoginSignup';
  success_msg=true;
  contacts=[
  {
    'firstName':'Abc',
    'lastName' :'def'

  },
 {
    
  'firstName':'Abc',
  'lastName' :'def'

 },
{
  
  'firstName':'Abc',
  'lastName' :'def'

}]
}
