import { Tracing } from "trace_events";

type MapStringsCallback = (item: string) => string;

export function mapString(array: string[], callbackfn: MapStringsCallback): string[] {
    const newArray: string[] = [];

    for (let i = 0; i < array.length; i++) {
        const item = array[i];
        newArray.push(callbackfn(item));
    }
    return newArray;
}

const abc = ['a', 'b', 'c'];

const appMapped = mapString(abc, (item: any) =>  {
    return item.toUpperCase();
});

console.log(appMapped);
