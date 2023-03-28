import { Component } from '@angular/core';
import {ExportService} from "../services/export-service";

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.css'],
  providers: [ExportService]
})
export class WidgetComponent {
  constructor(private exportService: ExportService) {}

  export() {
    this.exportService.export()
  }
}
