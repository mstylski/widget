import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  export() {
    let data = JSON.stringify({ weather: { is_sunny: true, temp: '+25' } });
    let dataUri =
      'data:application/json;charset=utf-8,' + encodeURIComponent(data);
    let exportFileName = 'weather.json';
    let linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileName);
    linkElement.click();
  }
}
