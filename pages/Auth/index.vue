<script setup lang="ts">
import { Tab, TabPanel } from "@headlessui/vue";
import { useDataAuth } from "~~/composition/auth/useDataAuth";
import { useValidationAuthLogin } from "~~/composition/auth/useValidationAuthLogin";
import { useValidationAuthSignup } from "~~/composition/auth/useValidationAuthSignup";
import { Auth } from "~~/shared/constants";

const formLogin = reactive({ email: "", password: "" });
const formSignup = reactive({
    email: "",
    name: "",
    password: "",
    confirmPassword: "",
});

const { mapInputInfo, mapAuthForm, mapAuthButtons, mapAuthTabs } = useDataAuth({
    formLogin,
    formSignup,
});

const {
    isFormValid: isLoginFormValid,
    touch: touchLogin,
    getMessage: getMessageLogin,
    isDirtyAndError: isDirtyAndErrorLogin,
    getStatusValidation: getStatusValidationLogin,
} = useValidationAuthLogin(formLogin);
const {
    isFormValid: isSignupFormValid,
    touch: touchSignup,
    getMessage: getMessageSignup,
    isDirtyAndError: isDirtyAndErrorSignup,
    getStatusValidation: getStatusValidationSignup,
} = useValidationAuthSignup(formSignup);

const mapAuthFormValidation = {
    [Auth.LOGIN]: {
        touch: touchLogin,
        getMessage: getMessageLogin,
        isDirtyAndError: isDirtyAndErrorLogin,
        getStatusValidation: getStatusValidationLogin,
        isFormValid: isLoginFormValid,
    },
    [Auth.SIGNUP]: {
        touch: touchSignup,
        getMessage: getMessageSignup,
        isDirtyAndError: isDirtyAndErrorSignup,
        getStatusValidation: getStatusValidationSignup,
        isFormValid: isSignupFormValid,
    },
};
</script>

<template>
    <NuxtLayout name="auth">
        <TemplateAuth>
            <template #tabs-control>
                <Tab
                    v-for="mapAuthTab in Object.values(mapAuthTabs)"
                    :key="mapAuthTab"
                    v-slot="{ selected }"
                    as="template"
                >
                    <AtomAuthTabButton :selected="selected">
                        {{ mapAuthTab }}
                    </AtomAuthTabButton>
                </Tab>
            </template>

            <template #tabs-content>
                <TabPanel
                    v-for="(inputs, formCategory) in mapInputInfo"
                    :key="formCategory"
                    class="h-full focus:outline-none"
                >
                    <TemplateAuthForm
                        :submit-auth-handler="
                            mapAuthButtons[formCategory].handler
                        "
                    >
                        <template v-for="input in inputs" :key="input.id">
                            <TemplateAuthFormControl>
                                <MoleculeVInput
                                    :id="input.id"
                                    v-model="
                                        mapAuthForm[formCategory][input.id]
                                    "
                                    :status-validation="
                                        mapAuthFormValidation[
                                            formCategory
                                        ].getStatusValidation(input.id).value
                                    "
                                    :label="input.label"
                                    class="w-4/5"
                                    :type="input?.type || 'text'"
                                    @input="
                                        mapAuthFormValidation[
                                            formCategory
                                        ].touch(input.id)
                                    "
                                />

                                <AtomVValidationMessage
                                    :is-error="
                                        mapAuthFormValidation[
                                            formCategory
                                        ].isDirtyAndError(input.id)
                                    "
                                    :error-message="
                                        mapAuthFormValidation[
                                            formCategory
                                        ].getMessage(input.id)
                                    "
                                />
                            </TemplateAuthFormControl>
                        </template>
                        <AtomVButton
                            type="submit"
                            :disabled="
                                !mapAuthFormValidation[formCategory].isFormValid
                                    .value
                            "
                            :name="mapAuthButtons[formCategory].name"
                        />
                    </TemplateAuthForm>
                </TabPanel>
            </template>
        </TemplateAuth>
    </NuxtLayout>
</template>

<style lang="scss" scoped>
button.tab:first-child {
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
}

button.tab:last-child {
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
}
</style>
