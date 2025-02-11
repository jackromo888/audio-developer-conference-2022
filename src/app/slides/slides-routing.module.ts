import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SlideEightComponent } from './slide-eight/slide-eight.component';
import { SlideFiveComponent } from './slide-five/slide-five.component';
import { SlideFourComponent } from './slide-four/slide-four.component';
import { SlideNineComponent } from './slide-nine/slide-nine.component';
import { SlideOneComponent } from './slide-one/slide-one.component';
import { SlideSevenComponent } from './slide-seven/slide-seven.component';
import { SlideSixComponent } from './slide-six/slide-six.component';
import { SlideTenComponent } from './slide-ten/slide-ten.component';
import { SlideThreeComponent } from './slide-three/slide-three.component';
import { SlideTwoComponent } from './slide-two/slide-two.component';
import { SlidesComponent } from './slides.component';

const routes: Routes = [
    {
        children: [
            {
                component: SlideOneComponent,
                path: '1'
            },
            {
                component: SlideTwoComponent,
                path: '2'
            },
            {
                component: SlideThreeComponent,
                path: '3'
            },
            {
                component: SlideFourComponent,
                path: '4'
            },
            {
                component: SlideFiveComponent,
                path: '5'
            },
            {
                component: SlideSixComponent,
                path: '6'
            },
            {
                component: SlideSevenComponent,
                path: '7'
            },
            {
                component: SlideEightComponent,
                path: '8'
            },
            {
                component: SlideNineComponent,
                path: '9'
            },
            {
                component: SlideTenComponent,
                path: '10'
            },
            {
                path: '**',
                redirectTo: '1'
            }
        ],
        component: SlidesComponent,
        path: ''
    }
];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes)]
})
export class SlidesRoutingModule {}
