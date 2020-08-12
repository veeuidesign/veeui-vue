<template>
  <div class="vee-input" :class="inputClass">
      <vee-icon 
        :icon="prefixIcon" 
        v-if="prefixIcon"
      ></vee-icon>
      <input 
        :type="showPassword ? ( passwordVisible ? 'text' : 'password' ) : type" 
        :value="value" 
        :placeholder="placeholder" 
        :name="name"
        :disabled="disabled"
        ref="input"
        @input="$emit('input', $event.target.value)"
        @focus="$emit('focus', $event.target.value)"
        @change="$emit('change', $event)"
      >
      <vee-icon 
        :icon="suffixIcon" 
        v-if="suffixIcon"
      ></vee-icon>
      <vee-icon 
        icon="circle-close" 
        v-if="clearable" 
        @click.native="$emit('input','')"
        @mousedown.native.prevent
      ></vee-icon>
      <vee-icon 
        icon="view" 
        v-if="showPassword" 
        @click.native="changeStatus"
      ></vee-icon>
  </div>
</template>

<script>
export default {
    name: 'vee-input',
    data() {
        return {
            passwordVisible: false
        }
    },
    methods: {
        changeStatus() {
            this.passwordVisible = !this.passwordVisible;
            this.$nextTick(() => {
                this.$refs.input.focus()
            })
        }
    },
    props: {
        name: {
            type: String,
            default: null
        },
        type: {
            type: String,
            default: 'text'
        },
        placeholder: {
            type: String,
            default: '请输入内容'
        },
        value: {
            type: String,
            default: ''
        },
        disabled: {
            type: Boolean,
            default: false
        },
        clearable: {
            type: Boolean,
            default: false
        },
        showPassword: {
            type: Boolean,
            default: false
        },
        prefixIcon: String,
        suffixIcon: String
    },
    computed: {
        inputClass() {
            let classes = [];
            if(this.clearable || this.showPassword || this.suffixIcon) {
                classes.push(`vee-input-suffix-icon`);
            }
            if(this.prefixIcon) {
                classes.push(`vee-input-prefix-icon`);
            }
            return classes;
        }
    }
}
</script>

<style lang="scss">
@import '@/styles/_var.scss';
$border-color: #dcdfe6;

.vee-input {
    display: inline-flex;
    position: relative;
    
    input {
        padding: 8px;
        width: 150px;
        height: 42px;
        border-radius: $border-radius;
        border: 1px solid $border-color;

        &:focus {
            border: 1px solid $primary;
            outline: none;
            box-shadow: inset -1px 0px 2px $primary, inset 1px 1px 1px $primary;
        }

        &[disabled] {
            cursor: not-allowed;
            background: #eee;
        }
    }
}

.vee-input-suffix-icon {
    input {
        padding-right: 25px;
    }
    .vee-icon {
        right: 8px;
        top: 13px;
        position: absolute;
        cursor: pointer;
        width: 14.5px;
        height: 14.5px;
    }
    
}

.vee-input-prefix-icon {
    input {
        padding-left: 25px;
    }
    .vee-icon {
        left: 8px;
        top: 13px;
        position: absolute;
        cursor: pointer;
        width: 14.5px;
        height: 14.5px;
    }
    
}
</style>