"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const bs_1 = require("react-icons/bs");
const Panel_1 = tslib_1.__importDefault(require("./Panel"));
const DescriptionPanel = () => {
    return ((0, jsx_runtime_1.jsxs)(Panel_1.default, { initiallyDeployed: true, title: (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(bs_1.BsInfoCircle, { className: "text-muted" }), " Description"] }), children: [(0, jsx_runtime_1.jsxs)("p", { children: ["This actor network map shows the interconnected roles of various stakeholders in IVF and commercial surrogacy at BioTexCom, Ukraine. It includes intended parents, surrogates, legal entities, NGOs, media, and international bodies, illustrating the complex relationships and influences within the surrogacy industry. A thorough description of each affordance connection can be found", " "] }), (0, jsx_runtime_1.jsxs)("p", { children: ["A thorough description of each affordance connection can be found", " ", (0, jsx_runtime_1.jsx)("a", { href: "./Fully_Extended_Edges_Dataset_with_Expanded_Connections.csv", download: true, children: "here" }), "."] })] }));
};
exports.default = DescriptionPanel;
//# sourceMappingURL=DescriptionPanel.js.map