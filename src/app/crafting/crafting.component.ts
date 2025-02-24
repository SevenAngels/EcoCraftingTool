import {ChangeDetectionStrategy, Component} from '@angular/core';
import {SkillsComponent} from './skills/skills.component';
import {InputsComponent} from './inputs/inputs.component';
import {OutputsComponent} from './outputs/outputs.component';

@Component({
  selector: 'app-crafting',
  imports: [
    SkillsComponent,
    InputsComponent,
    OutputsComponent
  ],
  templateUrl: './crafting.component.html',
  styleUrl: './crafting.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CraftingComponent {

}
