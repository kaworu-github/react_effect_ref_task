import { useRef } from "react";

let useHandleFocusClick = () => {
    let refCompFocus = useRef(null);
    const handleFocus = () => {
        if (refCompFocus.current) {
            refCompFocus.current.focus();
        }
    }
    return{
        refCompFocus,
        handleFocus
    };
};

export default useHandleFocusClick;