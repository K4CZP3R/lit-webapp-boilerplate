import { AnyAction, Dispatch } from "redux";

export const CLICK_ONE = "CLICK_ONE";
export const CLICK_TWO = "CLICK_TWO";

export const clickOne = () => (dispatch: Dispatch) => {
    dispatch({
        type: CLICK_ONE,
        payload: {
            message: "Click One",
        },
    });
};

export const clickTwo = () => (dispatch: Dispatch) => {
    dispatch({
        type: CLICK_TWO,
        payload: {
            message: "Click Two",
        },
    });
};

const INITIAL_STATE: { clicks: number } = {
    clicks: 0,
};

// eslint-disable-next-line default-param-last
export const clickReducer = (state = INITIAL_STATE, action: AnyAction) => {
    switch (action.type) {
    case CLICK_ONE:
        return {
            ...state,
            clicks: state.clicks + 1,
        };
    case CLICK_TWO:
        return {
            ...state,
            clicks: state.clicks + 2,
        };
    default:
        return state;
    }
};
