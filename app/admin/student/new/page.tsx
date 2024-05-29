"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Student from "../page"
import { headers } from "next/headers"

const FormSchema = z.object({
    name: z.string().min(2, {
        message: "Nome precisa ter no minimo 2 caracteres",
    }),
    email: z.string().email({ message: "Digite o email correto" })
})

export default function SaveStudent() {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            name: "",
            email: "",
        },
    })

    async function onSubmit(student: z.infer<typeof FormSchema>) {
        const requestOption = {
            method: "POST",
            headers: { 'Content-Type': 'aapplication/json' },
            body: JSON.stringify(student)
        }
        const response = await fetch("https://server20241.vercel.app/students", requestOption)
        form.reset();
        alert("Estudante Cadastrado com Sucesso")
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Nome</FormLabel>
                            <FormControl>
                                <Input placeholder="Coloque seu nome aqui" {...field} />
                            </FormControl>
                            {/* <FormDescription>
                Nome de exibição.
              </FormDescription> */}
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input placeholder="Coloque seu email aqui" {...field} />
                            </FormControl>
                            {/* <FormDescription>
                Nome de exibição.
              </FormDescription> */}
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Enviar</Button>
            </form>
        </Form>
    )
}
