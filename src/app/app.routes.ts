import { Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { DatenschutzComponent } from './datenschutz/datenschutz.component';
import { ImpressumComponent } from './impressum/impressum.component';

export const routes: Routes = [
    {
        path: '',
        component: MainPageComponent
    },

    {
        path: 'datenschutz',
        component: DatenschutzComponent
    },

    {
        path: 'impressum',
        component: ImpressumComponent
    },
];
