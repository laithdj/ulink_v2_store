import { RouterModule, Route, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

// import { LoginComponent } from './shared/components/login/login.component';
// import { PanelComponent } from './shared/components/panel/panel.component';
// import { CanActivateViaAuthGuard } from './shared/services/can-activate-via-auth-guard.service';

export const routes: Routes = [

    {
        path: '',
        loadChildren: () => import('./product/product.module').then(m => m.ProductModule)
    },
    {
        path: 'checkout',
        loadChildren: () => import('./checkout/checkout.module').then(m => m.CheckoutModule)
    },
];
