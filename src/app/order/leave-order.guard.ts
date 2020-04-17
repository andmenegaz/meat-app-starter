import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { OrderComponent } from "./order.component";
import { utf8Encode } from "@angular/compiler/src/util";

export class LeaveOrderGuard implements CanDeactivate<OrderComponent> {

    canDeactivate(orderComponent: OrderComponent,
        activatedRoute: ActivatedRouteSnapshot,
        routeState: RouterStateSnapshot,
        ): boolean {

        if (!orderComponent.isOrderCompleted()) {
            return window.confirm('Deseja desistir da Compra?')
        }
        else {
            return true
        }

    }

}