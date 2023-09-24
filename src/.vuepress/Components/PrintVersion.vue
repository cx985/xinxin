<script setup lang="ts">
import { onMounted } from 'vue';

import AppPackage from '../../../package.json';

const textConsole = `   
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
`;

const PrintlnInfo = () => {
  const PackageData: any = AppPackage;
  console.info(textConsole + PackageData.version);
};

alert(process.env.NODE_ENV)
onMounted(() => {
  PrintlnInfo();
});
</script>

<template>
  <ClientOnly>
    <div class="none">版本打印</div>
  </ClientOnly>
</template>

<style lang="scss"></style>
