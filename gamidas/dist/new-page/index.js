"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.newPage = newPage;
const schematics_1 = require("@angular-devkit/schematics");
const core_1 = require("@angular-devkit/core");
// Entry point for the schematic
function newPage(options) {
    return (tree, _context) => {
        const templateSource = (0, schematics_1.apply)((0, schematics_1.url)('./files'), [
            (0, schematics_1.template)({
                ...core_1.strings,
                ...options,
            }),
            (0, schematics_1.move)(options.name || 'page'),
        ]);
        return (0, schematics_1.branchAndMerge)((0, schematics_1.mergeWith)(templateSource))(tree, _context);
    };
}
