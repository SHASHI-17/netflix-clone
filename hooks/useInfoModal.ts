import {create} from 'zustand';

export interface ModelStoreInterface {
    movieId?:string;
    isOpen:boolean;
    openModal:(movieId:string)=>void;
    closeModel:()=>void;
}

const useInfoModal = create<ModelStoreInterface>((set)=>({
    movieId:undefined,
    isOpen:false,
    openModal:(movieId:string)=>set({
        isOpen:true,movieId
    }),
    closeModel:()=>set({isOpen:false,movieId:undefined})
}));

export default useInfoModal