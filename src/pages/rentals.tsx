import AllPage from "@/components/AllPage";
import { rentals } from "@/data/mock";

export default function Rentals() {
    return <AllPage properties={rentals} selected="Rentals" />;
};