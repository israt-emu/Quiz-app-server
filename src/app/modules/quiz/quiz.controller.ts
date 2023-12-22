import httpStatus from "http-status";
import {catchAsync} from "../../../shared/catchAsync";
import {sendResponse} from "../../../shared/sendResponse";
import {createQuizService, getQuizByCategoryService} from "./quiz.service";

export const createQuiz = catchAsync(async (req, res) => {
  const quiz = await createQuizService(req.body);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "quiz created successfully!",
    data: quiz,
  });
});

export const getQuizByCategory = catchAsync(async (req, res) => {
  const quizes = await getQuizByCategoryService(req?.params?.id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "quizes retrieved successfully!",
    data: quizes,
  });
});

export const getSingleQuiz = catchAsync(async (req, res) => {
  const quiz = await getSingleCategoryService(req.params.id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Category retrieved successfully!",
    data: quiz,
  });
});

export const updateOption = catchAsync(async (req, res) => {
  const {
    body,
    params: {id},
  } = req;
  const result = await updateOptionService(id, body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "option updated successfully!",
    data: result,
  });
});

export const deleteOption = catchAsync(async (req, res) => {
  const option = await deleteOptionService(req.params.id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "option deleted successfully!",
    data: option,
  });
});
