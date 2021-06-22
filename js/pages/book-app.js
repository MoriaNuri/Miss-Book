import { bookService } from "../services/book-service.js";
import bookList from "../cmps/book-list.js";
import bookFilter from "../cmps/book-filter.js";
// import bookDetails from "../pages/book-deatails.js";
// import bookEdit from "../pages/book-edit.js";
import { eventBus } from "../services/event-bus-service.js";


export default {
    template: `
<section class="book-app app-main">
 <!-- <book-details v-if="selectedBook" :book="selectedBook" @back="closeDetails"></book-details> -->
<!-- <div v-else> -->
<book-filter @filtered="setFilter"></book-filter>
 <book-list :books="booksToShow" @remove="removeBook"></book-list> 
 <router-link to="/book/edit">Add a new book</router-link>
 <!-- </div> -->
<!-- <book-edit/> -->
</section>

`,

    data() {
        return {
            // books: bookService.query(),
            books: [],
            filterBy: null,
            // selectedBook: null
        };
    },

    created() {
        this.loadBooks();
    },
    methods: {
        loadBooks() {
            bookService.query()
                .then(books => this.books = books)
        },
        removeBook(id) {
            bookService.remove(id)
                .then(() => {
                    const msg = {
                        txt: 'Deleted successfuly',
                        type: 'success'
                    };
                    eventBus.$emit('show-msg', msg);
                    this.loadBooks();
                })
                .catch(err => {
                    const msgg = {
                        txt: 'Error, please try again',
                        type: 'error'
                    };
                    eventBus.$emit('show-msg', msg);
                });
            bookService.remove(bookId);
        },

        // selectBook(book) {
        //     this.selectedBook = book;
        // },

        // closeDetails() {
        //     this.selectedBook = null
        // },

        setFilter(filterBy) {
            console.log('filterBy: ', filterBy);
            this.filterBy = filterBy
        },


        // openDetails(bookId) {
        //     const book = this.books.find(book => {
        //         return book.id === bookId
        //     })
        //     this.selectedBook = book
        // },


    },

    computed: {
        booksToShow() {
            if (!this.filterBy) return this.books;
            if (!this.filterBy.title && !this.filterBy.minPrice && !this.filterBy.maxPrice) return this.books;
            console.log('booktoShow:', this.filterBy)
            const searchStr = this.filterBy.title.toLowerCase();
            const minPrice = this.filterBy.minPrice;
            const maxPrice = this.filterBy.maxPrice;

            const booksToShow = this.books.filter(book => {
                return (book.title.toLowerCase().includes(searchStr) && book.listPrice.amount >= minPrice && book.listPrice.amount <= maxPrice)
                console.log(book.listPrice.amount)
                console.log(minPrice)
                return (book.title.toLowerCase().includes(searchStr))

            })
            console.log(booksToShow)
            return booksToShow;
        }
    },

    components: {

        bookList,
        bookFilter,
        // bookDetails,
        // bookEdit,
    }

};