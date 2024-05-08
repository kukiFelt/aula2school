import { Button } from "@/components/ui/button";

export default function admin(){
    return(
        <div>
            <h1 className="text-center bg-red-500 font-bold">Bem vindo a Área Administrativa</h1>
            <Button>Salvar</Button>
            <Button variant="destructive">Excluir</Button>
            <Button variant={"secondary"}> Novo</Button>

        </div>
     )
}