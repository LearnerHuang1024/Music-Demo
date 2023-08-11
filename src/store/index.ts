import { createStore, createLogger, StoreOptions } from 'vuex';
import { Context } from 'webpack';

const debug = process.env.NODE_ENV !== 'production';
const requireContext: Context = require.context('./src/store/modules', false, /\.ts$/);

// 创建一个空的根模块，将来用于组装所有导入的模块
const rootModule: StoreOptions<any> = {
  modules: {} // 初始化一个空的 modules 对象
};

requireContext.keys().forEach((fileName: string) => {
  const module = requireContext(fileName).default;
  if (module && module.name) {
    // 使用模块的 name 属性作为命名空间，将其注册到根模块中
    rootModule.modules![module.name] = module; // 使用 ! 表示 rootModule.modules 一定存在
  }
});

export default createStore({
  ...rootModule,
  strict: debug,
  plugins: debug ? [createLogger()] : []
});
