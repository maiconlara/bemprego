import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  IconCurrencyReal,
  IconLocation,
  IconUser,
  IconMail,
  IconPhone,
  IconCalendar,
  IconMapPin,
  IconMapPins,
} from "@tabler/icons-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { createCandidateSchema } from "@/utils/validations/createCandidateSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { IconInput } from "@/components/ui/icon-input";
import { ReactNode } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { jobs } from "@/lib/jobs";
import { plans } from "@/lib/plans";

interface CreateUserModalProps {
  children: ReactNode;
}

const CandidateModal = ({ children }: CreateUserModalProps) => {
  const form = useForm<z.infer<typeof createCandidateSchema>>({
    resolver: zodResolver(createCandidateSchema),
    defaultValues: {
      name: "",
      email: "",
      postalCode: "",
      phone: "",
      state: "",
      city: "",
      birthday: "",
      job: "",
      salary: "",
      plan: "",
    },
  });

  function onSubmit(data: z.infer<typeof createCandidateSchema>) {
    console.log(data);
  }

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="font-poppins text-ribbon-950">
            Cadastro do Candidato
          </DialogTitle>
          <DialogDescription>
            Preencha os campos abaixo para se candidatar a vaga
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            id="user-form"
            className="grid grid-cols-2 gap-4 py-4"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="col-span-2">
                  <FormControl>
                    <IconInput
                      {...field}
                      placeholder="Nome completo"
                      Icon={IconUser}
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
                <FormItem className="col-span-2">
                  <FormControl>
                    <IconInput {...field} placeholder="Email" Icon={IconMail} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem className="col-span-1 ">
                  <FormControl>
                    <IconInput
                      {...field}
                      placeholder="Telefone"
                      Icon={IconPhone}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="birthday"
              render={({ field }) => (
                <FormItem className="col-span-1 ">
                  <FormControl>
                    <IconInput
                      {...field}
                      placeholder="Nascimento"
                      Icon={IconCalendar}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="postalCode"
              render={({ field }) => (
                <FormItem className="col-span-1">
                  <FormControl>
                    <IconInput
                      {...field}
                      placeholder="CEP"
                      Icon={IconLocation}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="state"
              render={({ field }) => (
                <FormItem className="col-span-1 ">
                  <FormControl>
                    <IconInput
                      {...field}
                      placeholder="Estado"
                      disabled
                      Icon={IconMapPin}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem className="col-span-1 ">
                  <FormControl>
                    <IconInput
                      {...field}
                      disabled
                      placeholder="Cidade"
                      Icon={IconMapPins}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="plan"
              render={({ field }) => (
                <FormItem className="col-span-1 ">
                  <FormControl>
                    <Select
                      onValueChange={(value) => {
                        form.setValue("plan", value);
                      }}
                    >
                      <SelectTrigger className="h-10 w-[180px] ">
                        <SelectValue placeholder="Plano escolhido" {...field} />
                      </SelectTrigger>
                      <SelectContent>
                        {plans.map((plan) => {
                          return (
                            <SelectItem key={plan.title} value={plan.title}>
                              {plan.title}
                            </SelectItem>
                          );
                        })}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="job"
              render={({ field }) => (
                <FormItem className="col-span-1 ">
                  <FormControl>
                    <Select
                      onValueChange={(value) => {
                        form.setValue("job", value);
                      }}
                    >
                      <SelectTrigger className="h-10 w-[180px] ">
                        <SelectValue
                          placeholder="Selecione uma vaga"
                          {...field}
                        />
                      </SelectTrigger>
                      <SelectContent>
                        {jobs.map((job) => {
                          return (
                            <SelectItem key={job.key} value={job.key}>
                              {job.value}
                            </SelectItem>
                          );
                        })}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="salary"
              render={({ field }) => (
                <FormItem className="col-span-1 ">
                  <FormControl>
                    <IconInput
                      {...field}
                      placeholder="Pretenção salárial"
                      Icon={IconCurrencyReal}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
        <DialogFooter>
          <Button
            type="submit"
            form="user-form"
            className="flex rounded-full font-semibold text-white py-2 px-6 justify-center items-center w-full max-w-[176px] bg-ribbon-600 hover:bg-ribbon-700 transition-colors "
          >
            Confirmar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
export default CandidateModal;
