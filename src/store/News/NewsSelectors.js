import { createSelector } from "reselect";
import GlobalState from "../selectors";

export const globalNewsState = state => state.news || {};

export const newsState = () =>
    createSelector(GlobalState, substate => substate.news);

export const getNewsHomepageState = () =>
    createSelector(globalNewsState, substate => substate.getNewsHomepageState);

