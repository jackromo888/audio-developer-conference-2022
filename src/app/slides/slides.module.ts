import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrismComponent } from './prism/prism.component';
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
import { SlidesRoutingModule } from './slides-routing.module';
import { SlidesComponent } from './slides.component';

@NgModule({
    declarations: [
        PrismComponent,
        SlideEightComponent,
        SlideFiveComponent,
        SlideFourComponent,
        SlideNineComponent,
        SlideOneComponent,
        SlidesComponent,
        SlideSevenComponent,
        SlideSixComponent,
        SlideTenComponent,
        SlideThreeComponent,
        SlideTwoComponent
    ],
    imports: [CommonModule, SlidesRoutingModule]
})
export class SlidesModule {}
