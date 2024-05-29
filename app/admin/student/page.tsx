import { Button } from "@/components/ui/button";
import ListStudent from "./ListStudent";

export default function Student() {
    return (
        <div className="w-full flex flex-col justify-center mt-6">
            <div className="flex justify-center mb-6">
                <a href="/admin/student/new">
                    <Button>Cadastrar Estudante</Button>
                </a>
            </div>

            <ListStudent />
        </div>
    )
}
// w-full aumenta o tamanho da DIV