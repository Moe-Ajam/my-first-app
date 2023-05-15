import { Component } from '@angular/core';
import { isEmpty } from 'rxjs';

@Component({
  selector: 'app-servers',
  //template: '<app-server></app-server><app-server></app-server>',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  // allowNewServer = false;
  // serverCreationStatus = 'No server was created!';
  // serverName='Testserver';

  username = '';
  isEmpty = false;

  resetUsername(){
    this.username = '';  
  }

  disableButton() {
    this.isEmpty=true;
  }

  constructor() {
    // setTimeout(() => {
    //   this.allowNewServer = true;
    // }, 2000)

  // onCreateServer(){
  //   this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  // }

  // onUpdateServerName(event:Event){
  //   this.serverName=(<HTMLInputElement>event.target).value;
  // }

  


}
}