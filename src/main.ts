/// <reference types="@angular/localize" />

import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { LOCALE_ID } from '@angular/core';


bootstrapApplication(AppComponent, {  providers: [{provide: LOCALE_ID, useValue: 'fr-FR' }] }).catch((err) => console.error(err));
