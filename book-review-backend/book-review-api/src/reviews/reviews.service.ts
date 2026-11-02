import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateReviewDto } from './dto/create-review.dto';

@Injectable()
export class ReviewsService {
  constructor(private readonly prisma: PrismaService) {}

  // Step 3: post a review for a specific book
  async create(bookId: number, dto: CreateReviewDto) {
    const book = await this.prisma.book.findUnique({ where: { id: bookId } });
    if (!book) throw new NotFoundException(`Book #${bookId} not found`);

    return this.prisma.review.create({
      data: { rating: dto.rating, content: dto.content, bookId },
    });
  }

  async findByBook(bookId: number) {
    const book = await this.prisma.book.findUnique({ where: { id: bookId } });
    if (!book) throw new NotFoundException(`Book #${bookId} not found`);

    return this.prisma.review.findMany({
      where: { bookId },
      orderBy: { id: 'asc' },
    });
  }
}
