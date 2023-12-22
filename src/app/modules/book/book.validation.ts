import {z} from "zod";

export const createBookZodSchema = z.object({
  headers: z.object({
    authorization: z.string().nonempty({
      message: "Authorization is required",
    }),
  }),
  body: z
    .object({
      title: z.string().nonempty({
        message: "Title is required",
      }),
      author: z.string().nonempty({
        message: "Author is required",
      }),
      price: z.number({required_error: "Price is required"}),
      publicationDate: z.string({
        required_error: "Publication date is required",
      }),
      categoryId: z.string().nonempty({
        message: "Category Id is required",
      }),
      genre: z.string().nonempty({
        message: "genre is required",
      }),
    })
    .strict(),
});

export const updateCategoryZodSchema = z.object({
  headers: z.object({
    authorization: z.string().nonempty({
      message: "Authorization is required",
    }),
  }),
  body: z
    .object({
      title: z.string().optional(),
      author: z.string().optional(),
      price: z.number().optional(),
      publicationDate: z.string().optional(),
      genre: z.string().optional(),
      categoryId: z.string().nonempty().optional(),
    })
    .strict(),
});

export const deleteBookZodSchema = z.object({
  headers: z.object({
    authorization: z.string().nonempty({
      message: "Authorization is required",
    }),
  }),
});
