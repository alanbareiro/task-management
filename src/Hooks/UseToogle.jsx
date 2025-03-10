import { useCallback, useState } from "react"

export const UseToogle = (initialState = false) => {

    const [state, setState] = useState(initialState);

    const toogleState = useCallback(() =>
        setState((state) => !state), []
    );

    return [state, toogleState];

}