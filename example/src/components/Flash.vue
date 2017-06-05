<template>
    <div v-show="show">
        <strong :class="alertType" v-text="body"></strong>
    </div>
</template>

<script>
export default {
    // name: 'Flash',
    props: ['data', 'events'],
    data () {
        return {
            body: '',
            level: '',
            show: false
        }
    },

    computed: {
        alertType() {
            let availableLevels = ['success', 'info', 'warning', 'danger'];
            let level = 'success';

            if(availableLevels.indexOf(this.level) != -1) {
                level = this.level;
            }

            return ['alert', 'alert-' + level];
        }
    },

    created() {
        if(this.data) {
            this.flash(this.data);
        }

        if(this.events == 'on') {
            window.events.$on('flash', data => this.flash(data));
        }        
    },

    methods: {
        flash(data) {
            if (typeof data === 'object') {
                return this.display(data.message, data.level);
            }

            if (typeof data === 'string') {
                return this.display(data);
            }            

            return this.display('Unacceptable data type', 'danger');            
        },

        display(message, level = 'success') {
            this.body = message;
            this.level = level;
            this.show = true;   

            this.hide();
        },

        hide() {
            setTimeout( () => this.show = false, 3000);
        }
    }
}
</script>

<style lang="scss" scoped>
.alert {
    padding: 10px;
    position: fixed;
    right: 25px;
    bottom: 25px;
}
.alert-success {
    background-color: #00b1b3;
    color: #fff;
}

.alert-info {
    background-color: blue;
    color: #fff;
}

.alert-warning {
    background-color: orange;
    color: #777;
}  

.alert-danger {
    background-color: red;
    color: #fff;
}  

</style>
