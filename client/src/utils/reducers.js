import { useReducer } from "react";
import {
    UPDATE_CATEGORIES,
    UPDATE_CURRENT_CATEGORY,
    UPDATE_CHALLENGES
  } from "./actions";

export const reducer = (state, action) => {
    switch (action.type) {
    case UPDATE_CATEGORIES:
        return {
          ...state,
          categories: [...action.categories],
        }
  
      case UPDATE_CURRENT_CATEGORY:
        return {
          ...state,
          currentCategory: action.currentCategory
        }
  
      default:
        return state;
    }
  };
  
export function useChallengeReducer(initialState) {
    return useReducer(reducer, initialState)
  }