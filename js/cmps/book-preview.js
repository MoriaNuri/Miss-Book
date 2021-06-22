export default {
    props: ['book'],
    template: `
<div v-if="book" class="book-preview">
<img class="book-preview-img" :src="book.thumbnail" alt="book-cover">
    <p>Book Title:{{book.title}}</p>
    <p>Book Price:{{book.listPrice.amount}}{{currencyToUser}}</p>
</div>

`,

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
        }
    },
    created() {
        // console.log(this.book.listPrice)
    }

};