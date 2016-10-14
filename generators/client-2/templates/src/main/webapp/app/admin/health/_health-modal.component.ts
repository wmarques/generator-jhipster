import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { <%=jhiPrefixCapitalized%>HealthService } from './health.service';

@Component({
    selector: '<%=jhiPrefix%>-health-modal',
    templateUrl: './health-modal.html',
    inputs: ['currentHealth', 'dismiss']
})
export class <%=jhiPrefixCapitalized%>HealthModalComponent {

    currentHealth: any;

    constructor(private healthService:<%=jhiPrefixCapitalized%>HealthService) {}

    baseName(name) {
        return this.healthService.getBaseName(name);
    }

    subSystemName(name) {
        return this.healthService.getSubSystemName(name);
    }

}
