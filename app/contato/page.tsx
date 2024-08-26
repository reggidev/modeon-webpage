"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "../_components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../_components/ui/form"
import { Input } from "../_components/ui/input"
import { Textarea } from "../_components/ui/textarea"
import { Checkbox } from "../_components/ui/checkbox"
import { toast } from "sonner"

const FormSchema = z.object({
  name: z.string().min(4, {
    message: "Seu nome deve conter pelo menos 4 caracteres",
  }),
  company: z.string().min(2, {
    message: "O nome da empresa deve conter pelo menos 2 caracteres",
  }),
  email: z.string().email({
    message: "Por favor, insira um e-mail válido",
  }),
  phone: z.string().min(10, {
    message: "Por favor, insira um telefone válido",
  }),
  message: z.string().min(10, {
    message: "A mensagem deve conter pelo menos 10 caracteres",
  }),
  consent: z.boolean().refine((val) => val === true, {
    message: "Você deve aceitar para continuar",
  }),
})

export default function InputForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      message: "",
      consent: false,
    },
  })

  function onSubmit() {
    try {
      toast.success("Formulário enviado com sucesso")
    } catch (error) {
      toast.error("Não foi possível enviar seu formulário. Tente novamente")
    } finally {
      form.reset()
    }
  }

  return (
    <div className="mx-auto flex min-h-full max-w-5xl items-center justify-center">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-2/3 space-y-6"
        >
          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome</FormLabel>
                  <FormControl>
                    <Input placeholder="Digite seu nome completo" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Empresa</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Digite o nome da sua empresa"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>E-mail</FormLabel>
                  <FormControl>
                    <Input placeholder="agencia@modeon.com.br" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Telefone</FormLabel>
                  <FormControl>
                    <Input placeholder="(xx) xxxxx-xxxx" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="col-span-2">
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mensagem</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Digite sua mensagem" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="col-span-2 items-center px-24 text-center">
              <FormField
                control={form.control}
                name="consent"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <FormLabel className="ml-1">
                      Ao selecionar esta caixa e enviar seus dados, você nos
                      autoriza a te enviar e-mails. Você pode cancelar a
                      qualquer momento.
                    </FormLabel>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className="flex w-full items-center justify-center">
            <Button type="submit">Enviar</Button>
          </div>
        </form>
      </Form>
    </div>
  )
}
