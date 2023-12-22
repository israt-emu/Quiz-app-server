import httpStatus from "http-status";
import {catchAsync} from "../../../shared/catchAsync";
import {createBookService, deleteBookService, getAllBookService, getBookByCategoryService, getSingleBookService, updateBookService} from "./book.service";
import {sendResponse} from "../../../shared/sendResponse";

export const getAllBooks = catchAsync(async (req, res) => {
  const book = await getAllBookService(req);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Books retrieved successfully!",
    data: book,
  });
});

export const getBookByCategory = catchAsync(async (req, res) => {
  const books = await getBookByCategoryService(req.params.categoryId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Book retrieved successfully!",
    data: books,
  });
});

export const createBook = catchAsync(async (req, res) => {
  const book = await createBookService(req.body);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Book created successfully!",
    data: book,
  });
});

export const getSingleBook = catchAsync(async (req, res) => {
  const book = await getSingleBookService(req.params.id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Book retrieved successfully!",
    data: book,
  });
});

export const updateBook = catchAsync(async (req, res) => {
  const {
    body,
    params: {id},
  } = req;
  const book = await updateBookService(id, body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Book updated successfully!",
    data: book,
  });
});

export const deleteBook = catchAsync(async (req, res) => {
  const book = await deleteBookService(req.params.id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Book deleted successfully!",
    data: book,
  });
});
