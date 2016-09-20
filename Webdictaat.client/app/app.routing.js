"use strict";
var router_1 = require('@angular/router');
var dictaten_component_1 = require('./dictaten/dictaten.component');
var dictaat_component_1 = require('./dictaat/dictaat.component');
var appRoutes = [
    { path: '', redirectTo: '/dictaten', pathMatch: 'full' },
    {
        path: 'dictaten',
        component: dictaten_component_1.DictatenComponent
    },
    {
        path: 'dictaten/:dictaatName',
        component: dictaat_component_1.DictaatComponent
    },
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map