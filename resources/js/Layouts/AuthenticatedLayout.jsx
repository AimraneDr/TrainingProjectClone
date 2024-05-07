import { useState } from "react";
import { AuthProvider } from "@/Contexts/AuthContext";

export default function Authenticated({ user, children }) {
    const [sidebarToggle, setSidebarToggle] = useState(false);

    const toggleSidebar = (value) => {
        if (value === undefined || value === null)
            setSidebarToggle(!sidebarToggle);
        else {
            console.log("explicit call");
            setSidebarToggle(value);
        }
    };
    return (
        <AuthProvider userRef={user}>
            <div className="flex max-h-screen h-screen relative">
                {/* <!-- ===== Main Content Start ===== --> */}
                {children}
                {/* <!-- ===== Main Content End ===== --> */}
            </div>
        </AuthProvider>
    );
}
