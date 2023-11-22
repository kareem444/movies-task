import { useReducer } from "react"
import { ModalReducer } from "./ModalReducer"
import { ModalInitState } from "./ModalInitState"
import { HideModalType, ShowModalType } from "./ModalTypes"

export const useModalReducer = () => {
    const [modal, dispatch] = useReducer(ModalReducer, ModalInitState)

    const showModal: boolean = modal.showModal
    const showModalAction = () => { dispatch({ type: ShowModalType }) }
    const hideModalACtion = () => { dispatch({ type: HideModalType }) }

    return {
        showModal,
        showModalAction,
        hideModalACtion
    }
}