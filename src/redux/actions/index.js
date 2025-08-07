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

export const GET_JOBS = "GET_JOBS";

export const getJobsAction = () => {
  return (dispatch) => {
    fetch("https://strive-benchmark.herokuapp.com/api/jobs?search=")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nel recupero dei dati");
        }
      })
      .then((resData) => {
        console.log(resData);
        dispatch({
          type: GET_JOBS,
          payload: resData,
        });
      })
      .catch((err) => {
        console.log("Error:", err);
      });
  };
};
