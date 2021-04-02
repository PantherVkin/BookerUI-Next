import {NavProps} from './TypeProps'

export default (route:any, NavList: NavProps[]) => {
    const curNav =NavList.find(
            (ele) =>  route.fullPath.includes(ele.fullPath)
        )
    return curNav
}