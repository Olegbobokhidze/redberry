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
  about_me: z.string().nullable(),
  email: z.string().email().endsWith("@redberry.ge"),
  phone_number: z.string().startsWith("+995").length(13),
  file: z.any(),
});
export type InfoSchemaType = z.infer<typeof PersonalInfoSchema>;
