import { adding, sub } from "./action";

export function reducer(state=0,action)
{
    console.log("in reducer")
    if(action.type==adding)
    {
        action.data+=1
        return action.data;
    }
    if(action.type==sub)
    {
        if(action.data>1)
        {
            action.data-=1;
            return action.data
        }
    }
    return state;
}