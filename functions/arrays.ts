export function mix(elements: any[]):any[]{
    return elements
            .map(element =>({value: element, randomValue: Math.random()}))
            .sort((object, nextObject)=> object.randomValue - nextObject.randomValue)
            .map(element => element.value)
}
