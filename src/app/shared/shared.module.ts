import { NgModule } from '@angular/core';
import { ColorDirective } from 'src/chef/color.directive';
import { TrimDirective } from 'src/chef/trim.directive';
import { UpperCasePipe } from 'src/app/shared/pipe/upper-case.pipe';
import { ButtonModule } from 'primeng/button';
import { ReplaceWithPipe } from './pipe/replaceWith.pipe';

@NgModule({
  imports: [ButtonModule],
  exports: [UpperCasePipe, TrimDirective, ColorDirective, ButtonModule, ReplaceWithPipe],
  declarations: [UpperCasePipe, TrimDirective, ColorDirective, ReplaceWithPipe],
})
export class SharedModule {}
