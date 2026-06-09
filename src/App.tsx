import { PortalHost } from "@rn-primitives/portal";
import { NativeRouter, Route, Routes } from "react-router-native";

import { DetailsScreen } from "@/screens/Details";
import { HomeScreen } from "@/screens/Home";

export default function App() {
    return (
        <NativeRouter
            future={{ v7_relativeSplatPath: true, v7_startTransition: true }}
        >
            <Routes>
                <Route path="/" element={<HomeScreen />} />
                <Route path="/details" element={<DetailsScreen />} />
            </Routes>
            <PortalHost />
        </NativeRouter>
    );
}
