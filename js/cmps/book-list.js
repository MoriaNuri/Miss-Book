import bookPreview from "./book-preview.js";

export default {

    props: ['books'],
    template: `
 <ul class="book-list">
     <li v-for="book in books" :key="book.id" class="book-preview-container">
        <book-preview :book="book" @click.native=log(book.id) />
        <div class="actions">
            <button @click="remove(book.id)">X</button>
            <router-link :to="'/book/'+book.id">Details></router-link>
            <router-link :to="'/book/edit/'+book.id">edit></router-link>
        </div>
        </li>
       </ul>
 `,


    methods: {
        remove(bookId) {
            this.$emit('remove', bookId);
        },

        log(bookId) {
            console.log('logging th id', bookId);
        }

    },
    components: {
        bookPreview
    }

};