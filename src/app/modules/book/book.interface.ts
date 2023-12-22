import {Book} from "@prisma/client";

export type IBooksWithMeta = {
  data: Book[];
  meta: {
    page: number;
    size: number;
    total: number;
    totalPage: number;
  };
};
