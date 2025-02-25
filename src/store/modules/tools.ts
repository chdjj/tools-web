//创建tools相关的小工具
import { defineStore } from 'pinia'
import { getTools, getToolCate} from '@/api/tools'
import { getIp } from '@/api/ip'
import type { ToolsReqData, ToolsInfo, ToolCate } from '@/api/tools/type'
import type { IpReqData, IpInfo } from '@/api/ip/type'

export const useToolsStore = defineStore('tools', {
  //用来存放变量
  state: () => ({
    list: [] as ToolsInfo[],
    cates: [] as ToolCate[],
    ipData: {} as IpInfo,
  }),
  //方法
  actions: {
    //获取tools
    async getTools(data: ToolsReqData) {
      //发送请求
      const result: any = await getTools(data)
      if (result.code == 200) {
          this.list = result.data
          return result.message
      } else {
        return Promise.reject(new Error(result.message))
      }
    },
    //获取tools cate
    async getToolCate() {
      //发送请求
      const result: any = await getToolCate()
      if (result.code == 200) {
          this.cates = result.data
          return result.message
      } else {
        return Promise.reject(new Error(result.message))
      }
    },
    //获取ip
    async getIp(data: IpReqData) {
      const result: any = await getIp(data)
      if (result.code == 200) {
        this.ipData = result.data
        return result.message
    } else {
      return Promise.reject(new Error(result.message))
    }
    }
  }
})