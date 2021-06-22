import { bookService } from "../services/book-service.js";
import reviewAdd from "../cmps/review-add.js"
import reviewList from "../cmps/review-list.js"

export default {
    template: `
  <section v-if="book"class="book-details app-main">
  <img class="book-preview-img" :src="book.thumbnail" alt="book-cover">
      <h2>Book Details</h2>
      <h1>{{bookAge}}book</h1>
      <p>Author: {{book.authors[0]}}</p>
      <h1>{{bookDescription}} ( {{book.pageCount}} pages)</h1>
        <h1>Book Price:{{book.listPrice.amount}}{{currencyToUser}}</h1>
        <review-add :book="book" ></review-add>
            <router-link to="/book">Back</router-link>
            <review-list :book="book"></review-list>
            </section>
 `,

    data() {
        return {
            book: null
        };
    },

    created() {
        const { bookId } = this.$route.params;
        bookService.getById(bookId)
            .then(book => this.book = book);
    },

    computed: {
        currencyToUser() {
            switch (this.book.listPrice.currencyCode) {
                case 'EUR':
                    return '€';
                case 'USD':
                    return '$';
                case 'ILS':
                    return '₪'
            }

        },

        bookPrice() {
            return { 'red': this.book.listPrice.amount > 150, 'green': this.book.listPrice.amount < 20 }
        },
        bookAge() {
            const today = new Date().getFullYear();
            if (today - this.book.publishedDate >= 10) return 'Vetaren'
            else if (today - this.book.publishedDate < 1) return 'New'
        },
        bookDescription() {
            if (this.book.pageCount > 500) return 'Long reading'
            if (this.book.pageCount > 200 && this.pageCount <= 500) return 'Decent reading'
            if (this.book.pageCount < 100) return 'Light reading'
        },

    },


    components: {
        reviewAdd,
        reviewList
    }

};