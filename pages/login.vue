<template>
    <div class="flex items-center justify-center w-full  bg-slate-100 h-screen">
        <Card class="w-full h-full px-10 md:w-1/4 md:h-fit md:p-2">
            <template #header>
                <div class="flex items-center justify-center w-full p-10">
                    <img alt="user header" class=""
                        src="https://res.cloudinary.com/doc5sjt7o/image/upload/v1736214034/logo_full_text_zlokhj.png" />
                </div>
            </template>
            <template #content>
                <div class="flex flex-col gap-y-6">
                    <div class="flex flex-col gap-4">
                        <Message closable v-if="!username || !email" severity="error" class="mb-2">Validation
                            error
                        </Message>
                        <!--              <Message v-if="username && email" severity="success" icon="pi pi-times-circle" class="mb-2">Form is-->
                        <!--                valid-->
                        <!--              </Message>-->
                        <div class="grid gap-y-2">
                            <FloatLabel variant="in">
                                <InputText id="over_label" v-model="value1" class="flex w-full" />
                                <label for="over_label">Username</label>
                            </FloatLabel>
                            <FloatLabel variant="in">
                                <InputText id="over_label" v-model="value1" class="flex w-full" />
                                <label for="over_label">Password</label>
                            </FloatLabel>
                        </div>

                    </div>
                </div>
            </template>
            <template #footer>
                <div class="flex gap-4 mt-10">
                    <Button label="Login" class="w-full" />
                </div>
            </template>
        </Card>

    </div>
</template>
<script setup lang="ts">
</script>
