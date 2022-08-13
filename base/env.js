import getConfig from "next/config";

const { publicRuntimeConfig = {} } = getConfig()

export const assetPrefix = publicRuntimeConfig.assetPrefix || 'https://mzc-chainlist.seaeye.cn/static';