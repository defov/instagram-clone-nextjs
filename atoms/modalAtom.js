import { atom } from 'recoil'

export const modalOpenState = atom({
    key: 'modalOpenState',
    default: false
})

export const modalContentState = atom({
    key: 'modalContentState',
    default: null
})