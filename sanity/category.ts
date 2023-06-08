import { defineField,defineType } from "sanity";

export const category= defineType({
    name:'categories',
    title:'Categories',
    type:'document',
    fields:[
        defineField({
            name:'category',
            title:'Category',
            type:'string'
        })
    ]
})