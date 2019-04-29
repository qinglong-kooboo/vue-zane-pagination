<template>
  <div class="pagination-wrapper">
    <ul class="pagination">
      <li
        v-if="currentIndex > 1"
        class="icon-left"
        @click="prePage"
      >
        <span class="iconfont icon-arrow_circle_leftx"></span>
      </li>
      <li
        v-if="pageSize > 1"
        :class="[ currentIndex === 1 ? 'bg-grey-dark' : '' ]"
        class="item pages"
        @click="backToFirst"
      >
        <span>1</span>
      </li>
      <li
        v-if="isMore"
        class="item eclipse"
      >
        <span>...</span>
      </li>
      <li
        v-for="(page, index) in showSize"
        :key="index"
        class="item pages"
        :class="[ currentIndex === page ? 'bg-grey-dark' : '' ]"
        @click="currentIndex = page"
      >
        <span>{{ page }}</span>
      </li>
      <li
        v-if="isLess"
        class="item eclipse"
      >
        <span>...</span>
      </li>
      <li
        :class="[ currentIndex === pageSize ? 'bg-grey-dark' : '' ]"
        class="item pages"
        @click="turnToLast"
      >
        <span>{{ pageSize }}</span>
      </li>
      <li
        class="icon-right"
        v-if="currentIndex < pageSize"
        @click="nextPage"
      >
        <span class="iconfont icon-arrow_circle_rightx"></span>
      </li>
    </ul>
  </div>
</template>

<script>
  import '../../assets/iconfont.css'

  export default {
    name: 'pagination',
    props: {
      pageSize: {
        type: Number,
        required: true
      },
      middleSize: {
        type: Number,
        default: 4
      }
    },
    data () {
      return {
        currentIndex: 1,
        moreIndex: 2
      }
    },
    computed: {
      showSize () {
        if (!this.pageSize) {
          return
        }
        if (this.pageSize < 3) {
          return []
        } else {
          // middle: except for the first one and the last one
          let middle = this.pageSize - 2
          let middleArr = []

          if (middle <= this.middleSize) {
            for (let i = 0; i < middle; i++) {
              middleArr.push(this.moreIndex + i)
            }
          } else {
            for (let i = 0; i < this.middleSize; i++) {
              middleArr.push(this.moreIndex + i)
            }
          }
          return middleArr
        }
      },
      isMore () {
        if (this.moreIndex === 2) {
          return false
        } else {
          return true
        }
      },
      isLess () {
        if (this.pageSize > (this.moreIndex + this.middleSize)) {
          return true
        } else {
          return false
        }
      }
    },
    methods: {
      nextPage () {
        this.currentIndex += 1
        if (this.currentIndex === this.pageSize) {
          return
        }
        if (this.currentIndex > this.moreIndex + this.middleSize - 1) {
          this.moreIndex += 1
        }
      },
      prePage () {
        this.currentIndex -= 1
        if (this.currentIndex === 1) {
          return
        }
        if (this.currentIndex < this.moreIndex) {
          this.moreIndex -= 1
        }
      },
      backToFirst () {
        this.currentIndex = 1
        this.moreIndex = 2
      },
      turnToLast () {
        this.currentIndex = this.pageSize
        this.moreIndex = this.pageSize - this.middleSize
      }
    }
  }

</script>
<style>
.pagination-wrapper {
  display: flex;
  justify-content: center;
}
.pagination {
  padding: 0;
  margin: 0;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
}

.bg-grey-dark {
  background-color: #718096;
}
.eclipse {
  font-weight: 700;
  line-height: 1rem !important;
}
.item {
  width: 1.5rem;
  height: 1.5rem;
  line-height: 1.5rem;
  margin-right: 0.25rem;
  margin-left: 0.25rem;
  text-align: center;
  color: #A0AEC0;
  border-radius: 50%;
  user-select: none;
  cursor: pointer;
}
.pages:hover {
  text-decoration:underline;
}
.iconfont {
  cursor: pointer;
  color: #CBD5E0;
}
.icon-left {
  margin-right: 1rem;
}
.icon-arrow_circle_rightx {
  margin-left: 1rem;
}
</style>
