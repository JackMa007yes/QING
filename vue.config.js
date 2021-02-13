module.exports = {
    configureWebpack:{
        resolve:{
            alias:{ //起别名
                'assets':'@/assets',
                'common':'@/assets',
                'components':'@/components',
                'network':'@/network',
                'views':'@/views',
            }
        }
    }
}

