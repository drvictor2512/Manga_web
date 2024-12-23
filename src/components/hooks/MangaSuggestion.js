import apiClient from "../../API/apiClient";

export function MangaSuggestion(query){
    return apiClient.get(`/search/${query}`)
} 