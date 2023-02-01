export default {
    async fetch(request, env) {
      let url = new URL(request.url);
      if (url.pathname.startsWith('/')) {
        url.hostname="5244-5fa1c16ae9644afebe1d6def50e70f08.patr.cloud";  //你需要反代的域名
        let new_request=new Request(url,request);
        return fetch(new_request);
      }
      // 否则，提供静态资产。
      return env.ASSETS.fetch(request);
    }
  };
