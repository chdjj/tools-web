//统一管理咱们项目用户相关的接口
import request from '@/utils/request'

import type {
  ToolsReqData,
  ToolsResponseData,
  ToolCateResponseData
} from './type'

//项目用户相关的请求地址

enum API {
  //获取tools
  GET_TOOLS = '/tools',
  //获取tool cate
  GET_TOOL_CATES = '/tool/cates'
}
//获取tools
export const getTools = (data: ToolsReqData) => request.get<any, ToolsResponseData>(API.GET_TOOLS, {
  params: data
})
//获取tool cate
export const getToolCate = () => request.get<any, ToolCateResponseData>(API.GET_TOOL_CATES)