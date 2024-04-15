import { z } from "zod";
import { requiredStringField } from "@/utils/validations/reusableSchemes";

const emailRegex = /^(?![-.])[\w.-]+@(?![-.])[\w.-]+\.[a-zA-Z]{2,}$/;

export const createCandidateSchema = z.object({
  name: requiredStringField(1, 255, "O nome não pode estar vazio"),

  email: requiredStringField(1, 255, "O email não pode estar vazio").refine(
    (value) => value === null || emailRegex.test(value || "") || value === "",
    {
      message: "O email deve possuir este formato: exemplo@email.com",
    }
  ),

  phone: requiredStringField(1, 255, "O telefone não pode estar vazio"),

  postalCode: requiredStringField(1, 255, "O CEP não pode estar vazio"),

  state: requiredStringField(1, 255, "Digite o CEP para preencher o estado"),
  city: requiredStringField(1, 255, "Digite o CEP para preencher a cidade"),
  birthday: requiredStringField(1, 255, "A data não pode estar vazia"),

  job: requiredStringField(1, 255, "A vaga não pode estar vazia"),

  salary: requiredStringField(1, 255, "O salário não pode estar vazio"),
  plan: requiredStringField(1, 255, "O plano não pode estar vazio"),
});
