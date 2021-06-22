import { bookService } from "../services/book-service.js";

export default {
    template: `
<section class="book-edit">
    <h3>add Book</h3>
    <form @submit.prevent="save">
    <label>Title:</label>
    <input v-model="bookToEdit.title" type="text">
    <label>Price:</label>
    <input v-model.number="bookToEdit.price" type="number" >
    <button>Save</button>
        </form>
        <pre>{{bookToEdit}}</pre>
    </section>  
`,
    data() {
        return {
            bookToEdit: null
                // bookToEdit: bookService.getEmptyBook()
        };
    },

    created() {
        const { bookId } = this.$route.params;
        if (bookId) {
            bookService.getById(bookId)
                .then(book => this.bookToEdit = book);
        } else {
            this.bookToEdit = bookService.getEmptyBook();
        }
    },

    computed: {
        title() {
            return this.$route.params.bookId ? 'Book Edit' : 'Book Add';
        }
    },

    methods: {
        save() {
            console.log('saving...');
            bookService.save(this.bookToEdit)
                .then(book => this.router.push('/book'));
            // this.bookToEdit = bookService.getEmptyBook()
        }
    }

};