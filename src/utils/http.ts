const baseURL = '你的URL基地址'

const httpInterceptor = {
    // 拦截前触发
    invoke(options: UniApp.RequestOptions) {
        // 如果链接中没有地址
        if (!options.url.startsWith('http')) {
            options.url = baseURL + options.url
        }
        // 修改请求超时 默认60000毫秒
        options.timeout = 10000
        // 设置请求头
        options.header = {
            ...options.header,
            'source-client': 'app',
        }

        // // 如有 token
        // if (token) {
        //     // 添加 token
        //     options.header.Authorization = token
        // }
    },
}


uni.addInterceptor('request', httpInterceptor)
uni.addInterceptor('uploadFile', httpInterceptor)

interface Data<T> {
    code: string
    msg: string
    result: T
}

// 响应拦截器
export const http = <T>(options: UniApp.RequestOptions) => {
    return new Promise<Data<T>>((resolve, reject) => {
        uni.request({
            ...options,
            success(res) {
                // 类型断言 (强制告知是 Data 类型)
                resolve(res.data as Data<T>)
            }
        })
    })
}
