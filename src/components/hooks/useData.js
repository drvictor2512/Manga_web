import { useQuery } from "@tanstack/react-query";
import apiClient from "../../API/apiClient";
import React from 'react'

const useData = (url, customConfig = {}, queryKey) => {
    const fetchFuntion = () => apiClient.get(url, customConfig).then(res =>res.data)
  return useQuery({
    queryKey: queryKey,
    queryFn: fetchFuntion,
    staleTime: 300_000,
  })
}

export default useData