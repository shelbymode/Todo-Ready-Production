/**
 * @desc: Generate functions for adding specific class to the DOM element
 * @example: for creating simple animation (pop in - pop out)
 * @warning: receives list classes as const in order to infer string[]
 */

import { Ref } from "vue";

export function useChainAddClass<A extends { [key: number]: string }, TKeys extends A[number]>(el: Ref<HTMLElement>, listClasses: A) {
    const animationController = {} as Record<TKeys, () => void>;

    const runAnimation = (className: string) => () => {
        el.value.classList.add(className);
    };

    [].forEach.call(listClasses, (classAnimation: TKeys) => {
        animationController[classAnimation] = runAnimation(classAnimation);
    });

    return { animationController };
}
