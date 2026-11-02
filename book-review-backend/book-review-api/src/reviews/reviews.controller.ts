import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { ReviewsService } from './reviews.service';
import { CreateReviewDto } from './dto/create-review.dto';

@Controller('books/:bookId/reviews')
export class ReviewsController {
  constructor(private readonly reviewsService: ReviewsService) {}

  @Post()
  create(
    @Param('bookId', ParseIntPipe) bookId: number,
    @Body() dto: CreateReviewDto,
  ) {
    return this.reviewsService.create(bookId, dto);
  }

  @Get()
  findByBook(@Param('bookId', ParseIntPipe) bookId: number) {
    return this.reviewsService.findByBook(bookId);
  }
}
