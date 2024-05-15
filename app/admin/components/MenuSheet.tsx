import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import Aside from "./Aside"
import { Menu } from "lucide-react"

export function MenuSheet() {
    return (
        <div className="fixed top-0 left-0 md:hidden">
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="outline"><Menu /></Button>
                </SheetTrigger>
                <SheetContent side="left">
                    <Aside className="block" / >
                </SheetContent>
            </Sheet>
        </div>
        // fixed top-0 left-0 fica fixo no topo no canto esquerdo
        // md:hidden faz sumir apos tablet
    )
}
