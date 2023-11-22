import { ReducerAction } from "react";
import { IModalInitStateProperties } from "./ModalInterface";
import {
    HideModalType,
    ShowModalType,
} from "./ModalTypes";

export const ModalReducer: (
    state: IModalInitStateProperties,
    action: any
) => IModalInitStateProperties = (
    state: IModalInitStateProperties,
    action: any
) => {
        switch (action.type) {
            case ShowModalType:
                return { ...state, showModal: true };
            case HideModalType:
                return { ...state, showModal: false };
            default:
                return state;
        }
    };
