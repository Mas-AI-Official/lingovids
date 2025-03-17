"use strict";
'use client';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Translate;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const axios_1 = __importDefault(require("axios"));
function Translate() {
    const [videoUrl, setVideoUrl] = (0, react_1.useState)('');
    const [language, setLanguage] = (0, react_1.useState)('en');
    const [loading, setLoading] = (0, react_1.useState)(false);
    const handleSubmit = (e) => __awaiter(this, void 0, void 0, function* () {
        var _a, _b;
        e.preventDefault();
        setLoading(true);
        try {
            const response = yield axios_1.default.post($, { process, : .env.NEXT_PUBLIC_API_URL } / api / videos / translate, {
                videoUrl,
                language,
            });
            alert('Translation started: ' + response.data.message);
        }
        catch (error) {
            alert('Error: ' + ((_b = (_a = error.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.error));
        }
        finally {
            setLoading(false);
        }
    });
    return ((0, jsx_runtime_1.jsxs)("main", { className: 'min-h-screen p-10 bg-gray-100', children: [(0, jsx_runtime_1.jsx)("h1", { className: 'text-4xl font-bold text-center mb-8', children: "Translate Video" }), (0, jsx_runtime_1.jsxs)("form", { onSubmit: handleSubmit, className: 'max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg space-y-6', children: [(0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("label", { className: 'block text-gray-700 mb-2', children: "Video URL" }), (0, jsx_runtime_1.jsx)("input", { type: 'text', placeholder: 'Enter video URL (YouTube, Vimeo, TikTok)', value: videoUrl, onChange: (e) => setVideoUrl(e.target.value), className: 'w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500', required: true })] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("label", { className: 'block text-gray-700 mb-2', children: "Target Language" }), (0, jsx_runtime_1.jsxs)("select", { value: language, onChange: (e) => setLanguage(e.target.value), className: 'w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500', children: [(0, jsx_runtime_1.jsx)("option", { value: 'en', children: "English" }), (0, jsx_runtime_1.jsx)("option", { value: 'es', children: "Spanish" }), (0, jsx_runtime_1.jsx)("option", { value: 'fr', children: "French" })] })] }), (0, jsx_runtime_1.jsx)("button", { type: 'submit', disabled: loading, className: 'w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700 transition', children: loading ? 'Processing...' : 'Start Translation' })] })] }));
}
