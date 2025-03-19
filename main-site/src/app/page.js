"use strict";
'use client';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Home;
const jsx_runtime_1 = require("react/jsx-runtime");
const link_1 = __importDefault(require("next/link"));
function Home() {
    return ((0, jsx_runtime_1.jsx)("main", { className: 'min-h-screen bg-gray-100', children: (0, jsx_runtime_1.jsxs)("section", { className: 'flex flex-col items-center justify-center p-10 text-center', children: [(0, jsx_runtime_1.jsx)("h1", { className: 'text-5xl font-bold mb-4', children: "Welcome to MAS-AI" }), (0, jsx_runtime_1.jsx)("p", { className: 'text-xl mb-8', children: "Explore our multilingual video platform" }), (0, jsx_runtime_1.jsx)(link_1.default, { href: 'http://lingovid.mas-ai.co', className: 'bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition', children: "Visit Lingovids" })] }) }));
}
