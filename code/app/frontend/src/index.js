"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
import react_1 from "react";
import client_1 from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import { initializeIcons } from "@fluentui/react";
import "./index.css";
import Layout_1 from "./pages/layout/Layout";
import NoPage_1 from "./pages/NoPage";
import Chat_1 from "./pages/chat/Chat";
(0, initializeIcons)();
function App() {
    return (<HashRouter>
            <Routes>
                <Route path="/" element={<Layout_1 />}>
                    <Route index element={<Chat_1 />}/>
                    <Route path="*" element={<NoPage_1 />}/>
                </Route>
            </Routes>
        </HashRouter>);
}
const _default = App;
export { _default as default };
client_1.createRoot(document.getElementById("root")).render(<react_1.StrictMode>
        <App />
    </react_1.StrictMode>);
