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
export const ExpSchema = z.object({
  experiences: z.array(
    z.object({
      position: z.string(),
      employer: z.string().min(2),
      start_date: z.string().min(1),
      due_date: z.string().min(1),
      description: z.string(),
    })
  ),
});
export const EduSchema = z.object({
  educations: z.array(
    z.object({
      institute: z.string().min(1),
      degree_id: z.number(),
      due_date: z.string().min(1),
      description: z.string(),
    })
  ),
});
export type EduTypes = z.infer<typeof EduSchema>;
export type ExpTypes = z.infer<typeof ExpSchema>;
export type InfoSchemaType = z.infer<typeof PersonalInfoSchema>;
