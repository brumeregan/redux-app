import { SHOW_NEXT_PHOTO, SHOW_SELECTED_PHOTO, SHOW_PREV_PHOTO } from "./types";

export const showNextPhoto = () => ({
    type: SHOW_NEXT_PHOTO,
});

export const showSelectedPhoto = (photoIndex) => ({
    type:    SHOW_SELECTED_PHOTO,
    payload: photoIndex,
});

export const showPrevPhoto = () => ({
    type: SHOW_PREV_PHOTO
});
