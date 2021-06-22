export default {
    props: ['review'],
    template: `

        <div class="review">
         
            <span>Name:</span><span>{{review.fullName}}</span>
            <span>Rate:</span><span>{{review.rate}}</span>
       
         
            <span>Read at:</span><span>{{review.date}}</span>
       
         
            <span>Review:</span><span>{{review.txt}}</span>
       
        <button @click="removeReview()">X</button>
    </div>
    `,
    methods: {
        removeReview() {
            this.$emit('deleteReview')
        }
    }









}