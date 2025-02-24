import {ChangeDetectionStrategy, Component} from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {CraftingComponent} from './crafting/crafting.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, FooterComponent, CraftingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
}
