import { DeepReadonly, onMounted, onUnmounted, readonly, Ref, ref } from "vue";
import { Ploc } from "~~/client/core/common/presentation/Ploc";

export function useVPlocState<S>(ploc: Ploc<S>): DeepReadonly<Ref<S>> {
    const state = ref(ploc.state) as Ref<S>;

    const stateSubscription = (newState: S) => {
        state.value = newState;
    };

    onMounted(() => {
        ploc.subscribe(stateSubscription);
    });

    onUnmounted(() => {
        ploc.unsubscribe(stateSubscription);
    });

    return readonly(state);
}
