<template>
    <div>
        <v-sheet>
            <v-form @submit.prevent="submit">
                <v-text-field
                    :value="title"
                    @input="$emit('update:title', $event.target.value)"
                    label="Title"
                ></v-text-field>
                <v-text-field
                    :value="body"
                    @input="$emit('update:body', $event.target.value)"
                    label="Content"
                ></v-text-field>
                <v-btn type="submit" block class="mt-2">Submit</v-btn>
            </v-form>
        </v-sheet>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    emits: ['update:title', 'update:body', 'update:submit'],
    props: {
        title: String,
        body: String
    },
    methods: {
        submit() {
            this.$emit('update:submit', {title: this.title, content: this.body});
        }
    }
})
</script>
