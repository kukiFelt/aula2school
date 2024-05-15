import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { BookA, Home, MailCheck, PersonStanding } from "lucide-react";

export default function Aside({ className }: any) {
    return (
        <div className={cn("hidden md:block size-1/6", className)}>
            <div className="flex flex-col space-y-2">
                <h2 className="font-bold">Dashboard</h2>
                <a href="/admin">
                    <Button variant="ghost">
                        <Home className="mr-2" />Home
                    </Button>
                </a>
                <a href="/admin/student">
                    <Button variant="ghost">
                        <PersonStanding className="mr-2" />
                        Estudante
                    </Button>
                </a>
                <a href="/admin/courses">
                    <Button variant="ghost">
                        <MailCheck className="mr-2" />
                        Cursos
                    </Button>
                </a>
                <h2 className="font-bold">Configuração</h2>
                <a href="/admin/student">
                    <Button variant="ghost">
                        <BookA className="mr-2" />
                        Conta
                    </Button>
                </a>

            </div>
        </div>
        // flex justify-evenly FAZ COM QUE SEPARA AS TAGS
        // flex justify-betwen faz as tags dos cantos ficar no final
        // border-b-2 para por borda em baixo
        // p-6 espaçamento do meio
        // flex fica um do lado do outro
        // flex flex-col deixa em coluna
        // size-2/6 tamanho vertical
        // hidden DEIXA TUDO ESCONDIDO
    )
}