import { SelectedProductContext } from "./SelectedProductContext";

const SelectedProductProvider = ({children,val}) => {
    return (
        <SelectedProductContext.Provider value={val}>
            {children}
        </SelectedProductContext.Provider>
    )
}  

export default SelectedProductProvider;