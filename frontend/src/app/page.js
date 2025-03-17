"use strict";
'use client';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Home;
const jsx_runtime_1 = require("react/jsx-runtime");
const link_1 = __importDefault(require("next/link"));
const framer_motion_1 = require("framer-motion");
function Home() {
    return ((0, jsx_runtime_1.jsx)("main", { className: 'min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white', children: (0, jsx_runtime_1.jsxs)("section", { className: 'flex flex-col items-center justify-center p-10 text-center', children: [(0, jsx_runtime_1.jsx)(framer_motion_1.motion.h1, { initial: { opacity: 0, y: -50 }, animate: { opacity: 1, y: 0 }, transition: { duration: 1 }, className: 'text-5xl font-bold mb-4', children: "Welcome to Lingovids MAS-AI" }), (0, jsx_runtime_1.jsx)(framer_motion_1.motion.p, { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { delay: 0.5, duration: 1 }, className: 'text-xl mb-8', children: "Translate and Dub Any Video to Any Language in Minutes!" }), (0, jsx_runtime_1.jsxs)("div", { className: 'space-x-4', children: [(0, jsx_runtime_1.jsx)(link_1.default, { href: '/auth/login', className: 'bg-white text-blue-600 px-6 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition', children: "Login" }), (0, jsx_runtime_1.jsx)(link_1.default, { href: '/auth/register', className: 'bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-green-600 transition', children: "Get Started" })] })] }) }));
}
