import { Routes } from '@angular/router';
import { JsonComponent } from './json/json.component';
import { HomeComponent } from './home/home.component';
import { ImageDecodeComponent } from './image-decode/image-decode.component';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'json-formatter', component: JsonComponent},
    { path: 'image-decoder-encoder', component: ImageDecodeComponent}
];
