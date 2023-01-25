import { Ref } from "vue";
import { ColorInput } from "~~/shared/constants";

export const useVMoleculeInput = (
    props: {
        modelValue: string;
        statusValidation:
            | "inactive"
            | "initial-error"
            | "dirty-error"
            | "correct";
    },
    isFocus: Ref<boolean>
) => {
    const colorStatusValidation = computed(() => {
        if (props.statusValidation === "correct") return ColorInput.CORRECT;
        else if (props.statusValidation === "dirty-error")
            return ColorInput.DIRTY_ERROR;
        else if (isFocus.value) return ColorInput.FOCUS;
        else if (props.statusValidation === "inactive")
            return ColorInput.INACTIVE;
    });

    const inputIsNotEmpty = computed(() => props.modelValue.length > 0);

    return { colorStatusValidation, inputIsNotEmpty };
};
