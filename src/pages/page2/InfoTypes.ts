import * as z from "zod";

export const PersonalInfoSchema = z.object({
  name: z
    .string()
    .min(2)
    .regex(/^[ა-ჰ]+$/),
  surname: z
    .string()
    .min(2)
    .regex(/^[ა-ჰ]+$/),
  about_me: z.string().optional(),
  email: z
    .string()
    .email()
    .endsWith("@redberry.ge")
    .regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/),
  phone_number: z.string().startsWith("+995").length(13),
});
export type InfoSchemaType = z.infer<typeof PersonalInfoSchema>;
