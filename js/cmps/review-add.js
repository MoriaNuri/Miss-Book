import { bookService } from "../services/book-service.js"
export default {
    props: ['book'],
    template: `
     <section class="review-container">   
         <form @submit.prevent="onAddReview(book.id)">
             
             <label>
                 <input ref="fullName" v-model="review.fullName" type="text" >
                </label>

               <input v-model="review.date" type="date" >
               
               <input v-model="review.txt" type="txt" >


               <select  v-model="review.rate">
                   <option value="1">1</option>
                   <option value="2">2</option>
                   <option value="3">3</option>
                   <option value="4">4</option>
                   <option value="5">5</option>
                </select>

                <button>Submit</button>
            </form >
        </section>
        
    `,

    data() {
        return {
            review: {
                rate: 5,
                fullName: 'Books Reader',
                date: Date.now(),
                txt: 'Comment'

            }
        }
    },

    methods: {
        onAddReview(bookId) {
            bookService.addReview(bookId, this.review)
                // bookService.addReview(bookId, this.review)
        }

    },

    mounted() {


    }


}