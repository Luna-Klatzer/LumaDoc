import { defineStore } from 'pinia'
import {SDSClient} from "@/services/phoenix/ws-client";

export const useWSClientStore = defineStore('wsClient', {
  state: () => {
    return { wsClient: null as null | SDSClient }
  },
  actions: {
    createWSClient(url: string, userToken?: string) {
      this.wsClient = new SDSClient(url, userToken)
    },
    disconnectWSClient() {
      if (this.wsClient) {
        this.wsClient.disconnect()
        this.wsClient = null
      }
    },
  },
})
