import { computed } from "vue";

export default function useSubmitButtonState(user, errors) {
    const isButtonDisable = computed(() => {
        let disabled = true;
        for (let prop in user) {
            if(!user[prop] || errors[prop]) {
                disabled = true;
                break;
            } else {
                disabled = false
            }
        }
        return disabled
    })

    return { isButtonDisable }
}