import{f as t,j as o,r as c,o as r,M as a,w as i,a as p}from"./app-57970fd2.js";import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";const d="xinxin",u="1.0.0",_="辰晨沉的个人博客",v="MIT",m="module",f={build:"vuepress build src",dev:"vuepress dev src --clean-cache",preview:"go run ./_shell/main.go ",update:"pnpm dlx vp-update",sync:"./_shell/GitSync.sh",deploy:"./_shell/Deploy.sh"},h={"@vuepress/client":"2.0.0-beta.67",aplayer:"^1.10.1",axios:"^1.5.0",vue:"^3.3.4",vuepress:"2.0.0-beta.67","vuepress-theme-hope":"2.0.0-beta.237"},y={"@types/store":"^2.0.2","date-fns":"^2.30.0",store:"^2.0.12","vue-router":"^4.2.4","vuepress-plugin-search-pro":"2.0.0-beta.237"},x={name:d,version:u,description:_,license:v,type:m,scripts:f,devDependencies:h,dependencies:y},P=p("div",{class:"none"},"版本打印",-1),b=`   
#   #            #   #             #                #         
  # #### ###       # #### ###            ##               ##        
  ####   ##   #    ####   ##   #         ##   #           ##        
  ##    ########   ##    ########     ##########          ##        
  #######    ##    #######    ##         ##  ##           ##    #   
  ## ###  #  #     ## ###  #  #          ## ##       #############  
  ## ##   ###      ## ##   ###           ####  #          ##        
  ## ##   ##       ## ##   ##       #############         ###       
  ## ##   ##       ## ##   ##           ###              ## #       
  ## ##   ##       ## ##   ##          ####   #          ## ##      
  ## ##  ####      ## ##  ####        ## ##  ###        ##   #      
  ## ##  ## #      ## ##  ## #       ##  #####          ##   ##     
  ## ## ##  ##     ## ## ##  ##    ##    ##   #        ##     ##    
  #  ## #    ##    #  ## #    ##         ##   #       ##       ###  
 #   ###     ###  #   ###     ###        #######     ##         ### 
     #        #       #        #          #####     #            #  
`,g=t({__name:"PrintVersion",setup(C){const e=()=>{console.info(b+x.version)};return o(()=>{e()}),(s,k)=>{const n=c("ClientOnly");return r(),a(n,null,{default:i(()=>[P]),_:1})}}}),w=l(g,[["__file","PrintVersion.vue"]]);export{w as default};
