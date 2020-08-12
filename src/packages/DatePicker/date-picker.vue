<template>
    <div class="vee-date-picker" v-click-outside="handleBlur">
        <vee-input suffix-icon="date" @focus="handleFocus" @change="handleChange" :value="formatDate"></vee-input>
        <div class="vee-date-picker-box" v-if="isVisible">
            <div class="vee-date-picker-content">
                <template v-if="mode == 'date'">
                    <div class="vee-date-picker-header">
                        <vee-icon icon="d-arrow-left" @click="changeYear(-1)"></vee-icon>
                        <vee-icon icon="arrow-left" @click="changeMonth(-1)"></vee-icon>
                        <span><b @click="mode = 'year'">{{tempTime.year}}</b>年 <b @click="mode = 'month'">{{tempTime.month + 1}}</b>月</span>
                        <vee-icon icon="arrow-right" @click="changeMonth(1)"></vee-icon>
                        <vee-icon icon="d-arrow-right" @click="changeYear(1)"></vee-icon>
                    </div>
                    <div>
                        <span class="cell cell-date" v-for="week in weeks" :key="week">{{week}}</span>
                    </div>
                    <div 
                      v-for="i in 6" 
                      :key="`row_${i}`"
                    >
                        <span 
                          class="cell cell-date"
                          @click="selectDate(getCurrentDate(i,j))"
                          :class="{
                            isNotCurrentMonth: !isCurrentMonth(getCurrentDate(i,j)),
                            isToday: isToday(getCurrentDate(i,j)),
                            isSelect: isSelect(getCurrentDate(i,j))
                          }" 
                          v-for="j in 7" 
                          :key="`col_${j}`"
                        >
                            {{getCurrentDate(i,j).getDate()}}
                        </span>
                    </div>
                </template>
                <template v-else-if="mode == 'year'">
                    <div class="vee-date-picker-header">
                        <vee-icon icon="d-arrow-left" @click="changeYear(-10)"></vee-icon>
                        <span><b @click="mode = 'year'">{{startYear}}</b>年 - <b @click="mode = 'year'">{{startYear + 9}}</b>年</span>
                        <vee-icon icon="d-arrow-right" @click="changeYear(10)"></vee-icon>
                    </div>
                    <div 
                      v-for="i in 3" 
                      :key="`row_${i}`"
                    >
                        <span 
                          class="cell cell-year"
                          @click="selectYear(getCurrentYear(i,j))"
                          v-for="j in 4"
                          :class="{
                            isToday: getCurrentYear(i,j) == tempTime.year,
                            yearHide: ( i==3 && j==3 ) || ( i==3 && j==4 ) 
                          }" 
                          :key="`col_${j}`"
                        >
                            {{getCurrentYear(i,j)}}
                        </span>
                    </div>
                </template>
                <template v-else-if="mode == 'month'">
                    <div class="vee-date-picker-header">
                        <vee-icon icon="arrow-left" @click="changeYear(-1)"></vee-icon>
                        <span><b @click="mode = 'year'">{{tempTime.year}}</b>年</span>
                        <vee-icon icon="arrow-right" @click="changeYear(1)"></vee-icon>
                    </div>
                    <div 
                      v-for="i in 3" 
                      :key="`row_${i}`"
                    >
                        <span 
                          class="cell cell-month"
                          @click="selectMonth(getCurrentMonth(i,j))"
                          v-for="j in 4" 
                          :key="`col_${j}`"
                          :class="{
                            isToday: mapMonth(getCurrentMonth(i,j)) == tempTime.month 
                          }" 
                        >
                            {{getCurrentMonth(i,j)}}
                        </span>
                    </div>
                </template>
            </div>
        </div>
    </div>
</template>

<script>
import clickOutside from 'v-click-outside';
import getYearMonthDay from './utils/time';
export default {
    name: 'vee-date-picker',
    directives: {
        clickOutside: clickOutside.directive
    },
    props: {
        date: {
            type: [String, Date],
            default: () => new Date()
        }
    },
    computed: {
        visibleDate() {
            let firstDay = new Date(this.tempTime.year, this.tempTime.month, 1),
                weekDay = firstDay.getDay();
            weekDay = weekDay == 0 ? 7 : weekDay;
            let start = firstDay - weekDay * 60 * 60 * 24 * 1000,
                arr = [];
            for( let i = 0; i < 42; i++ ) {
                arr.push(new Date(start + i * 60 * 60 * 24 * 1000));
            }
            return arr;
        },
        formatDate() {
            if(this.date) {
                const { year, month, day } = this.time;
                return `${year}-${(month + 1 + '').padStart(2,0)}-${(day + '').padStart(2,0)}`;
            }
        },
        startYear() {
            return this.tempTime.year - this.tempTime.year % 10;
        }
    },
    data() {
        const [year, month, day] = getYearMonthDay(this.date || new Date());
        return {
            isVisible: false,
            mode: 'date',
            weeks: ['日', '一', '二', '三', '四', '五', '六'],
            months: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
            time: { // 显示的时间
                year,
                month,
                day
            },
            tempTime: { // 操作的时间
                year,
                month,
                day
            }
        }
    },
    methods: {
        handleFocus() {
            this.isVisible = true;
        },
        handleBlur() {
            this.isVisible = false;
            this.mode = 'date';
        },
        handleChange(e) {
            const newValue = e.target.value;
            const reg = /^(\d{4})-(\d{1,2})-(\d{1,2})$/;
            if(newValue.match(reg)) {
                this.$emit('input', new Date(RegExp.$1, RegExp.$2 - 1, RegExp.$3));
            } else {
                e.target.value = this.formatDate;

            };
            this.handleBlur();
        },
        selectDate(date) {
            this.$emit('input', date);
            this.handleBlur();
        },
        selectYear(year) {
            this.tempTime.year = year;
            this.mode = 'month';
        },
        mapMonth(month) {
            switch (month) {
                case '一月':
                    return 0;
                case '二月':
                    return 1;
                case '三月':
                    return 2;
                case '四月':
                    return 3;
                case '五月':
                    return 4;
                case '六月':
                    return 5;
                case '七月':
                    return 6;
                case '八月':
                    return 7;
                case '九月':
                    return 8;
                case '十月':
                    return 9;
                case '十一月':
                    return 10;
                case '十二月':
                    return 11;
                default:
                    break;
            }
        },
        selectMonth(month) {
           this.tempTime.month = this.mapMonth(month)
            this.mode = 'date';
        },
        getCurrentDate(i,j) {
            return this.visibleDate[ ( i-1 ) * 7 + ( j-1 ) ]
        },
        getCurrentYear(i,j) {
            return this.startYear + 4 * ( i - 1 ) + ( j-1 );
        },
        getCurrentMonth(i,j) {
            return this.months[ 4 * ( i - 1 ) + ( j-1 ) ];
        },
        isCurrentMonth(date) {
            const { year, month } = this.tempTime;
            const [ y, m ] = getYearMonthDay(date);
            return year == y && month == m;
        },
        isToday (date) {
            const [ year, month, day ] = getYearMonthDay(new Date());
            const [ y, m, d ] = getYearMonthDay(date);
            return year == y && month == m && day == d;
        },
        isSelect(date) {
            const { year, month, day } = this.time;
            const [ y, m, d ] = getYearMonthDay(date);
            return year == y && month == m && day == d;
        },
        changeMonth(count) {
            const oldDate = new Date(this.tempTime.year, this.tempTime.month);
            const newDate = oldDate.setMonth(oldDate.getMonth() + count);
            const [ year, month ] = getYearMonthDay(new Date(newDate));
            this.tempTime.year = year;
            this.tempTime.month = month;
        },
        changeYear(count) {
            const oldDate = new Date(this.tempTime.year, this.tempTime.month);
            const newDate = oldDate.setFullYear(oldDate.getFullYear() + count);
            const [ year ] = getYearMonthDay(new Date(newDate));
            this.tempTime.year = year;
        }
    },
    watch: {
        date(newValue) {
            const [ year, month, day ] = getYearMonthDay(newValue);
            this.time = {
                year,
                month,
                day
            };
            this.tempTime = {
                ...this.time
            }
        }
    }
}
</script>

<style lang="scss">
@import '@/styles/_var.scss';
.vee-date-picker {
    display: inline-block;

    &-box {
        position: absolute;
        z-index: 10;
        user-select: none;
        width: 280px;
        background: #fff;
        box-shadow: 1px 1px 2px $primary, -1px -1px 2px $primary;
    }

    &-header {
        height: 40px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    &-content {
        
        .cell {
            display: inline-block;
            text-align: center;
            font-weight: bold;
        }

        .cell-date {
            width: 40px;
            height: 40px;
            line-height: 40px;
        }

        .cell-year,
        .cell-month {
            width: 70px;
            height: 70px;
            line-height: 70px;
        }

        .cell-date:hover:not(.isSelect):not(.isToday),
        .cell-year:hover:not(.isSelect):not(.isToday),
        .cell-month:hover:not(.isSelect):not(.isToday) {
            color: $primary;
        }

        .isNotCurrentMonth {
            color: $color-light;
        }

        .isToday {
            color: $primary;
            background-color: #fff;
        }

        .yearHide {
            display: none;
        }

        .isSelect {
            background-color: $primary;
            border-radius: 50%;
            color: #fff;
        }
    }
}
</style>