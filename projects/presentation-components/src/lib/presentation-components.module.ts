import { FooterModule } from './footer/footer.module';
import { ButtonModule } from './button/button.module';
import { InputModule } from './input/input.module';
import { UserBarModule } from './user-bar/user-bar.module';
import { HeaderModule } from './header/header.module';
import { TabsModule } from './tabs/tabs.module';
import { NavBarModule } from './nav-bar/nav-bar.module';
import { TableModule } from './table/table.module';
import { NgModule } from '@angular/core';
import { PresentationComponentsComponent } from './presentation-components.component';
import { CommonModule } from '@angular/common';
import { LangModule } from 'core-components-jmmacedo';
import { FormsModule } from '@angular/forms';

const AngularModules = [CommonModule, FormsModule];

const SanPresnModules = [
  TabsModule,
  HeaderModule,
  ButtonModule,
  FooterModule,
  UserBarModule,
  NavBarModule,
  InputModule,
  TableModule,
  UserBarModule
];

const NgCoreModules = [LangModule];

@NgModule({
  imports: [AngularModules, SanPresnModules, NgCoreModules],
  declarations: [PresentationComponentsComponent],
  exports: [
    PresentationComponentsComponent,
    TabsModule,
    HeaderModule,
    ButtonModule,
    FooterModule,
    UserBarModule,
    NavBarModule,
    InputModule,
    TableModule,
    UserBarModule
  ]
})
export class PresentationComponentsModule {}
