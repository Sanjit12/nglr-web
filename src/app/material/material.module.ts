import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material";
import { MatCheckboxModule } from "@angular/material/checkbox";

const MaterialComponents = [MatButtonModule, MatCheckboxModule];

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule {}
