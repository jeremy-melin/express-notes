<template>
    <div>
        <v-sheet>
            <v-form @submit.prevent>
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
import { defineComponent, type PropType } from 'vue';

export default defineComponent({
    emits: ['update:title', 'update:body'],
    props: {
        title: String,
        body: String
    },
    methods: {
        async submit(event: any) {
            console.log("event", event);
        }
    }
})
</script>
