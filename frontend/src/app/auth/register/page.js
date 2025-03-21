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
exports.default = Register;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const axios_1 = __importDefault(require("axios"));
function Register() {
    const [email, setEmail] = (0, react_1.useState)('');
    const [password, setPassword] = (0, react_1.useState)('');
    const [acceptTerms, setAcceptTerms] = (0, react_1.useState)(false);
    const [error, setError] = (0, react_1.useState)('');
    const handleSubmit = (e) => __awaiter(this, void 0, void 0, function* () {
        var _a, _b;
        e.preventDefault();
        if (!acceptTerms) {
            setError('You must accept the Terms and Privacy Policy.');
            return;
        }
        try {
            const response = yield axios_1.default.post($, { process, : .env.NEXT_PUBLIC_API_URL } / api / auth / register, {
                email,
                password,
                consent: { tos: true, privacy: true, cookies: true },
            });
            alert(response.data.message);
            window.location.href = '/auth/login';
        }
        catch (error) {
            setError('Registration failed: ' + ((_b = (_a = error.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.error));
        }
    });
    return ((0, jsx_runtime_1.jsx)("main", { className: 'min-h-screen flex items-center justify-center bg-gray-100', children: (0, jsx_runtime_1.jsxs)("div", { className: 'bg-white p-8 rounded-lg shadow-lg w-full max-w-md', children: [(0, jsx_runtime_1.jsx)("h1", { className: 'text-3xl font-bold text-center mb-6', children: "Sign Up for Lingovids" }), error && (0, jsx_runtime_1.jsx)("p", { className: 'text-red-500 text-center mb-4', children: error }), (0, jsx_runtime_1.jsxs)("form", { onSubmit: handleSubmit, className: 'space-y-4', children: [(0, jsx_runtime_1.jsx)("input", { type: 'email', placeholder: 'Email', value: email, onChange: (e) => setEmail(e.target.value), className: 'w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500', required: true }), (0, jsx_runtime_1.jsx)("input", { type: 'password', placeholder: 'Password', value: password, onChange: (e) => setPassword(e.target.value), className: 'w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500', required: true }), (0, jsx_runtime_1.jsxs)("label", { className: 'flex items-center', children: [(0, jsx_runtime_1.jsx)("input", { type: 'checkbox', onChange: (e) => setAcceptTerms(e.target.checked), className: 'mr-2' }), (0, jsx_runtime_1.jsxs)("span", { className: 'text-sm', children: ["I agree to the ", (0, jsx_runtime_1.jsx)("a", { href: '/terms', className: 'text-blue-500 underline', children: "Terms" }), " and ", (0, jsx_runtime_1.jsx)("a", { href: '/privacy', className: 'text-blue-500 underline', children: "Privacy Policy" })] })] }), (0, jsx_runtime_1.jsx)("button", { type: 'submit', disabled: !acceptTerms, className: 'bg-blue-600 text-white p-2 rounded w-full hover:bg-blue-700 transition', children: "Register" })] })] }) }));
}
