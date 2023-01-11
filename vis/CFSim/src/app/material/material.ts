import { NgModule } from '@angular/core';

// material imports
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatSliderModule } from '@angular/material/slider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatPaginatorModule } from '@angular/material/paginator';

// holds all necessary modules
const MATERIAL_MODULES = [
    MatToolbarModule,   MatDividerModule,
    MatIconModule,      MatButtonModule,
    MatMenuModule,      MatTableModule,
    MatCardModule,      MatDialogModule,
    MatSelectModule,    MatSortModule,
    MatSliderModule,    MatExpansionModule,
    MatTooltipModule,   MatGridListModule,
    MatPaginatorModule
    
];

@NgModule({

    imports: MATERIAL_MODULES,
    exports: MATERIAL_MODULES

})

export class MaterialModule {}