export const adding="ADD"
export const sub="SUB"
export function add(data)
{
    return {
        type:adding,
        data
    }
}
export function subtract(data)
{
    return {
        type:sub,
        data
    }
}

export function ADDDATA(name)
{
    return {
        type:"ADDDATA",
        name
    }
}
export function DELDATA(element,arr)
{
    return {
        type:"DELDATA",
        arr,
        element
    }
}
export function UPDATESTATUS(id,dayid,arr)
{
    return {
        type:"UPDATESTATUS",
        arr,
        
       
        id,
        dayid
    }
}
export function REMOVESTATUS(id,dayid,arr)
{
    return {
        type:"REMOVESTATUS",
        arr,
        id,
        dayid
    }
}

export function GETHABITS()
{
    return {
        type:"GETHABITS",
    
       
    }
}

export function ADDMULTIPLES(disease)
{
    return {
        type:"ADDMULTIPLEDATA",
        disease
    }
}