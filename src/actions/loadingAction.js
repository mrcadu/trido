const LOAD = 'load';
const UNLOAD = 'unload';
export function load(loading){
    return {
        type: loading ? LOAD : UNLOAD,
        loading,
    }
}