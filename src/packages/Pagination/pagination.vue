<template>
  <ul class="vee-pagination">
      <li>
          <vee-icon icon="arrow-left"></vee-icon>
      </li>
      <li>
          <span>1</span>
      </li>
      <li v-if="showPrevMore">
          <span>...</span>
      </li>
      <li v-for="p in pagers" :key="p">
          <span>{{p}}</span>
      </li>
      <li v-if="showNextMore">
          <span>...</span>
      </li>
      <li>
          <span>{{total}}</span>
      </li>
      <li>
          <vee-icon icon="arrow-right"></vee-icon>
      </li>
  </ul>
</template>

<script>
export default {
    name: 'vee-pagination',
    props: {
        total: {
            type: Number,
            default: 1
        },
        pagerCount: {
            type: Number,
            default: 7
        },
        currentPage: {
            type: Number,
            default: 1
        }
    },
    data() {
        return {
            showPrevMore: false,
            showNextMore: false
        }
    },
    computed: {
        pagers() {
            let total = this.total,
                pagerCount = this.pagerCount,
                currentPage = this.currentPage;
            let arr = [],
                middleValue = Math.floor(this.pagerCount / 2),
                showPrevMore = false,
                showNextMore = false,
                start = total - (pagerCount - 2),
                val = Math.floor((pagerCount - 2) / 2);
            if(total > pagerCount) {
                if(currentPage > middleValue +1) {
                    showPrevMore = true;
                } else if (currentPage < total - middleValue) {
                    showNextMore = true;
                }
            }
            if(showPrevMore && !showNextMore) {
                for( let i = start; i < total; i++) {
                    arr.push(i)
                }
            } else if (!showPrevMore && showNextMore) {
                for(let i = 2; i < pagerCount; i++) {
                    arr.push(i);
                }
            } else if (showPrevMore && showNextMore) {
                for(let i = currentPage - val; i <= currentPage + val; i++) {
                    arr.push(i)
                }
            } else {
                for(let i = 2; i< total; i++) {
                    arr.push(i);
                }
            }

            this.showPrevMore = showNextMore;
            this.showNextMore = showNextMore;
            return arr;
        }
    }
}
</script>

<style lang="scss">
.vee-pagination {
    list-style: none;
    display: inline-flex;
    vertical-align: middle;
}
</style>