import {Component, Input} from '@angular/core';
import {ExportService} from "../../services/export-service";

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss'],
})
export class WidgetComponent {
  @Input() title?:string;

  constructor(private exportService: ExportService) {}

  export() {
    this.exportService.export()
  }
}
