# Book Review API (NestJS + Prisma + SQLite)

## วิธีรัน
```bash
npm install
npx prisma generate
npx prisma db push      # สร้างตารางใน SQLite (prisma/dev.db)
npm run start:dev       # http://localhost:3000
```

## Endpoints
| Method | Path | คำอธิบาย |
|---|---|---|
| POST | /books | สร้างหนังสือ |
| GET | /books | รายการหนังสือ พร้อม reviews (nested) |
| GET | /books/:id | หนังสือ 1 เล่ม พร้อม reviews |
| PATCH | /books/:id | แก้ไขหนังสือ |
| DELETE | /books/:id | ลบหนังสือ (reviews ถูกลบตาม) |
| POST | /books/:bookId/reviews | เพิ่มรีวิวให้หนังสือเล่มนั้น |
| GET | /books/:bookId/reviews | รีวิวทั้งหมดของหนังสือ |

## ตัวอย่าง
```bash
curl -X POST localhost:3000/books -H "Content-Type: application/json" \
  -d '{"title":"Clean Code","author":"Robert C. Martin"}'

curl -X POST localhost:3000/books/1/reviews -H "Content-Type: application/json" \
  -d '{"rating":5,"content":"อ่านสนุกมาก"}'

curl localhost:3000/books
```

Validation: `rating` ต้องเป็นจำนวนเต็ม 1-5, `title`/`author`/`content` ห้ามว่าง
