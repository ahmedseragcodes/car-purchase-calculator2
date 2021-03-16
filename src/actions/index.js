
export const ADD_FEATURE="ADD_FEATURE";
export const REMOVE_FEATURE="REMOVE_FEATURE";


export const addFeature= (featureToAdd)=>{
    return ({ type: ADD_FEATURE, payload: featureToAdd })
}

export const removeFeature= (featureToRemove)=>{
    return ({ type: REMOVE_FEATURE, payload: featureToRemove })
}

