import {pgTable,varchar,integer,serial} from 'drizzle-orm/pg-core'
import {drizzle} from 'drizzle-orm/vercel-postgres';
import {sql} from '@vercel/postgres'


export const cartTable=pgTable('carttable',{
    id:serial('id').primaryKey(),
    user_id: varchar('user_id',{length:255}).notNull(),
    product_id:varchar('product_id',{length:255}).notNull(),
    quantity:integer('quantity').notNull(),
    price:integer('price').notNull(),
    image:varchar('image',{length:255}).notNull(),
    title:varchar('title',{length:255}).notNull()
}
)

export const db = drizzle(sql);