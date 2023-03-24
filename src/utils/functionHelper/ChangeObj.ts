export const ChangeObj = (mainArr:Array<any>,propsArr:string,propsTemp:string,tempObj:any) => {
    return mainArr.map(user => user[propsArr] === propsTemp ? {...user, ...tempObj} : user)
}