import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';

import {
  CreateQuestionsFeedbackDto,
  GetQuestionsFeedbackDto,
  UpdateQuestionsFeedbackDto,
} from '../_dtos/Dtos';
import { QuestionsFeedbackService } from './questionsfeedback.service';

@Controller('questionsFeedback')
export class QuestionsFeedbackController {
  constructor(private readonly _QuestionFeedbackService: QuestionsFeedbackService) { }

  @Post()
  async createQuestionData(@Body() CreateQuestionsFeedbackDto: CreateQuestionsFeedbackDto): Promise<CreateQuestionsFeedbackDto> {
    return this._QuestionFeedbackService.createQuestionData(CreateQuestionsFeedbackDto);
  }

  @Get()
  findAll(@Query() query):Promise<GetQuestionsFeedbackDto[]> {
    return this._QuestionFeedbackService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string):Promise<GetQuestionsFeedbackDto> {
    return this._QuestionFeedbackService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() UpdateQuestionsFeedbackDto: UpdateQuestionsFeedbackDto
  ):Promise<String> {
    return this._QuestionFeedbackService.update(id, UpdateQuestionsFeedbackDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string):Promise<String> {
    return this._QuestionFeedbackService.remove(id);
  }
}
