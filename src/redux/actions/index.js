// qui scriviamo le action dei dispatch per gestire le aggiunte e le rimozioni alla pagina preferiti

export const ADD_TO_FAVOURITES = "ADD_TO_FAVOURITES";

export const addToFavouritesAction = (data) => {
  return {
    type: ADD_TO_FAVOURITES,
    payload: data,
  };
};

export const REMOVE_JOB_FAVOURITE = "REMOVE_JOB_FAVOURITE";

export const removeFromFavouritesAction = (job) => {
  return {
    type: REMOVE_JOB_FAVOURITE,
    payload: job,
  };
};
