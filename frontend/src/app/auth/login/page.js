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
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Login;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("next-auth/react");
const react_2 = require("react");
const fa_1 = require("react-icons/fa");
function Login() {
    const [email, setEmail] = (0, react_2.useState)('');
    const [password, setPassword] = (0, react_2.useState)('');
    const [error, setError] = (0, react_2.useState)('');
    const handleOAuthLogin = (provider) => (0, react_1.signIn)(provider, { callbackUrl: '/dashboard' });
    const handleSubmit = (e) => __awaiter(this, void 0, void 0, function* () {
        e.preventDefault();
        const result = yield (0, react_1.signIn)('credentials', { redirect: false, email, password });
        if (result === null || result === void 0 ? void 0 : result.error)
            setError('Invalid email or password');
        else
            window.location.href = '/dashboard';
    });
    return ((0, jsx_runtime_1.jsx)("main", { className: 'min-h-screen flex items-center justify-center bg-gray-100', children: (0, jsx_runtime_1.jsxs)("div", { className: 'bg-white p-8 rounded-lg shadow-lg w-full max-w-md', children: [(0, jsx_runtime_1.jsx)("h1", { className: 'text-3xl font-bold text-center mb-6', children: "Login to Lingovids" }), error && (0, jsx_runtime_1.jsx)("p", { className: 'text-red-500 text-center mb-4', children: error }), (0, jsx_runtime_1.jsxs)("div", { className: 'space-y-4', children: [(0, jsx_runtime_1.jsxs)("button", { onClick: () => handleOAuthLogin('google'), className: 'flex items-center justify-center bg-red-600 text-white p-2 rounded w-full hover:bg-red-700 transition', children: [(0, jsx_runtime_1.jsx)(fa_1.FaGoogle, { className: 'mr-2' }), " Login with Google"] }), (0, jsx_runtime_1.jsxs)("button", { onClick: () => handleOAuthLogin('facebook'), className: 'flex items-center justify-center bg-blue-800 text-white p-2 rounded w-full hover:bg-blue-900 transition', children: [(0, jsx_runtime_1.jsx)(fa_1.FaFacebook, { className: 'mr-2' }), " Login with Facebook"] }), (0, jsx_runtime_1.jsxs)("button", { onClick: () => handleOAuthLogin('github'), className: 'flex items-center justify-center bg-gray-800 text-white p-2 rounded w-full hover:bg-gray-900 transition', children: [(0, jsx_runtime_1.jsx)(fa_1.FaGithub, { className: 'mr-2' }), " Login with GitHub"] }), (0, jsx_runtime_1.jsxs)("button", { onClick: () => handleOAuthLogin('yahoo'), className: 'flex items-center justify-center bg-purple-600 text-white p-2 rounded w-full hover:bg-purple-700 transition', children: [(0, jsx_runtime_1.jsx)(fa_1.FaYahoo, { className: 'mr-2' }), " Login with Yahoo"] }), (0, jsx_runtime_1.jsxs)("form", { onSubmit: handleSubmit, className: 'space-y-4', children: [(0, jsx_runtime_1.jsx)("input", { type: 'email', placeholder: 'Email', value: email, onChange: (e) => setEmail(e.target.value), className: 'w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500', required: true }), (0, jsx_runtime_1.jsx)("input", { type: 'password', placeholder: 'Password', value: password, onChange: (e) => setPassword(e.target.value), className: 'w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500', required: true }), (0, jsx_runtime_1.jsx)("button", { type: 'submit', className: 'bg-blue-600 text-white p-2 rounded w-full hover:bg-blue-700 transition', children: "Login with Email" })] })] })] }) }));
}
