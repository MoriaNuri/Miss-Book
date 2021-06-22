import reviewPreview from './review-preview.js';
export default {
    props: ['book'],
    template: `
    <ul class="review-list">
     <li v-for="review in book.review" >
        <review-preview :review="review"  @deleteReview="$emit('deleteReview',$event)" "/> /></review-preview>
</li>
</ul>

`,
    components: {
        reviewPreview,
    }
}