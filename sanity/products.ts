import { defineField,defineType } from "sanity";

export const products =defineType({
    name:'products',
    title:'Products',
    type:'document',
    fields:[
        defineField({
            name:'title',
            title:'Product Title',
            type:'string'
        }),
        defineField({
            name:'description',
            title:'Description',
            type:'text'
        }),
        defineField({
            name:'price',
            title:'Price',
            type:'number'
        }),
        defineField({
            name:'slug',
            title:'Slug',
            type:'slug',
            options:{
                source:'title',
                maxLength:200,
                slugify:(input:string)=>input.toLowerCase().replace(/\s+/g,'-').slice(0,200)
            }
        }),
        defineField({
            name:'trending',
            title:'Trending?',
            type:'boolean'
        }),
        defineField({
            name:'bestSeller',
            title:'Best Seller',
            type:'boolean'
        }),
        defineField({
            name:'category',
            title:'Product Category',
            type:'reference',
            to:[{type:'categories'}]
        }),
        defineField({
            name:'images',
            title:'Product Images',
            type:'array',
            of:[{type:'string'
            }]
            
        })
    ]
})